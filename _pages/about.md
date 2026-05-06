---
layout: about
title: about
permalink: /
_styles: |
  /* Layout intro text and profile image as two columns on wider screens */
  @media (min-width: 576px) {
    .post article {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    /* Left column: all intro text and subsequent content */
    .post article .clearfix {
      flex: 0 0 68%;
      margin-right: 0;
    }

    /* Right column: profile image only */
    .profile {
      flex: 0 0 30%;
      float: none !important;
      margin-left: 2%;
    }
  }

  .profile img {
    max-width: 280px;
    width: 100%;
  }

  .post article .clearfix p {
    text-align: justify !important;
  }

  /* Hide unused more-info block */
  .profile .more-info {
    display: none !important;
  }

profile:
  align: right
  image: https://cdn.keremdelikoyun.com/profile.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p></p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<p style="text-align: justify !important;">
I'm a Research Fellow and Team Lead at TUMCREATE in Singapore, specializing in AI for healthcare and clinical decision support. Over the past 5+ years, I’ve built patented and production-grade AI systems on cloud-native platforms, and I hold my Doctor of Engineering (Dr.-Ing.) degree in Electrical and Computer Engineering from the Technical University of Munich (TUM) in Germany. I'm passionate about building intelligent systems that uncover the mysteries of life, bridging scientific discoveries with real-world impact. My work lies at the intersection of healthcare, computer vision and Gen AI, developing advanced computer vision pipelines for real-time, high-throughput medical imaging, and combining analytical AI with agentic AI to reveal hidden data patterns through multi-agent reasoning and automated grounding. I've published in high-impact journals and conferences and hold several issued and pending patents in computer vision, agentic AI, and biomedical imaging. Beyond research, I'm deeply motivated by the entrepreneurial and economic potential of AI and fascinated by how it will transform our world and society in the near future.
</p>
