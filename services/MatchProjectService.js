const AWS = require('aws-sdk');
const http = require('http');

module.exports = function(req, res, json) {
    var payload = JSON.stringify({ 
        "metrics": json,
        "name": req.body.name 
    });
    var req = new AWS.HttpRequest('https://matchproject.herokuapp.com');
    req.method = 'POST';
    req.path = '/api/applicant';
    req.body = payload;
    req.headers['Content-Type'] = 'application/json'; 
    req.headers['Accept'] = 'application/json';

    var send = new AWS.NodeHttpClient();

    send.handleRequest(req, null, function(response) {
        response.on('data', function (data) {
            console.log('chegou!');
        });
        response.on('end', function (obj) {
            console.log('terminou!');
            res.send({
                status: 'ok'
            })
        });
    }, function(error) {
        console.log('Error ' + error);
    });
}

