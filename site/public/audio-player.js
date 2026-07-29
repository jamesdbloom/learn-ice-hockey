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
