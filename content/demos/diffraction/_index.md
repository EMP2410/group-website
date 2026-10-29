---
title: Synchrotron XRD 2D-to-1D Demo
date: 2026-02-09
weight: 2
design:
  css_class: emp-demo-page
demo_screenshot: demos/diffraction_demo.jpg
summary: 'Simulate a 2D diffraction image on a position-sensitive detector, integrate it into a 1D pattern, and calibrate the instrument distance from the first five LaB₆ rings.'
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
switch between the two modes, drag the crosshair to mis-set the beam centre, and move the
refinement slider to watch the fit converge.</p>

## At a glance

| Feature | What you can do with it |
|---|---|
| **Source** | Cu Kα, Mo Kα or high-energy synchrotron radiation |
| **Samples** | LaB₆ standard, gold nanoparticles or vitreous silica |
| **Detector** | Resolution, pixel size and sample-to-detector distance (SDD) |
| **Beam centre** | Drag the crosshair to simulate a mis-aligned instrument |
| **Live integration** | The 2D image is converted into a 1D pattern as you adjust the parameters |
| **Calibration** | The detector distance is hidden and must be recovered from the LaB₆ rings |
| **Fit quality** | The root-mean-square error of the fit is reported while you refine |
| **Interface** | Chinese and English, switchable at any time |

## Mode 1 — Diffraction experiment simulation

A position-sensitive detector records a two-dimensional image; what the crystallographer wants
is a one-dimensional pattern. This mode lets you drive the experiment and watch the conversion
happen as you go.

- **Adjustable source** — Cu Kα, Mo Kα or high-energy synchrotron radiation.
- **Sample choice** — LaB₆ standard, gold nanoparticles or vitreous silica.
- **Detector settings** — resolution, pixel size and sample-to-detector distance (SDD).
- **Beam centre** — drag the crosshair to simulate a beam centre offset.
- **Live integration** — the 2D image is converted into a 1D pattern as you adjust the parameters.

### What to take away

- How the wavelength moves the diffraction angles — the same ring sits at a smaller radius when
  *λ* is smaller.
- The difference between crystalline and amorphous diffraction features: sharp rings against a
  broad, smooth halo.
- How a mis-set beam centre distorts the integrated pattern, and why it is so easy to miss.
- How to change the instrument parameters and read their effect off the picture.

## Mode 2 — Multi-ring calibration (five-ring fit)

The classic first task on a beamline: the detector distance is unknown, and it has to be
recovered before anything else can be measured accurately.

- **Random instrument** — the detector distance is unknown at the start, and a new random problem
  can be generated at any time.
- **Fit on LaB₆** — the first five diffraction rings of the standard sample are used for the fit.
- **Live RMSE** — the root-mean-square error of the fit is reported as you refine.
- **Interactive refinement** — adjust the parameter and watch the fit converge.
- **Bilingual interface** — Chinese / English.

### What to take away

- The principle of ring calibration and why it is done before every measurement.
- How a multi-ring fit is carried out, and why several rings are used instead of just one.
- How to judge the quality of a fit from the RMSE.
- Why the inner rings are the most reliable — they carry the best signal-to-noise ratio, and
  they are least sensitive to errors in the beam centre.

## The physics

```
r = SDD × tan(2θ)
  θ = arcsin(λ / 2d)
  d = a / √(h² + k² + l²)
```

By fitting the positions of the known rings of a standard sample (such as LaB₆), the instrument
parameters — above all the detector distance — are recovered, which is what makes subsequent
measurements accurate.

## Using the demo

1. Open the demo and pick a mode from the tabs.
2. In mode 1, adjust the parameters; the picture and the numbers update in real time.
3. Drag the crosshair away from the centre and watch how the 1D pattern degrades, then put it
   back and watch it recover.
4. In mode 2, refine the detector distance until the RMSE is minimal, then press **Verify
   Distance** to check the answer.
5. Generate a new problem and repeat, to see how the fit behaves for a different true distance.

## Technical notes

HTML5 Canvas renders the 2D image, Plotly.js draws the 1D patterns, and the physical
calculations are plain JavaScript running in the browser. The 1D plot re-lays itself out
whenever the frame is resized, so it stays aligned with the detector image at any window size.

## Teaching use

XRD data-processing classes, synchrotron beamline training and self-study of diffraction
geometry. Note that the model is deliberately simplified — real experiments are more complicated
— and that the inner rings carry the better signal-to-noise ratio.