---
layout: page
title: projects
permalink: /projects/
description: Most recent machine learning and software development projects.
nav: true
nav_order: 3
icon: 💻 # Page-specific favicon (emoji or image filename)
display_categories: []
horizontal: false
_styles: |
  .projects .card-title,
  .projects h2.card-title,
  .projects .card-body h2.card-title {
    font-size: 1.1rem !important;
    text-align: left !important;
    line-height: 1.4 !important;
  }
  .projects .card-img-top {
    height: 275px !important;
    width: 100% !important;
    object-fit: contain !important; /* fit horizontally; keep aspect ratio */
    object-position: center center !important;
    background-color: #ffffff !important; /* white bars top/bottom */
    display: block !important;
  }
  .projects .card .card-body {
    display: flex !important;
    flex-direction: column !important;
  }
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
