---
title: Synchrotron XRD 2D-to-1D Demo
date: 2026-02-09
weight: 2
design:
  css_class: emp-demo-page
demo_screenshot: demos/diffraction_demo.jpg
summary: 'Simulate a 2D diffraction image on a position-sensitive detector, integrate it into a 1D pattern, and recover the detector distance and beam centre by least-squares fitting hundreds of measured ring positions.'
---

<p class="emp-about-body">A demonstration of how synchrotron XRD data are converted from a 2D
area-detector image into a 1D diffraction pattern, together with an interactive lesson in
calibrating the instrument from the diffraction rings of a standard sample. The image, the
integration and the fit are all computed live in your browser.</p>

<iframe class="emp-demo-frame"
        src="{{< demourl "demos/diffraction_demo.html" >}}"
        title="Synchrotron XRD 2D-to-1D Demo"
        loading="lazy"></iframe>

<p class="emp-demo-actions">
  <a class="emp-cta" href="{{< demourl "demos/diffraction_demo.html" >}}" target="_blank" rel="noopener">Open the demo in a new tab</a>
</p>

<p class="emp-demo-hint">The frame above is the real thing, not a recording. Use the tabs to
switch between the two modes, right-drag the crosshair to mis-set the beam centre, left-click a
ring to inspect it, and press the auto-solve button to watch the least-squares fit converge
step by step.</p>

<details class="emp-accordion" open>
<summary><h2 id="at-a-glance">At a glance</h2></summary>

<div class="emp-accordion__body">

| Feature | What you can do with it |
|---|---|
| **Source** | Cu Kα, Mo Kα or high-energy synchrotron radiation |
| **Samples** | LaB₆ standard, CeO₂ ceria, gold nanoparticles or vitreous silica |
| **Detector** | Resolution, pixel size and sample-to-detector distance (SDD) |
| **Beam centre** | Right-drag the crosshair to simulate a mis-aligned instrument |
| **Live integration** | The 2D image is converted into a 1D pattern as you adjust the parameters |
| **Axis choice** | Read the pattern as 2θ, as the scattering vector *q* or as *d*-spacings |
| **Calibration** | Detector distance and beam-centre offset recovered from hundreds of ring positions |
| **Fit quality** | The root-mean-square error and the per-ring residuals are reported while you refine |
| **Interface** | Chinese and English, switchable at any time |

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="mode-1--diffraction-experiment-simulation">Mode 1 — Diffraction experiment simulation</h2></summary>

<div class="emp-accordion__body">

A position-sensitive detector records a two-dimensional image; what the crystallographer wants
is a one-dimensional pattern. This mode lets you drive the experiment and watch the conversion
happen as you go.

- **Adjustable source** — Cu Kα (1.54 Å / 8 keV), Mo Kα (0.71 Å / 17 keV) or high-energy
  synchrotron radiation (0.124 Å / 100 keV).
- **Sample choice** — LaB₆ (standard, eleven rings), CeO₂ (ceria, fluorite structure), gold
  nanoparticles, or vitreous silica for an amorphous pattern.
- **Detector settings** — resolution (256², 512² or 1024²), pixel size (200 μm flat panel or
  75 μm Eiger) and sample-to-detector distance.
- **Instrument conditions** — a resolution broadening term (FWHM in 2θ) and a background level,
  so you can trade peak sharpness against intensity the way a real instrument does.
- **Beam centre** — right-drag the crosshair to mis-assign the beam centre; left-click a ring to
  select it and read off its Miller index.
- **Live integration** — the 2D image is converted into a 1D pattern as you adjust the
  parameters, and the horizontal axis can be switched between 2θ, *q* (Å⁻¹) and *d* (Å).

### What to take away

- How the wavelength moves the diffraction angles — the same ring sits at a smaller radius when
  *λ* is smaller.
- The difference between crystalline and amorphous diffraction features: sharp rings against a
  broad, smooth halo.
- How a mis-set beam centre distorts the integrated pattern, and why it is so easy to miss.
- How instrument resolution broadens every ring, and why the peak then loses height while the
  total scattered intensity is conserved.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="mode-2--multi-ring-calibration-least-squares">Mode 2 — Multi-ring calibration (least squares)</h2></summary>

<div class="emp-accordion__body">

The classic first task on a beamline: the detector distance is unknown, and it has to be
recovered before anything else can be measured accurately.

- **Data source** — the calibration works on the 2D pattern produced in the first tab, not on a
  separate toy dataset.
- **Sector averaging** — the detector image is binned azimuthally into 32 sectors, so every
  Debye ring yields 32 independently measured peak positions. For LaB₆ that is up to
  11 rings × 32 = **352 observations**.
- **Over-determined fit** — the detector distance and the two beam-centre offsets are three
  unknowns against hundreds of observations, which is a genuine over-determined least-squares
  problem rather than a three-point interpolation.
- **Automatic rejection of bad rings** — a ring that sticks out past the edge of the detector is
  dropped automatically, because only a truncated arc is left in those sectors and no offset
  model can explain it.
- **Automatic solver** — a Nelder–Mead simplex searches the three parameters and reports the
  iteration count and the converged RMSE; the convergence trace is plotted as you go.
- **Live RMSE and per-ring residuals** — the overall error in pixels, plus a residual for every
  individual ring, so you can see whether the fit is uniformly good or hiding a bad ring.
- **Re-measure** — generate a new random error and repeat, to see how the fit behaves for a
  different true distance and a different mis-centred pattern.
- **Auto-calibrated beam centre** — if the marked centre is so far off that the rings smear
  together in the radial profile, the ring centre is first recovered from the symmetry of the
  pattern; all radii are still measured relative to your own mark, so the offset remains a real
  unknown to be fitted.

### What to take away

- The principle of ring calibration and why it is done before every measurement.
- How a multi-ring fit is carried out, and why hundreds of measurements are far more robust
  than three.
- Why rings that leave the detector have to be discarded rather than fitted.
- How to judge the quality of a fit from the RMSE and from the per-ring residuals.
- Why the inner rings are the most reliable — they carry the best signal-to-noise ratio, and
  they are least sensitive to errors in the beam centre.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="the-physics">The physics</h2></summary>

<div class="emp-accordion__body">

```
r = SDD × tan(2θ)
  θ = arcsin(λ / 2d)
  d = a / √(h² + k² + l²)
```

By fitting the positions of the known rings of a standard sample (such as LaB₆), the instrument
parameters — above all the detector distance — are recovered, which is what makes subsequent
measurements accurate.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="using-the-demo">Using the demo</h2></summary>

<div class="emp-accordion__body">

1. Open the demo and pick a mode from the tabs.
2. In mode 1, adjust the parameters; the picture and the numbers update in real time.
3. Right-drag the crosshair away from the centre and watch the 1D pattern degrade, then
   press **Auto-Calibrate Center** or put it back and watch it recover.
4. In mode 2, refine the detector distance and the beam-centre offset, or press **Auto
   Least-Squares Solve** and follow the convergence.
5. Press **Verify Distance** once the RMSE is small, then **Generate New Problem** and repeat
   with a different true distance.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="technical-notes">Technical notes</h2></summary>

<div class="emp-accordion__body">

HTML5 Canvas renders the 2D image, Plotly.js draws the 1D patterns, and the physical
calculations are plain JavaScript running in the browser. The 1D plot re-lays itself out
whenever the frame is resized, so it stays aligned with the detector image at any window size.

</div>
</details>

<details class="emp-accordion">
<summary><h2 id="teaching-use">Teaching use</h2></summary>

<div class="emp-accordion__body">

XRD data-processing classes, synchrotron beamline training and self-study of diffraction
geometry. Note that the model is deliberately simplified — real experiments are more complicated
— and that the inner rings carry the better signal-to-noise ratio.

</div>
</details>