---
layout: page
title: "Organon: An Agent-First Operating System for Scientific Discovery"
img: https://github.com/krmdel/organon/raw/main/docs/assets/organon-hero.png
importance: 1
category: research
_styles: |
  .post-header { display: none; }
---

<h1 class="post-title" style="margin-top: 20px; margin-bottom: 30px; text-align: justify;">Organon: An Agent-First Operating System for Scientific Discovery</h1>

<div class="row justify-content-center" style="margin-top: 30px; margin-bottom: 30px;">
  <div class="col-sm-12 col-md-10 col-lg-8">
    {% include figure.liquid path="https://github.com/krmdel/organon/raw/main/docs/assets/organon-hero.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

## Abstract

<p style="text-align: justify; line-height: 1.6;">We describe Organon, a CLI-based agent-first operating system that wraps a frontier large language model in three concentric layers of state: a persistent agent identity (personality, user profile, cross-session memory, and a running learnings journal), a pack of composable skills organized by scientific workflow stage, and a research-context substrate that binds outputs to a researcher's actual papers, preferences, and active questions. The system runs entirely on Claude Code with Anthropic's Claude Opus 4.7 as the base model, and exposes every capability through natural language with slash commands and skills for triggers rather than a bespoke application surface. We report results on the Einstein Arena, a public benchmark of open mathematical construction problems derived from the companion paper to Google DeepMind's AlphaEvolve. At the time of this writing, Organon holds three live #1 ranks (First and Third Autocorrelation Inequality, Prime Number Theorem), a live #2 on Kissing Number in d = 12 with an integer-841 impossibility proof, and four additional solutions (Thomson Problem at N = 282, Hexagon Packing in a Hexagon n = 12, Second Autocorrelation Inequality, Erdős Minimum Overlap) whose raw scores strictly beat the current public #1 by margins of 1.46e-11 to 1.13e-6 but were dropped silently by the arena's per-problem minImprovement gate. On the Prime Number Theorem problem we also report a sealed-sandbox ablation in which the same Opus 4.7 model without Organon's orchestration plateaus at S = 0.9928, below Organon's S = 0.9949 by nearly 40× the margin separating Organon from the next public agent. We interpret this "last-mile" gap as the measurable contribution of composable-skill orchestration, plus a human-in-the-loop, over a raw frontier LLM operating in isolation. We position Organon as a complement, rather than a competitor, to evolutionary search systems like AlphaEvolve and FunSearch and end-to-end pipelines like the AI-Scientist, and discuss what a skill-first agent OS can offer the broader agentic-scientific-computing ecosystem that pure evolutionary or pure end-to-end pipelines cannot.</p>

<div style="margin-top: 20px;">
  <p style="margin-bottom: 10px;">
    <a href="https://github.com/krmdel/organon" rel="external nofollow noopener" target="_blank" style="text-decoration: none; color: inherit;">
      <i class="fa-brands fa-github" style="margin-right: 8px;"></i> Repository
    </a>
  </p>
  <p style="margin-bottom: 10px;">
    <a href="https://keremdelikoyun.com/organon/" rel="external nofollow noopener" target="_blank" style="text-decoration: none; color: inherit;">
      <i class="fa-solid fa-link" style="margin-right: 8px;"></i> Website
    </a>
  </p>
  <p>
    <a href="https://keremdelikoyun.substack.com/p/an-ai-agent-built-for-scientific" rel="external nofollow noopener" target="_blank" style="text-decoration: none; color: inherit;">
      <i class="fa-solid fa-newspaper" style="margin-right: 8px;"></i> Article
    </a>
  </p>
</div>
