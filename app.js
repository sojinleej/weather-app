/*
Name 		: Weather app
Author		: Sojin Lee
Created Date: Mar 3, 2018
Updated Date: Mar 
Description : This is the nodejs weather app that gets the google maps information and find the latitude and the lognitude based on the given address
*/

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch the weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		// error > callback is not defined
		console.log(results.address);
		// lat, lng, callback why do we need callback to call this function??
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				// ??
				console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
			} // else statement
		});// getWeather
	} // else 
}); // geocodeAddress






