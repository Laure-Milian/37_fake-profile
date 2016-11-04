var express = require('express')
var faker = require('faker');

var app = express();

app.use(express.static('public'));

app.get('/getData', function(req, res) {
	var randomData = {
		companyName: faker.company.companyName(),
		cathPhrase: faker.company.catchPhrase(),
		productAdjective: faker.commerce.productAdjective(),
		productName: faker.commerce.product(),
		productMaterial: faker.commerce.productMaterial(),
		url: faker.internet.url(),
		color: faker.commerce.color(),
		price: faker.commerce.price(),
		businessImg: faker.image.business(350, 150, true),
		cardImg: faker.image.avatar(),
		randomCard : faker.helpers.createCard()
	}
	res.send(randomData);
});

app.listen(2000);