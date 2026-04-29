#!/usr/bin/env python3
"""Fetch Substack RSS and materialize each item as a Jekyll _posts/*.md file.

Idempotent: existing files are left alone. New posts get:
  - layout: post
  - title/date/description from the feed
  - redirect: <substack URL>  (al-folio uses this to link the list entry
    straight to Substack rather than a local post page)
  - body = plain-text extraction of the article so Jekyll's auto read_time
    computation (number_of_words / 180) produces a sensible value.
"""

from __future__ import annotations

import html
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

FEED_URL = "https://keremdelikoyun.substack.com/feed"
POSTS_DIR = Path(__file__).resolve().parent.parent / "_posts"
CATEGORY = "substack"
CONTENT_ENCODED = "{http://purl.org/rss/1.0/modules/content/}encoded"

_TAG_RE = re.compile(r"<[^>]+>")
_WS_RE = re.compile(r"\s+")
_SLUG_STRIP = re.compile(r"[^\w\s-]", re.UNICODE)
_SLUG_SEP = re.compile(r"[\s_-]+")


def slugify(title: str) -> str:
    slug = _SLUG_STRIP.sub("", title.lower()).strip()
    slug = _SLUG_SEP.sub("-", slug)
    return slug[:80].strip("-") or "post"


def strip_html(markup: str) -> str:
    text = _TAG_RE.sub(" ", markup or "")
    text = html.unescape(text)
    return _WS_RE.sub(" ", text).strip()


def yaml_escape(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def truncate(text: str, limit: int = 240) -> str:
    if len(text) <= limit:
        return text
    head = text[: limit - 3]
    cut = head.rsplit(" ", 1)[0] if " " in head else head
    return cut + "..."


def fetch_feed(url: str = FEED_URL) -> bytes:
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (X11; Linux x86_64; rv:125.0) Gecko/20100101 Firefox/125.0"
        ),
        "Accept": "application/rss+xml, application/xml, text/xml, */*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
    }
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def parse_pub_date(raw: str | None) -> datetime:
    if raw:
        try:
            return parsedate_to_datetime(raw)
        except (TypeError, ValueError):
            pass
    return datetime.now(tz=timezone.utc)


def format_frontmatter_date(dt: datetime) -> str:
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt.strftime("%Y-%m-%d %H:%M:%S %z")


def build_post(item: ET.Element) -> tuple[str, str] | None:
    title = (item.findtext("title") or "").strip()
    link = (item.findtext("link") or "").strip()
    if not title or not link:
        return None

    dt = parse_pub_date(item.findtext("pubDate"))
    description_raw = (item.findtext("description") or "").strip()
    content_raw = (item.findtext(CONTENT_ENCODED) or "").strip()

    excerpt = truncate(strip_html(description_raw) or strip_html(content_raw))
    body = strip_html(content_raw) or excerpt

    slug = slugify(title)
    filename = f"{dt.strftime('%Y-%m-%d')}-{slug}.md"

    frontmatter = [
        "---",
        "layout: post",
        f'title: "{yaml_escape(title)}"',
        f"date: {format_frontmatter_date(dt)}",
        f'description: "{yaml_escape(excerpt)}"',
        f"redirect: {link}",
        "tags: []",
        f"categories: [{CATEGORY}]",
        "---",
        "",
        body,
        "",
    ]
    return filename, "\n".join(frontmatter)


def main() -> int:
    POSTS_DIR.mkdir(parents=True, exist_ok=True)

    try:
        raw = fetch_feed()
    except Exception as exc:
        # Soft-fail: Substack/Cloudflare sometimes blocks CI IPs; retry next run.
        print(f"warning: could not fetch feed: {exc}", file=sys.stderr)
        return 0

    try:
        root = ET.fromstring(raw)
    except ET.ParseError as exc:
        print(f"error: failed to parse feed: {exc}", file=sys.stderr)
        return 1

    channel = root.find("channel")
    if channel is None:
        print("error: feed has no <channel>", file=sys.stderr)
        return 1

    created = 0
    for item in channel.findall("item"):
        built = build_post(item)
        if built is None:
            continue
        filename, content = built
        target = POSTS_DIR / filename
        if target.exists():
            continue
        target.write_text(content, encoding="utf-8")
        print(f"created {filename}")
        created += 1

    print(f"done: {created} new post(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
