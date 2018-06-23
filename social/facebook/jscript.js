if ('serviceWorker' in navigator && 'PushManager' in window && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {

	navigator.serviceWorker.register(window.location.href+'sw.js', { scope: window.location.href }).then(function(registration) {
		console.log('SW Registered');
	});

	navigator.serviceWorker.ready.then(function(registration) {
	   	console.log('SW Ready');
	});
}