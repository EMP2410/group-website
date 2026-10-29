---
title: People
date: 2022-10-24

type: landing

sections:
  - block: people
    content:
      title: Meet the Team
      subtitle: A CityU laboratory bringing together faculty, researchers and students working across energy and materials physics.
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
        - name: Research Assistants and Visiting Students
          group: Research Assistants and Visiting Students
          layout: member
        - name: Administration
          group: Administration
          layout: member
        - name: Alumni
          group: Alumni
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
