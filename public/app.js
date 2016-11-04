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
			console.log(response);
			// Colonne de droite
			$('.card').append('<h4>' + response.randomCard.name + '</h4>');
			$('.card').append('<h4>' + response.randomCard.company.bs + '</h4>');
			$('.card').append('<h4> Contact info </h4>');
			$('.card').append('<h4>' + response.randomCard.address.streetB + '</h4>');
			$('.card').append('<h4>' + response.randomCard.address.zipcode + " " + response.randomCard.address.city + '</h4>');
			
			// Colonne de gauche
			for (var prop in response) {
				$('.' + prop).html(response[prop]);
				if (prop === 'businessImg' || prop === 'cardImg') {
					$('.' + prop).html('<img src="' + response[prop] + '">');
				};
			}

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