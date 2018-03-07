console.log('Starting app');
// understanding of async programming
setTimeout(() => {
	console.log('Inside the callback');
}, 2000);

setTimeout(() => {
	console.log('Second setTimeout');
}, 0);

console.log('Finishing up');

// BEHIND THE SCENE

