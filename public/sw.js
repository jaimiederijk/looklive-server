// init
var CacheName = "looklive-v1";

// Install
this.addEventListener('install', function(event) {

	// Cache
	event.waitUntil(
		caches.open('looklive-v1')
		.then(function(cache) {
			return cache.addAll([
				'./styles/style.css',
				'./images/header-320.jpg'
			]);
		})
	);

});

// Fetch
this.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then( function(response) {
			return response || fetch(event.request).then(function(response) {
				return caches.open('looklive-v1').then(function(cache) {
					if ( event.request.method != "POST") {
						cache.put(event.request, response.clone())
					}
					return response;
				});
			});
		})
	)
});

this.addEventListener('fetch', function(event) {
	event.respondWith(
		fetch(event.request).catch(fallback)
	);
	function fallback() {
		if ( isGetHtmlRequest(event.request) ) {
			return caches.match('/fallback.html');
		}
	};
});
function isGetHtmlRequest(request) {
	return (
		request.method === 'GET' && 
		request.headers.get('Accept').contains('text/html')
	);
};

// clear older cache in SW
this.addEventListener('activate', function(event) {

  var cacheWhitelist = ['looklive-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

