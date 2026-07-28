// CloudFront Function, viewer-request event, cloudfront-js-2.0 runtime.
//
// Astro is configured with build.format 'directory' and trailingSlash
// 'always', so every page is emitted as <route>/index.html. S3 has no index
// document behaviour when it is used as a REST origin behind OAC, so the
// rewrite has to happen here.
//
//   /                 -> /index.html
//   /faceoffs/        -> /faceoffs/index.html
//   /faceoffs         -> /faceoffs/index.html
//   /_astro/x.abc.css -> unchanged (last segment has an extension)
//   /favicon.svg      -> unchanged
//
// This runs before the cache lookup, so the cache key is the rewritten URI and
// /faceoffs and /faceoffs/ share one cache entry.

function handler(event) {
    var request = event.request;
    var uri = request.uri;

    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
        return request;
    }

    // Only the final path segment decides whether this looks like a file.
    // A dot in a directory name further up must not stop the rewrite.
    var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);

    if (lastSegment.indexOf('.') === -1) {
        request.uri = uri + '/index.html';
    }

    return request;
}
