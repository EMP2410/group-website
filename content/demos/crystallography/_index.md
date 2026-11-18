---
title: Crystallography & XRD Refinement Demo
date: 2026-02-09
weight: 1
design:
  css_class: emp-demo-page
demo_screenshot: demos/crystallography_demo.jpg
summary: 'Build SC, BCC and FCC lattices in 3D, watch the matching XRD pattern appear in real time, then refine that pattern back to the true cell parameters with hill climbing, simulated annealing or gradient descent.'
---

<p class="emp-about-body">A live, interactive lesson in the two things that matter most in powder
diffraction: how a crystal structure turns into an XRD pattern, and how that pattern is refined
back into structural parameters. Nothing here is pre-rendered — the lattice, the diffraction
peaks, the reflection list and the refinement statistics are recomputed in your browser as you
move the sliders, so you can watch every parameter act on the result.</p>

<iframe class="emp-demo-frame"
        src="{{< demourl "demos/crystallography_demo.html" >}}"
        title="Crystallography &amp; XRD Refinement Demo"
        loading="lazy"></iframe>

<p class="emp-demo-actions">
  <a class="emp-cta" href="{{< demourl "demos/crystallography_demo.html" >}}" target="_blank" rel="noopener">Open the demo in a new tab</a>
</p>

<p class="emp-demo-hint">The frame above is the real thing, not a recording. Switch between the
two modes with the tabs, drag the 3D lattice to rotate it, hover a diffraction peak to read
off the Miller index that produced it, and click a row of the reflection list to see that plane
drawn inside the cell.</p>

<details class="emp-accordion" open>
<summary><h2 id="at-a-glance">At a glance</h2></summary>

<div class="emp-accordion__body">

| Feature | What you can do with it |
|---|---|
| **Crystal structures** | Simple cubic, body-centred cubic and face-centred cubic, rendered live in 3D |
| **Instrument parameters** | Lattice parameter *a* (2.0–8.0 Å), wavelength *λ* (0.1–2.5 Å), peak width (FWHM, 0.1–1.0°) |
| **Live XRD pattern** | Peaks computed from Bragg's law, with multiplicities, the Lorentz–polarization factor and the structure factor |
| **Reflection list** | Every family listed with *d*, 2θ, *I*/*I*₀, \|*F*\|² and allowed/extinct status |
| **Plane visualisation** | Click any row to draw that plane and its normal inside the 3D cell |
| **Refinement** | Refine the cell parameter, the instrument zero shift and the background — separately or together |
| **Optimisers** | Hill climbing, simulated annealing and gradient descent — three genuinely different search strategies |
| **Statistics** | *R*<sub>wp</sub>, *R*<sub>p</sub> and *χ*² update live while the refinement runs, with a convergence trace |
| **Interface** | Chinese and English, switchable at any time |

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="mode-1--structure-and-xrd-simulation">Mode 1 — Structure and XRD simulation</h2></summary>

<div class="emp-accordion__body">

The left panel holds the parameters; the centre holds the answer. Pick a structure and the
3D lattice redraws immediately. Change *a* and the peaks slide; change *λ* and everything moves
to higher or lower angles.

- **3D crystal structure** — simple cubic (SC), body-centred cubic (BCC) and face-centred cubic
  (FCC) structures rendered live, and you can rotate them with the mouse.
- **Interactive parameters** — lattice parameter *a* (2.0–8.0 Å), X-ray wavelength *λ*
  (0.1–2.5 Å) and peak width (FWHM, 0.1–1.0°).
- **Live XRD pattern** — diffraction peaks computed from Bragg's law and the extinction rules,
  with the intensity built up from multiplicity, the Lorentz–polarization factor and the structure
  factor.
- **Systematic absences** — the rule for the selected structure is spelled out next to the
  parameters, so the missing peaks are never a mystery: no absences for SC, *h* + *k* + *l* even
  for BCC, all-odd or all-even indices for FCC.
- **Reflection list** — one row per plane family, showing the Miller indices, the spacing *d*,
  the Bragg angle 2θ, the relative intensity *I*/*I*₀, the squared structure factor \|*F*\|² and
  whether the reflection is allowed or systematically extinct. Extinct rows are greyed out, and
  the counter at the top reports how many of the listed families actually diffract.
- **Degenerate families** — families that share the same spacing are flagged with a dagger;
  their intensities add up in the final peak.
- **Plane visualisation** — click any row of the list and the corresponding plane is drawn in the
  3D cell together with its normal, so the Miller indices stop being a label and become a
  picture.
- **Miller index hints** — hover a peak to read off its (hkl) together with its multiplicity and
  \|*F*\|².

### What to take away

- How the crystal structure maps onto the *position* of the diffraction peaks.
- Bragg's law, *nλ* = 2*d* sin *θ*, and why *d* depends on the cell parameter.
- The extinction rules that remove peaks for different space groups, and how they are read
  directly off the structure factor.
- How the cell parameter and the wavelength shift the whole pattern.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="mode-2--principles-of-xrd-refinement">Mode 2 — Principles of XRD refinement</h2></summary>

<div class="emp-accordion__body">

This mode takes the pattern you just produced, corrupts it the way a real measurement would be
corrupted, and asks how you would get the answer back.

- **Data import** — the pattern from the first tab is handed over as "observed data" with
  Poisson counting noise already applied; re-import it after changing anything in the first
  tab.
- **Model selection** — fit with a different crystal structure model than the true one and watch
  the fit degrade: the peaks simply cannot line up, and the refinement stalls.
- **Manual refinement** — slide the cell parameter and watch the residual shrink.
- **Parameter selection** — tick the quantities you want the algorithm to touch: the cell
  parameter, the instrument zero shift 2θ₀ or the background. Only the checked parameters are
  refined, which is how you separate "the sample is wrong" from "the instrument is mis-set".
- **Automatic refinement** — three genuine optimisation algorithms: hill climbing with a
  variable step, simulated annealing and gradient descent.
- **Live statistics** — *R*<sub>wp</sub> (weighted profile residual), *R*<sub>p</sub> (profile
  residual) and *χ*² (goodness of fit), with a definition for each one on hover.
- **Convergence trace** — *R*<sub>wp</sub> against iteration number on a logarithmic scale, so
  you can see whether the optimiser is still making progress or has settled.
- **Rietveld-style plot** — observed points, calculated curve and their difference, with the
  difference curve drawn on its own scale underneath.

### What to take away

- What a refinement actually minimises, and how it is evaluated.
- The meaning of the Rietveld statistics, and why *R*<sub>wp</sub> is always the larger of the two.
- Why *χ*² lands near 1 at the truth: the noise is Poisson counting noise, so the correct model
  with the correct parameters gives a reduced *χ*² of about one.
- How the three optimisation algorithms behave differently — hill climbing stalls in local minima,
  annealing escapes them, gradient descent converges fast but needs a good starting point.
- How the choice of model affects the fit, and why the wrong structure never quite fits.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="the-physics">The physics</h2></summary>

<div class="emp-accordion__body">

```
Bragg law:  nλ = 2d sinθ
  n  diffraction order (integer)
  λ  X-ray wavelength (Å)
  d  spacing of the reflecting planes
  θ  Bragg angle

Plane spacing:  d = a / √(h² + k² + l²)
```

The extinction rules follow directly from the structure factor:

- **SC** — every (hkl) diffracts, \|*F*\|² = 1.
- **BCC** — *h* + *k* + *l* even, so (100) and (111) are absent; \|*F*\|² = 4 when allowed.
- **FCC** — *h*, *k*, *l* all odd or all even, so (100) and (110) are absent; \|*F*\|² = 16 when
  allowed.

Peak intensities account for multiplicity, the Lorentz–polarization factor and the structure
factor. Noise is added as a slowly varying background plus Poisson counting statistics, so the
refinement is exercised on realistic data rather than on a clean synthetic curve.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="using-the-demo">Using the demo</h2></summary>

<div class="emp-accordion__body">

1. In mode 1, change the structure and the instrument parameters and follow the 3D lattice and
   the pattern together.
2. Compare SC, BCC and FCC for the same *a* and *λ*, and note which reflections disappear from
   the reflection list.
3. Click a row of the reflection list and watch the plane and its normal appear in the 3D cell.
4. Switch to mode 2, re-import the data, pick a model, then refine manually or automatically
   and watch *R*<sub>wp</sub>, *R*<sub>p</sub> and *χ*² respond.
5. Run all three algorithms on the same data and compare how many evaluations each one needs.
6. Hover the symbols in the formulas to read their definitions.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="technical-notes">Technical notes</h2></summary>

<div class="emp-accordion__body">

Vue.js 2.6, Three.js and Plotly.js are loaded from a CDN; all physical calculations and the
optimisation algorithms run in the browser. The 3D view keeps its aspect ratio in step with the
frame, so the demo stays legible whether it is opened full size or embedded in this page.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="teaching-use">Teaching use</h2></summary>

<div class="emp-accordion__body">

Materials science courses, XRD training, undergraduate crystallography, and self-study of
refinement methods. A natural sequence is to work through mode 1 first, then use mode 2 to
compare the three algorithms and build intuition about how they behave.

</div>
</details>
