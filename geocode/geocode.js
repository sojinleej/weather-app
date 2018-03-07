const request = require('request');

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);
// console.log(argv); // debug
// check the connectivity and handle the errors
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to Google servers.');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address.');
		} else if (body.status ===  'OK') {
		// format objects
			callback(undefined, {
			address: body.results[0].formatted_address,
			latitude: body.results[0].geometry.location.lat,
			longitude: body.results[0].geometry.location.lng});	// end of the callback	
		} // end of the else if statement
	}); // end of the request function
}; // end of the geocodeAddress function

module.exports.geocodeAddress = geocodeAddress;

/*
console.log vs callback
else if (body.status === 'OK') {	console.log(`Address:${body.results[0].formatted_addres}`);	
}
vs
else if (body.status === 'OK') {
	callback(undefined, {
		address: body.results[0].formatted_address;
	});
}
*/