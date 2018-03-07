// create a callback function
// same with setTimeout(() => {console.log('')},id);
var getUser = (id, callback)  => {
	var user = {
		id: id,
		name: 'Vikram'
	};
	
	setTimeout(() => {
		callback(user);
	}, 3000);
	// callback(user);
};
getUser(32, (userObject) => {
	console.log(userObject);
});
//////////////////callback










