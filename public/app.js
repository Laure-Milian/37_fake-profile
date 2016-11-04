(function() {

	var app = {

		endpoint: 'http://localhost:2000',

		init: function() {
			this.sendRequest();
		},

		sendRequest: function() {
			$.get(this.endpoint + '/getData')
			.done(this.requestDone)
			.fail(this.requestFail)
			.always(this.requestAlways)
		},

		requestDone: function(response) {

			// Header
			var headerTemplate = $('#headerTemplate').html();
			var htmlHeader = Mustache.to_html(headerTemplate, response);
			$('#header').html(htmlHeader);

			// Product Card
			var productCardTemplate = $('#productCardTemplate').html();
			var htmlProductCard = Mustache.to_html(productCardTemplate, response);
			$('#productCard').html(htmlProductCard);

			// Person Card
			var personCardTemplate = $('#personCardTemplate').html();
			var htmlPersonCard = Mustache.to_html(personCardTemplate, response);
			$('#personCard').html(htmlPersonCard);		
		},

		requestFail: function() {
			console.log('fail');
		},

		requestAlways: function() {
			console.log('complete');
		}

	}


	app.init();



})();