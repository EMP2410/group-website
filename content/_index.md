---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing
seo:
  title: EMP group

sections:
  # ---------------------------------------------------------------- hero ----
  # Full-viewport crossfade track. Slides mix <video> and still-image
  # backgrounds; see layouts/partials/blocks/hero-slider.html for the
  # front-matter contract and assets/js/hero-slider.js for playback logic.
  #
  # `position` on the still slides is deliberately off-centre. Every asset here
  # is 1920x1080 (16:9) and the hero box is viewport-wide, so on a portrait
  # phone `background-size: cover` can only show a narrow vertical strip of the
  # frame — ~36% of its width at the 72vh mobile height. The x value positions
  # that strip: for a strip of fraction s of the image, `P = 100*(c - s/2)/(1-s)`
  # centres a subject whose horizontal centre sits at c. The subject bands were
  # measured by edge density across each frame (people and equipment outscore
  # empty wall and sky), so the values below are the midpoint of the busiest
  # band, rounded off the exact solution. On viewports >=1200px the crop is only
  # a few percent of the width and every value reads the same, so these cost
  # nothing on desktop. The video slides stay centred — moving footage has no
  # still composition to protect.
  #
  # Write these as single values. A two-value `58% 50%` is dropped to `58%` by
  # `hugo --minify`'s inline-style minifier; single values survive, and a lone
  # percentage is defined as `<x> center`, so nothing is lost.
  - block: hero-slider
    design:
      columns: '1'
      css_class: fullscreen emp-hero-section
    content:
      slides:
        - title: A Tour of CityU
          subtitle: Follow our students from the City University of Hong Kong campus to the Hong Kong JC STEM Lab of Energy and Materials Physics.
          duration_ms: 15000
          video:
            filename: part1.mp4
            poster: part1.jpg
        - title: Inside the Lab
          subtitle: A walkthrough of our instruments, equipment and the people who keep the experiments running.
          duration_ms: 16000
          video:
            filename: part2.mp4
            poster: part2.jpg
        - title: Celebrating the Opening
          subtitle: The Hong Kong JC STEM Lab of Energy and Materials Physics officially opens its doors.
          duration_ms: 8000
          link:
            text: Our research
            url: /publication/
          background:
            image:
              filename: celebration.png
              alt: Celebrating the opening of the Hong Kong JC STEM Lab
              # group spans ~35%-75% of the frame
              # Single value on purpose: `background-position: 58%` means
              # `58% center` per spec, and `hugo --minify`'s inline-style
              # minifier collapses the two-value form down to its first token
              # — a two-value position here silently loses its y component.
              position: 58%
              size: cover
        - title: Our Science Corner
          subtitle: Hands-on exhibits that bring materials physics out of the laboratory and into the classroom.
          duration_ms: 8000
          background:
            image:
              filename: 'science cornor.png'
              alt: The science corner of the Hong Kong JC STEM Lab
              # exhibits span ~55%-80% of the frame (single value = 77% center)
              position: 77%
              size: cover
        - title: Experiments in France
          subtitle: Supervising students through hands-on experimental work at our overseas partner site.
          duration_ms: 8000
          background:
            image:
              filename: 'experiments in france.png'
              alt: Students running experiments in France with the group
              # students span ~65%-85% of the frame (single value = 85% center)
              position: 85%
              size: cover

  # --------------------------------------------------------------- about ----
  - block: markdown
    content:
      title: About
      subtitle: Who we are and what we work on
      text: |
        <p class="emp-about-intro">The <strong>EMP research group @ CityU HK</strong>, led by <strong>Prof. Ren Yang</strong>, is part of the Department of Physics at City University of Hong Kong, and operates the Hong Kong JC STEM Lab of <em>Energy and Materials Physics</em>.</p>
        <div class="emp-about-body">
        <p>We investigate the <strong>structure–property relationships</strong> of advanced materials using <strong>synchrotron X-ray and neutron scattering</strong> techniques. Our work spans electrochemical energy storage and catalysis, quantum materials, and the structural analysis of cultural heritage objects.</p>
        </div>
        {{< empfilm video="part2.mp4" poster="part2.jpg" caption="Inside the Lab — a walkthrough of our instruments, equipment and the people who keep the experiments running." >}}
    design:
      columns: '1'
      css_class: section-narrow emp-section

  # ---------------------------------------------------------------- team ----
  - block: markdown
    content:
      title: Our Team
      subtitle: Physics, chemistry and materials science, in one room
      text: |
        <p class="emp-about-body">We are a small, hands-on group. Everyone runs their own samples, everyone learns the beamlines, and everyone is encouraged to bring problems that don't fit neatly into a single technique.</p>
        <ul class="emp-team-list">
        <li><strong>Faculty</strong> — <a href="{{< relref "/authors/yangren" >}}">Prof. Ren Yang</a> and visiting faculty collaborators</li>
        <li><strong>Postdoctoral researchers</strong> — independent project owners who co-supervise students</li>
        <li><strong>PhD students</strong> — MPhil and PhD, in materials physics and chemistry</li>
        <li><strong>Research assistants &amp; visiting students</strong> — short-term projects and exchange placements</li>
        </ul>
        <p class="emp-team-cta"><a class="emp-cta" href="{{< relref "/contact" >}}">Join our group</a></p>
    design:
      columns: '1'
      css_class: section-narrow emp-section

  # ---------------------------------------------------------------- news ----
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 3
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

  # -------------------------------------------------------------- banner ----
  # Full-width photo band with no body content. The section box is sized from
  # the image's own aspect ratio in custom.scss (.section-banner-coders) rather
  # than by `spacing: padding` here: a fixed 200px top/bottom padding pins the
  # box to a constant 400px tall, and background-size:cover then crops the
  # 2.864:1 image - 34% of its width on a phone, 40% of its height at 4K.
  # Do not re-add `spacing: padding` to this block.
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
      css_class: section-narrow section-banner-coders

  # --------------------------------------------------------- publications ----
  - block: collection
    content:
      title: Latest Publications
      text: ""
      count: 5
      # Featured publications carry `weight: -1` in their front matter. Hugo sorts
      # lower weights first, so they lead this block and the /publication/ list
      # page alike; everything else keeps the default date-descending order.
      sort_by: "Weight"
      sort_ascending: true
      filters:
        folders:
          - publication
    design:
      view: citation
      columns: '1'
      css_class: section-narrow
---