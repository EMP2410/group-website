/* Homepage hero slider.
 *
 * Registered via `plugins_js` in params.yaml, which concatenates this file into
 * the theme's IIFE bundle — hence the IIFE wrapper (no top-level declarations
 * leak into the shared scope).
 *
 * Video handling mirrors what the reference JC STEM Lab site does, and the
 * reason for each step is noted inline: browsers only allow muted autoplay, a
 * 10-slide track must not stream every video up front, and an off-screen video
 * left playing keeps burning bandwidth and battery.
 */
(function () {
  'use strict';

  var DEFAULT_DURATION = 6500;
  var SWIPE_THRESHOLD = 48; // px of horizontal travel before we treat it as a swipe

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function initSlider(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.emp-hero__slide'));
    if (slides.length === 0) return;

    var dotsBox = root.querySelector('.emp-hero__dots');
    var prevBtn = root.querySelector('[data-emp-hero-prev]');
    var nextBtn = root.querySelector('[data-emp-hero-next]');
    var reduced = prefersReducedMotion();

    var index = 0;
    var timer = null;
    var dots = [];

    // --- dots -------------------------------------------------------------
    if (dotsBox && slides.length > 1) {
      dotsBox.innerHTML = '';
      slides.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'emp-hero__dot';
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', function () {
          go(i);
        });
        dotsBox.appendChild(dot);
        dots.push(dot);
      });
    }

    // --- video ------------------------------------------------------------
    function loadVideo(video) {
      var src = video.getAttribute('data-src');
      if (src && !video.getAttribute('src')) {
        video.setAttribute('src', src);
        video.load();
      }
    }

    function playVideo(video) {
      loadVideo(video);
      video.muted = true; // re-assert; some browsers reset it during load()
      if (reduced) return; // honour reduced-motion: show the poster frame only
      video.currentTime = 0;
      var p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () { /* autoplay blocked — poster frame stays visible */ });
      }
    }

    function pauseAllVideos() {
      slides.forEach(function (slide) {
        var v = slide.querySelector('.emp-hero__video');
        if (v && !v.paused) v.pause();
      });
    }

    // --- navigation -------------------------------------------------------
    function show(n) {
      index = (n + slides.length) % slides.length;

      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
        dot.setAttribute('aria-current', i === index ? 'true' : 'false');
      });

      var active = slides[index];
      if (active) {
        // Stop every video except the incoming one first, so the outgoing slide
        // never keeps decoding behind the crossfade.
        pauseAllVideos();
        var incoming = active.querySelector('.emp-hero__video');
        if (incoming) playVideo(incoming);
      }
    }

    function go(n) {
      show(n);
      start();
    }

    function step(delta) {
      go(index + delta);
    }

    // --- autoplay timer ---------------------------------------------------
    function currentDuration() {
      var raw = parseInt(slides[index].getAttribute('data-duration'), 10);
      return raw > 0 ? raw : DEFAULT_DURATION;
    }

    function start() {
      stop();
      if (slides.length < 2 || reduced) return;
      timer = window.setInterval(function () {
        step(1);
      }, currentDuration());
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    // --- wiring -----------------------------------------------------------
    if (prevBtn) prevBtn.addEventListener('click', function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { step(1); });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    // Touch: horizontal swipe only, so vertical page scroll is untouched.
    var touchStartX = 0;
    var touchStartY = 0;
    root.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    root.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
      step(dx < 0 ? 1 : -1);
    }, { passive: true });

    // Don't decode video while the tab is in the background.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        stop();
        pauseAllVideos();
      } else {
        var active = slides[index];
        var v = active && active.querySelector('.emp-hero__video');
        if (v) playVideo(v);
        start();
      }
    });

    // Keyboard support when a slide control has focus.
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { step(-1); }
      else if (e.key === 'ArrowRight') { step(1); }
    });

    show(0);
    start();
  }

  function initAll() {
    document.querySelectorAll('[data-emp-hero]').forEach(function (root) {
      if (root.dataset.empHeroReady === '1') return;
      root.dataset.empHeroReady = '1';
      initSlider(root);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();