// init
var CacheName = "looklive-v1";

// Install
this.addEventListener('install', function(event) {

	// Cache
	event.waitUntil(
		caches.open('looklive-v1')
		.then(function(cache) {
			return cache.addAll([
			    './',
		        '/styles/style.css',
		        '/js/app.js',
		        '/images/logo.png',
		        'images/header.png'
			]);
		})
	);

});

//Fetch
this.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then( function(response) {
			return response || fetch(event.request)
			
		})
	)
});



