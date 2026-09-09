/* Extracted from src/components/AudioPlayer.astro.
 *
 * A file rather than an inline script because the production CSP is
 * script-src 'self' with no 'unsafe-inline' (infra/locals.tf). Inline
 * scripts are silently blocked in production and work fine locally,
 * because the policy is a CloudFront response header.
 */
// Resumable playback position. Additive only: the <audio> element works
// perfectly well without this.
(function () {
  var wrap = document.querySelector('[data-audio-player]');
  if (!wrap) return;
  var audio = wrap.querySelector('audio');
  var key = wrap.dataset.storageKey;
  if (!audio || !key) return;

  function read() {
    try {
      return parseFloat(localStorage.getItem(key) || '') || 0;
    } catch (e) {
      return 0;
    }
  }

  function write(value) {
    try {
      localStorage.setItem(key, String(value));
    } catch (e) {
      /* ignore */
    }
  }

  // ⚠️ A FAILED SOURCE IS NOT A FALLBACK CASE, AND THE MARKUP DOES NOT COVER IT.
  // The <a> inside <audio> is the fallback for a browser with NO <audio> support.
  // A browser that supports <audio> perfectly and cannot FETCH the file shows the
  // native transport as normal: "Listen", a play triangle, 0:00 / 0:00, a full-width
  // scrubber. Measured in headless Chrome against a 404: the ONLY pixel difference
  // before and after pressing play is the triangle dimming by one shade, while
  // audio.error is {code: 4, MEDIA_ELEMENT_ERROR: Format error}.
  // ⚠️ That is a MISLEADING affordance, not a degraded one — a healthy-looking
  // control that does nothing — and it would appear on all 37 pages the moment the
  // site is deployed before the audio is uploaded. So say so out loud.
  audio.addEventListener('error', function () {
    if (wrap.dataset.failed) return;
    wrap.dataset.failed = '1';
    var note = document.createElement('p');
    note.className = 'audio-player__error';
    note.setAttribute('role', 'status');
    note.textContent = 'This episode is not available yet.';
    wrap.replaceChildren(note);
  });

  var resumed = false;
  audio.addEventListener('loadedmetadata', function () {
    if (resumed) return;
    resumed = true;
    var at = read();
    if (at > 2 && at < audio.duration - 5) audio.currentTime = at;
  });

  var last = 0;
  audio.addEventListener('timeupdate', function () {
    var now = Date.now();
    if (now - last < 4000) return;
    last = now;
    write(audio.currentTime);
  });

  audio.addEventListener('ended', function () {
    write(0);
  });
})();
