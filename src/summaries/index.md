---
title: All AI Summaries
layout: base.njk
---

<h1>All AI Summaries</h1>

<ul class="summary-list">
  {% for post in collections.summaries %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a><br>
      <small>{{ post.date | formatDate("DD MMM YYYY") }}</small><br>
      <p>{{ post.data.summary }}</p>
    </li>
  {% endfor %}
</ul>
