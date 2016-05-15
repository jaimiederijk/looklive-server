// Change product section on detail page
(function() {	
	'use strict';

	var mainInner = document.querySelector('main');
	
	var app = {
		init: function() {

			router.watch();
			app.serviceWorker();
		},
		serviceWorker : function () {
			if ('serviceWorker' in navigator) {

                // Register the ServiceWorker
                navigator.serviceWorker.register('sw.js', { scope: './' })
                    .then(reg => console.info("registered SW", reg))
                    .catch(err => console.error("Error registering SW", err));

                // Unregister the ServiceWorker
                // navigator.serviceWorker.getRegistration('./')
                //     .then(reg => {

                //         reg.unregister();
                //         console.log("unregister SW");

                //     });

            } else {
              console.log('not supported');
            }
		}
		    
	};

	var router = {
		watch: function() {

			routie({
				'': function() {

					window.location.hash = '#feed';
					window.location.pathname = '';
			    },
			    'feed': function() {
			    	feed.getData();
			    },
			    'appearance/:id': function(id) {
			    	appearencePage.getData(id);
			    }
			});
		}
	};

	var api = {
		call: function(url) {

			return new Promise(function(resolve, reject) {

				var request = new XMLHttpRequest();

				request.onloadend = function(response) {

					var data = request.response;
					resolve(data);					
				}

				request.onerror = reject;

				request.open('GET', url, true);
				request.send();

			});

		}
	};


	var template = {
		render: function(data) {
			mainInner.innerHTML = data;
		}
	}


	var feed = {
		getData: function() {

			var url = '/api/feed';
			api.call(url)
				.then(function(response) {

				var data = response;
				template.render(data);
				// detailPage.getAllLinks();
			})
			.catch(function() {
				var error = {
					title: "Sorry, Cannot connect"
				};
				template.render(error);

			});

		}
	}


	var appearencePage = {
		getData: function(id) {			
			var _id = id;
			// var url = '/api/product/' + _id; 
			var url = '/api/appearance/' + _id;

			api.call(url)
				.then(function(response) {

					var data = response;
					template.render(data);
					appearencePage.show();
				})
				.catch(function() {

					var error = {
						title: "Sorry, Cannot connect"
					};
					template.render(error);
				});
		},
		show: function() {

			var product = document.querySelectorAll('.product');

			if ( product.length ) {
				product[0].classList.add('product-active');

				var productIndicator = document.querySelectorAll('.product-indicator');
				var uuid = product[0].attributes[1].nodeValue;
				productIndicator[0].setAttribute('data-uuid', uuid);
				productIndicator[0].classList.add('product-indicator-active');

				Array.prototype.forEach.call(productIndicator, function(productIndicator) {

					productIndicator.addEventListener('click', showRelatedContent, false);

					function showRelatedContent() {

						var id = this.attributes[2].nodeValue;
						
						var activeEl = document.querySelector('.product-indicator-active');
						activeEl.classList.remove('product-indicator-active');

						var activeProduct = document.querySelector('.product-active');
						activeProduct.classList.remove('product-active');

						this.classList.add('product-indicator-active');


						var p = document.querySelector(".product[data-uuid='" + id + "']");
						p.classList.add('product-active');


					}

				});	
			}

		}
	}


	app.init();

})();