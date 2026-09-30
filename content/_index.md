---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing
seo:
  title: EMP group

sections:
  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{< fullimage src="lab-photo.png" alt="EMP research group @ CityU HK" class="rounded" bleed="true" >}}

        <div class="text-center mt-4">
          <h1 class="hero-title mb-0">EMP research group @ CityU HK</h1>
        </div>

        <div class="hero-bio">
          {{< fullimage src="yangren-avatar.jpg" alt="Prof. Ren Yang" avatar="true" >}}
          <div class="hero-bio__text">
            The <strong>EMP research group @ CityU HK</strong>, led by <strong>Prof. Ren Yang</strong>, is part of the Department of Physics at City University of Hong Kong, and operates the Hong Kong JC STEM Lab of <em>Energy and Materials Physics</em>. We investigate the <strong>structure–property relationships</strong> of advanced materials using <strong>synchrotron X-ray and neutron scattering</strong> techniques.
          </div>
        </div>
    design:
      columns: '1'
      css_class: bleed-hero
      spacing:
        padding: ['0', '0', '40px', '0']
  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'
      css_class: section-narrow
  
  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: coders.png
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['200px', '0', '200px', '0']
      css_class: section-narrow section-banner-coders

  - block: collection
    content:
      title: Latest Publications
      text: ""
      count: 5
      filters:
        folders:
          - publication
    design:
      view: citation
      columns: '1'
      css_class: section-narrow

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
      css_class: section-narrow
---
