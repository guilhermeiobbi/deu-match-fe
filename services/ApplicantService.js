const http = require('http');

module.exports = function(req, res, next) {
	var options = {
		host: 'matchproject.herokuapp.com',
		port: 80,
		path: '/api/applicant/ranking'
  	};

	http.get(options, function(_res) {
		var data = '';
		_res.on('data', function(chunk) {
			data += chunk;
		});
		_res.on('end', function() {
			console.log('####### data: ', data);
			res.locals.applicants = JSON.parse(data);
			res.render('applicants.pug');
		});
	})
	.on('error', function(err) {
		console.log('ERROR: ' + err.message);
	});
}