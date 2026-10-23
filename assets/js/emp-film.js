/* Click-to-play behaviour for the About-section film frame (empfilm shortcode).
 * Kept out of hero-slider.js because the two widgets have different lifecycles:
 * the hero owns playback for a rotating track, this frame owns a single video
 * the visitor explicitly opted into.
 */
(function () {
  'use strict';

  function play(frame) {
    var video = frame.querySelector('.emp-film__video');
    if (!video) return;

    frame.classList.add('is-playing');
    // Unmute only after the visitor clicked — autoplay policy stays satisfied.
    video.muted = false;

    var p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function () {
        // Re-show the poster so the frame never ends up as a black rectangle.
        frame.classList.remove('is-playing');
      });
    }
  }

  function initAll() {
    var frames = document.querySelectorAll('[data-emp-film]');
    Array.prototype.forEach.call(frames, function (frame) {
      if (frame.getAttribute('data-emp-film-ready') === '1') return;
      frame.setAttribute('data-emp-film-ready', '1');

      var btn = frame.querySelector('[data-emp-film-play]');
      if (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          play(frame);
        });
      }

      // Clicking anywhere on the frame that isn't the button does the same.
      frame.addEventListener('click', function () {
        if (frame.classList.contains('is-playing')) return;
        play(frame);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();