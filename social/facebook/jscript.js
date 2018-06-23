if ('serviceWorker' in navigator && 'PushManager' in window && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {

	var baseURL = location.href.replace(location.search, '');

	navigator.serviceWorker.register(baseURL+'sw.js', { scope: baseURL }).then(function(registration) {
		console.log('SW Registered');
	});

	navigator.serviceWorker.ready.then(function(registration) {
	   	console.log('SW Ready');
	});
}