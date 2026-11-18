---
title: People
date: 2022-10-24

type: landing

sections:
  - block: people
    content:
      title: Meet the Team
      # Each entry below is one tier of the lab.
      #   Membership comes from the `user_groups` front matter of every profile
      #   under content/authors/, so adding someone to the lab stays a one-line
      #   edit in their own profile.
      #   `layout` picks the card style used for that tier:
      #     leader  - one wide featured card (the lab Director)
      #     pi      - cards with affiliation and research interests
      #     member  - compact tiles (postdocs, students, staff)
      #   `members` is optional; when present it fixes the order of that tier
      #   and bypasses the group query.
      #   A group may also carry `groups:` to nest sub-groups one level below
      #   it (Alumni). A sub-group is rendered as a sub-heading and its `group`
      #   value is matched against `user_groups` exactly, so sub-group names
      #   are written as paths (`Alumni/...`) to stay unique across the section.
      groups:
        - name: Director
          group: Director
          layout: leader
          members:
            - yangren
        - name: Principal Investigators
          group: Principal Investigators
          layout: pi
          members:
            - lidanfeng
            - qiliu
            - majunzhang
            - yuchai
            - haixingli
        - name: Postdoctoral Researchers
          group: Postdoctoral Researchers
          layout: member
        - name: PhD Students
          group: PhD Students
          layout: member
        - name: Master Students
          group: Master Students
          layout: member
        - name: Undergraduate Students
          group: Undergraduate Students
          layout: member
        - name: Research Assistants
          group: Research Assistants
          layout: member
        - name: Visiting Scholars
          group: Visiting Scholars
          layout: member
        - name: Visiting Students
          group: Visiting Students
          layout: member
        - name: Administration
          group: Administration
          layout: member
        - name: Alumni
          group: Alumni
          layout: member
          # Sub-groups are matched exactly against `user_groups`, so their
          # names are written as paths to stay unique across the section.
          groups:
            - name: Former Postdoctoral Researchers
              group: Alumni/Former Postdoctoral Researchers
              layout: member
            - name: Graduated PhD Students
              group: Alumni/Graduated PhD Students
              layout: member
            - name: Graduated Master Students
              group: Alumni/Graduated Master Students
              layout: member
            - name: Graduated Undergraduate Students
              group: Alumni/Graduated Undergraduate Students
              layout: member
            - name: Former Visiting Scholars
              group: Alumni/Former Visiting Scholars
              layout: member
            - name: Former Visiting Students
              group: Alumni/Former Visiting Students
              layout: member
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: true
      show_role: true
      show_organizations: true
      show_social: true
      show_bio: true
---
