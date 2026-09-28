---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing
seo:
  title: EMP group

sections:
  - block: hero
    content:
      title: |
        EMP research group @ CityU HK
      image:
        filename: lab-photo.png
      text: |
        <br>

        The **EMP research group @ CityU HK**, led by **Prof. Ren Yang**, is part of the Department of Physics at City University of Hong Kong, and operates the Hong Kong JC STEM Lab of *Energy and Materials Physics*. We investigate the **structure–property relationships** of advanced materials using **synchrotron X-ray and neutron scattering** techniques, with current emphasis on phase transitions, correlated electron systems, engineering materials, nanoparticles, and energy storage and conversion materials.
  
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
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen

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

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
