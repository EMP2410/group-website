/* Transparent navbar over the homepage hero.
 *
 * Registered via `plugins_js` in params.yaml, which concatenates this file into
 * the theme's IIFE bundle — hence the IIFE wrapper (no top-level declarations
 * leak into the shared scope).
 *
 * While the viewer is at the very top of the homepage, the navbar drops its blue
 * frosted-glass panel and becomes plain white text over the video, so nothing
 * occludes the footage. Scrolling down past SHOW_AFTER px restores the panel.
 *
 * Two thresholds, not one: a scroll listener that flips on a single boundary
 * strobes when the user parks the scrollbar next to it (trackpad momentum and
 * scroll restoration both make this easy to hit). The gap between them is the
 * hysteresis band.
 */
(function () {
  'use strict';

  var SHOW_AFTER = 100; // px scrolled down before the panel comes back
  var HIDE_BELOW = 40;   // px we must return above before it drops away again
  var CLASS = 'navbar-transparent';

  function init() {
    // Only pages that actually have the full-bleed hero want this. Checking for
    // the block itself (rather than the URL) means it stays correct if the hero
    // is ever added to a widget or landing page.
    if (!document.querySelector('.emp-hero')) return;

    var transparent = document.body.classList.contains(CLASS);
    var queued = false;

    function render() {
      queued = false;
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;

      if (transparent) {
        if (y > SHOW_AFTER) {
          transparent = false;
          document.body.classList.remove(CLASS);
        }
      } else if (y < HIDE_BELOW) {
        transparent = true;
        document.body.classList.add(CLASS);
      }
    }

    function schedule() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(render);
    }

    window.addEventListener('scroll', schedule, { passive: true });

    // Run once up front so the very first paint already has the right state:
    // without this the navbar stays frosted until the first scroll event, and a
    // deep link (/publication/#anchor) or a restored scroll position would
    // briefly show the wrong one.
    render();

    // The hero is 100vh and the panel is sticky, so the transition should also
    // run when the viewport is resized back to the top.
    window.addEventListener('resize', schedule, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();