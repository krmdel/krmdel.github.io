---
layout: page
title: "TriAgent: Automated Biomarker Discovery with Deep Research Grounding for Triage in Acute Care by LLM-Based Multi-Agent Collaboration"
img: https://keremdelikoyun.com/projects/arxiv25_2.png
importance: 1
category: research
github: https://github.com/krmdel/TriAgent
arxiv: https://arxiv.org/abs/2510.16080
_styles: |
  .post-header { display: none; }
---

<h1 class="post-title" style="margin-top: 20px; margin-bottom: 30px; text-align: justify;">TriAgent: Automated Biomarker Discovery with Deep Research Grounding for Triage in Acute Care by LLM-Based Multi-Agent Collaboration</h1>

<div class="row justify-content-center" style="margin-top: 30px; margin-bottom: 30px;">
  <div class="col-sm-12 col-md-10 col-lg-8">
    {% include figure.liquid path="https://keremdelikoyun.com/projects/arxiv25_2.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

## Abstract

<p style="text-align: justify; line-height: 1.6;">Emergency departments worldwide face rising patient volumes, workforce shortages, and variability in triage decisions that threaten the delivery of timely and accurate care. Current triage methods rely primarily on vital signs, routine laboratory values, and clinicians' judgment, which, while effective, often miss emerging biological signals that could improve risk prediction for infection typing or antibiotic administration in acute conditions. To address this challenge, we introduce TriAgent, a large language model (LLM)-based multi-agent framework that couples automated biomarker discovery with deep research for literature-grounded validation and novelty assessment. TriAgent employs a supervisor research agent to generate research topics and delegate targeted queries to specialized sub-agents for evidence retrieval from various data sources. Findings are synthesized to classify biomarkers as either grounded in existing knowledge or flagged as novel candidates, offering transparent justification and highlighting unexplored pathways in acute care risk stratification. Unlike prior frameworks limited to existing routine clinical biomarkers, TriAgent aims to deliver an end-to-end framework from data analysis to literature grounding to improve transparency, explainability and expand the frontier of potentially actionable clinical biomarkers. Given a user's clinical query and quantitative triage data, TriAgent achieved a topic adherence F1 score of 55.7 +/- 5.0%, surpassing the CoT-ReAct agent by over 10%, and a faithfulness score of 0.42 +/- 0.39, exceeding all baselines by more than 50%. Across experiments, TriAgent consistently outperformed state-of-the-art LLM-based agentic frameworks in biomarker justification and literature-grounded novelty assessment.</p>

<div style="margin-top: 20px;">
  <p style="margin-bottom: 10px;">
    <a href="https://github.com/krmdel/TriAgent" rel="external nofollow noopener" target="_blank" style="text-decoration: none; color: inherit;">
      <i class="fa-brands fa-github" style="margin-right: 8px;"></i> Repository
    </a>
  </p>
  <p>
    <a href="https://arxiv.org/abs/2510.16080" rel="external nofollow noopener" target="_blank" style="text-decoration: none; color: inherit;">
      <i class="ai ai-arxiv ai-1x" style="margin-right: 8px;"></i> Paper
    </a>
  </p>
</div>
 
