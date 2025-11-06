---
layout: page
title: photos
permalink: /photos/
description: Photography and visual moments
nav: true
nav_order: 8
icon: 📷 # Page-specific favicon (emoji or image filename)
_styles: |
  .photos .card-img-top {
    height: 300px !important;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--global-bg-color);
  }
  .photos .card-img-top img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
---

<div class="photos">
  {% assign sorted_photos = site.photos | sort: "date" | reverse %}
  
  {% if sorted_photos.size > 0 %}
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {% for photo in sorted_photos %}
        {% include photos.liquid %}
      {% endfor %}
    </div>
  {% else %}
    <p style="text-align: center; color: var(--global-text-color-light); padding: 2rem;">
      No photos yet. Add photo files to the <code>_photos</code> folder to see them here.
    </p>
  {% endif %}
</div>

