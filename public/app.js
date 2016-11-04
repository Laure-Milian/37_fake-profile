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
			$('.companyName').html(response.companyName);
			$('.catchPhrase').html(response.cathPhrase);
			$('.productAdjective').html(response.productAdjective);
			$('.productName').html(response.productName);
			$('.productMaterial').html(response.productMaterial);
			$('.color').html(response.color);
			$('.price').html(response.price);
			$('.url').html(response.url);
			$('.businessImg').html('<img src="' + response.businessImg + '">');
			$('.cardImg').html('<img src="' + response.cardImg +'">');
			// Colonne de droite
			$('.card').append('<h4>' + response.randomCard.name + '</h4>');
			$('.card').append('<h4>' + response.randomCard.company.bs + '</h4>');
			$('.card').append('<h4> Contact info </h4>');
			$('.card').append('<h4>' + response.randomCard.address.streetB + '</h4>');
			$('.card').append('<h4>' + response.randomCard.address.zipcode + " " + response.randomCard.address.city + '</h4>');
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