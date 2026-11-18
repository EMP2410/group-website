---
title: Real Space & Reciprocal Space Demo
date: 2026-11-18
weight: 3
design:
  css_class: emp-demo-page
demo_screenshot: demos/recip_real_demo.jpg
summary: 'Put the real-space unit cell and its reciprocal lattice side by side in one 3D view, click a reciprocal point to draw the matching plane family and its normal, and watch the two spaces expand and contract in opposite directions.'
---

<p class="emp-about-body">Real space and reciprocal space are two descriptions of the same
structure. This demo puts them in the same 3D viewport, driven by one shared camera, and lets
you handle the relationship directly: drag the cell parameter and the reciprocal lattice
contracts as the real space expands; click a diffraction point and the corresponding plane
family appears in the real-space cell with its normal drawn across it. The whole point of the
exercise is to turn "the reciprocal vector is normal to the plane" from a formula into
something you can see and manipulate.</p>

<iframe class="emp-demo-frame"
        src="{{< demourl "demos/recip_real_demo.html" >}}"
        title="Real Space &amp; Reciprocal Space Demo"
        loading="lazy"></iframe>

<p class="emp-demo-actions">
  <a class="emp-cta" href="{{< demourl "demos/recip_real_demo.html" >}}" target="_blank" rel="noopener">Open the demo in a new tab</a>
</p>

<p class="emp-demo-hint">The frame above is the real thing, not a recording. The left half is
real space and the right half is reciprocal space, sharing one camera — rotate the view and
both halves turn together. Click a reciprocal point on the right to draw the plane on the left,
or type the Miller indices directly.</p>

<details class="emp-accordion" open>
<summary><h2 id="at-a-glance">At a glance</h2></summary>

<div class="emp-accordion__body">

| Feature | What you can do with it |
|---|---|
| **Linked view** | Real space and reciprocal space in one viewport, sharing a single camera |
| **Structures** | Simple cubic, face-centred cubic, body-centred cubic and hexagonal close-packed |
| **Cell parameters** | *a* = 2.0–8.0 Å continuously, plus *c* = 3.0–10.0 Å for the hexagonal cell |
| **Reciprocal detail** | Independent zoom (0.3–3.0×) and a shell slider that controls how many reciprocal points are shown |
| **Display switches** | Cell edges, atoms, reciprocal points, selected plane, the rest of its family, and the equal-\|*G*\| shell |
| **Plane picking** | Click a reciprocal point, or type *h*, *k*, *l* from −6 to 6 |
| **Live readouts** | *a*, *d*, \|*G*\|, 2θ and the cell volume *V* |
| **Animation** | Auto-rotation and a lattice-breathing mode that cycles *a* to show the inverse relation |

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="what-you-can-do-with-it">What you can do with it</h2></summary>

<div class="emp-accordion__body">

- **Synchronised split view** — the real-space cell on the left, the reciprocal lattice on the
  right, one shared camera. Rotating the view turns both halves at once, which makes it obvious
  that the two pictures are the same object seen through two different projections.
- **Structure selection** — simple cubic (SC), face-centred cubic (FCC), body-centred cubic
  (BCC) and hexagonal close-packed (HCP).
- **Cell parameters** — *a* runs from 2.0 to 8.0 Å; the hexagonal cell adds *c* from 3.0 to
  10.0 Å. As *a* grows the real-space cell expands and the reciprocal lattice contracts in
  proportion, which is the reciprocal relation made visible.
- **Reciprocal display controls** — a dedicated zoom slider (0.3–3.0×) for inspecting the
  reciprocal lattice, and a shell slider that sets the range of visible reciprocal points
  (\|*h*\|, \|*k*\|, \|*l*\| ≤ *N*, *N* = 1…3). More shells mean more planes you can click.
- **Display switches** — cell edges, atoms, reciprocal points, the selected lattice plane, the
  other members of its family, and the shell of points with equal \|*G*\| can each be turned on
  and off independently.
- **hkl picking** — click any reciprocal point and the matching plane family is drawn in the
  real-space cell: the whole family appears in translucent grey, one adjacent pair is picked
  out in colour, and a dashed red arrow spans exactly the gap *d* between them, perpendicular
  to the planes. The selected point is highlighted on the right, and the *hkl*, *d* and \|*G*\|
  readouts update at once. You can also type the indices directly (from −6 to 6) and press
  Enter; the plane is still marked even if it lies outside the currently displayed shells.
- **Formula bar** — the relation **G** = *h***a***\* + *k***b***\* + *l***c***\*, \|*G*\| = 1/*d*
  and the cross-orthogonality **a**·**b***\* = **b**·**c***\* = **c**·**a***\* = 0 are shown above
  the view, and hovering any symbol explains what it is.
- **Numerical panel** — the lattice parameter *a*, the plane spacing *d*, the reciprocal vector
  length \|*G*\|, the corresponding 2θ for Cu Kα and the cell volume *V*, all updated live.
- **Animation** — auto-rotation for a slow turntable view, and a lattice-breathing mode in which
  *a* cycles so the real space swells while the reciprocal space shrinks.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="what-to-take-away">What to take away</h2></summary>

<div class="emp-accordion__body">

- The reciprocal basis vectors **a**\* = (**b** × **c**)/*V* and their meaning.
- That **G** = *h***a**\* + *k***b**\* + *l***c**\* is normal to the (hkl) plane and has length
  1/*d*, so a diffraction point *is* a plane normal.
- That *d* and 1/*d* are reciprocals — visible directly in the breathing animation.
- The extinction conditions: for BCC, *h* + *k* + *l* must be even; for FCC, all three indices
  odd or all even. The grey reciprocal points are the extinguished reflections, and the rule is
  computed from the full cell content rather than hard-coded.
- The classic shapes of the FCC and BCC reciprocal lattices (FCC an octahedron, BCC a
  cuboctahedron), and how they differ from the real-space cell.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="the-physics">The physics</h2></summary>

<div class="emp-accordion__body">

```
Reciprocal basis:  a* = (b × c)/V,   b* = (c × a)/V,   c* = (a × b)/V
Reciprocal vector: G = h·a* + k·b* + l·c*

Orthogonality:  a·a* = b·b* = c·c* = 1
                a·b* = b·c* = c·a* = 0      ← the cross conditions

Plane spacing:  1/d² = hᵀ G⁻¹ h
  cubic:     1/d² = (h² + k² + l²)/a²
  hexagonal: 1/d² = (4/3)(h² + hk + k²)/a² + l²/c²

Structure factor:  F_hkl = Σ_j f_j exp(2πi(h·x_j + k·y_j + l·z_j))
Intensity:         I_hkl = |F_hkl|² · (1 + cos²2θ)/(sin²θ cosθ) · m
```

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="using-the-demo">Using the demo</h2></summary>

<div class="emp-accordion__body">

1. Drag the *a* slider and watch the two halves move in opposite directions.
2. Click a reciprocal point on the right and follow the plane family that appears on the left.
3. Type a Miller index and press Enter to pick a plane that is not currently on screen.
4. Switch the display switches on and off to separate the selected plane from the rest of its
   family.
5. Turn on the equal-\|*G*\| shell and check that it only passes through points with the same
   \|*G*\|.
6. Switch between SC, FCC, BCC and HCP and compare the extinction patterns.
7. Hover the symbols in the formula bar for their definitions.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="technical-notes">Technical notes</h2></summary>

<div class="emp-accordion__body">

Vue.js 2.6 and Three.js are loaded from a CDN; all geometry and the crystallographic
calculations run in the browser. The two halves are drawn by a single WebGL renderer using
scissor and viewport, sharing one perspective camera. Everything is modelled in unit-cell
coordinates and scaled afterwards — the real-space group by (*a*, *a*, *c*) and the reciprocal
group by (1/*a*, 1/*a*, 1/*c*) — so changing the cell parameters never rebuilds the geometry
and the animation stays smooth. Lattice planes are clipped against a slightly oversized box
with the Sutherland–Hodgman algorithm, because a plane such as (111) would otherwise degenerate
to an edge when clipped exactly to the cell.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="teaching-use">Teaching use</h2></summary>

<div class="emp-accordion__body">

Crystallography fundamentals, the geometry of diffraction, and the first steps of powder
diffraction — from the reciprocal lattice to the position of a peak. The 3D view is a teaching
sketch: the atoms are shown as a 3×3×3 neighbourhood rather than a real infinite crystal, the
structure factor uses a single scattering-factor approximation without anomalous scattering
or temperature factors, and the displayed range of the reciprocal lattice is limited by the
shell slider. It works best as a companion to a derivation rather than as a replacement for
one.

</div>
</details>