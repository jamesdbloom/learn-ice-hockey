/* Extracted from src/components/AudioPlayer.astro.
 *
 * A file rather than an inline script because the production CSP is
 * script-src 'self' with no 'unsafe-inline' (infra/locals.tf). Inline
 * scripts are silently blocked in production and work fine locally,
 * because the policy is a CloudFront response header.
 *
 * Additive only. The player works with this file absent: the format toggle is
 * pure CSS (`:has()`), and each <audio> element plays on its own. This adds:
 *   - resume, PER FORMAT. Conversation keeps the original key
 *     `audio-position:<doc_id>` so nobody loses their place; Playing principles
 *     uses `audio-position:<doc_id>:principles`. The key is on each <audio>.
 *   - pausing the other format when the listener switches or presses play;
 *   - remembering the last chosen format, site-wide, under `audio-format`;
 *   - hiding ONE option whose file fails, rather than the whole player.
 * Every localStorage access is wrapped: it throws in some private windows.
 */
(function () {
  var wrap = document.querySelector('[data-audio-player]');
  if (!wrap) return;
  var audios = Array.prototype.slice.call(wrap.querySelectorAll('audio[data-storage-key]'));
  if (!audios.length) return;

  var FORMAT_KEY = 'audio-format';

  function readNumber(key) {
    try {
      return parseFloat(localStorage.getItem(key) || '') || 0;
    } catch (e) {
      return 0;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, String(value));
    } catch (e) {
      /* ignore */
    }
  }

  function readString(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function trackOf(audio) {
    return audio.closest('[data-format]');
  }

  function radios() {
    return Array.prototype.slice.call(wrap.querySelectorAll('input[name="audio-format"]'));
  }

  function pauseAllExcept(keep) {
    audios.forEach(function (a) {
      if (a !== keep && !a.paused) a.pause();
    });
  }

  // ---- keep `--player-h` true -------------------------------------------------
  // `scroll-padding-top` adds `--player-h`, so if it is short a deep link lands its
  // heading behind the bar. The bar is one, two or three rows depending on the
  // viewport, the format count, the durations in the labels, the reader's font size
  // and whether a "not available" note was added, so measure it instead of
  // guessing. global.css carries breakpoint values for when this file does not run.
  if ('ResizeObserver' in window) {
    var root = document.documentElement;
    new ResizeObserver(function () {
      var rem = parseFloat(getComputedStyle(root).fontSize) || 16;
      var h = wrap.getBoundingClientRect().height;
      if (h > 0) root.style.setProperty('--player-h', (h / rem).toFixed(3) + 'rem');
    }).observe(wrap);
  }

  // ---- restore the last chosen format --------------------------------------
  var preferred = readString(FORMAT_KEY);
  if (preferred) {
    radios().forEach(function (r) {
      if (r.value === preferred) r.checked = true;
    });
  }

  // ---- switching ------------------------------------------------------------
  radios().forEach(function (r) {
    r.addEventListener('change', function () {
      if (!r.checked) return;
      write(FORMAT_KEY, r.value);
      pauseAllExcept(null);
    });
  });

  // ---- per-element behaviour ------------------------------------------------
  audios.forEach(function (audio) {
    var key = audio.dataset.storageKey;
    var track = trackOf(audio);
    var format = track ? track.dataset.format : '';

    audio.addEventListener('play', function () {
      pauseAllExcept(audio);
      // A hidden track can still start, from a media key or the OS's now-playing
      // controls. Show the one that is actually playing.
      radios().forEach(function (r) {
        if (r.value === format && !r.checked) r.checked = true;
      });
    });

    // ⚠️ A FAILED SOURCE IS NOT A FALLBACK CASE, AND THE MARKUP DOES NOT COVER IT.
    // The <a> inside <audio> is the fallback for a browser with NO <audio> support.
    // A browser that supports <audio> perfectly and cannot FETCH the file shows the
    // native transport as normal: a play triangle, 0:00 / 0:00, a full-width
    // scrubber. Measured in headless Chrome against a 404: the ONLY pixel difference
    // before and after pressing play is the triangle dimming by one shade, while
    // audio.error is {code: 4, MEDIA_ELEMENT_ERROR: Format error}.
    // ⚠️ That is a MISLEADING affordance, not a degraded one — a healthy-looking
    // control that does nothing. So say so out loud.
    // With two formats, only the failed one goes: its option and its track are
    // hidden and the other is selected. With nothing left, the bar is replaced by
    // the note, as it always was.
    audio.addEventListener('error', function () {
      if (audio.dataset.failed) return;
      audio.dataset.failed = '1';
      var remaining = audios.filter(function (a) {
        return !a.dataset.failed;
      });
      var note = document.createElement('p');
      note.setAttribute('role', 'status');

      if (!remaining.length) {
        if (wrap.dataset.failed) return;
        wrap.dataset.failed = '1';
        note.className = 'audio-player__error';
        note.textContent = 'This episode is not available yet.';
        wrap.replaceChildren(note);
        return;
      }

      var option = wrap.querySelector('[data-format-option="' + format + '"]');
      var label = option ? option.textContent.split('·')[0].trim() : 'This';
      if (option) option.hidden = true;
      if (track) track.hidden = true;
      var next = trackOf(remaining[0]);
      radios().forEach(function (r) {
        if (next && r.value === next.dataset.format) r.checked = true;
      });
      note.className = 'audio-player__note';
      note.textContent = 'The ' + label + ' episode is not available yet.';
      wrap.appendChild(note);
    });

    if (!key) return;

    var resumed = false;
    audio.addEventListener('loadedmetadata', function () {
      if (resumed) return;
      resumed = true;
      var at = readNumber(key);
      if (at > 2 && at < audio.duration - 5) audio.currentTime = at;
    });

    var last = 0;
    audio.addEventListener('timeupdate', function () {
      var now = Date.now();
      if (now - last < 4000) return;
      last = now;
      write(key, audio.currentTime);
    });

    audio.addEventListener('ended', function () {
      write(key, 0);
    });
  });
})();
