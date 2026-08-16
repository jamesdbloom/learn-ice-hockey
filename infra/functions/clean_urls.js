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
//
// It also 301s www to the apex, ahead of the rewrite:
//
//   https://www.example.com/faceoffs/  -> https://example.com/faceoffs/
//
// Both hostnames are aliases on the same distribution, so before this www
// returned 200 and served the whole site. Every page was therefore reachable
// at two URLs, each carrying a canonical pointing at the apex — which is
// exactly what Search Console reports as "Alternative page with proper
// canonical tag". A canonical is a hint; a 301 is not, and Bing and Yandex
// lean on the redirect far more heavily than Google does.
//
// The apex is derived by stripping the leading "www.", not hardcoded, so this
// stays correct if the domain changes. Query strings are preserved.

function handler(event) {
    var request = event.request;
    var uri = request.uri;

    var host = request.headers.host && request.headers.host.value;

    if (host && host.indexOf('www.') === 0) {
        var apex = host.substring(4);
        var query = '';
        var qs = request.querystring;

        for (var key in qs) {
            // A valueless key (?foo) has an empty string value, and must stay
            // valueless rather than becoming ?foo=.
            var pair = qs[key].value === '' ? key : key + '=' + qs[key].value;
            query = query === '' ? '?' + pair : query + '&' + pair;

            // multiValue holds the 2nd and later occurrences of a repeated key.
            if (qs[key].multiValue) {
                for (var i = 0; i < qs[key].multiValue.length; i++) {
                    var mv = qs[key].multiValue[i].value;
                    query = query + '&' + (mv === '' ? key : key + '=' + mv);
                }
            }
        }

        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: 'https://' + apex + uri + query },
                // A redirect that is itself cached for a year is very hard to
                // undo, so this is deliberately short.
                'cache-control': { value: 'max-age=3600' }
            }
        };
    }

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
