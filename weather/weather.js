const request = require('request');

var getWeather = (lat, lng, callback) => {
	request ({
		url: `https://api.darksky.net/forecast/0174f31c64b2ee796239a6cac4d9f35a/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
	// !error && response.statusCode === 200
	// else 
		if (error) {
			callback('Unable to connect to Forecast.io the server');
		} else if (response.statusCode === 400){
			callback('Unable to fetch weather');
		} else if (response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			}); // callback
		} // else if 
	}); // request
}; // getWeather

module.exports.getWeather = getWeather;
