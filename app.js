
/**
 * Lib imports
 */
var http       = require('http');
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');


/**
 * JSON support definitions
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/**
 * Routes
 */
app.use('/', require('./routes/index'));
app.use('/applicants', require('./routes/applicants'));
app.use('/send', require('./routes/send'));

/**
 * Pug 
 */
app.set('view engine', 'pug');

/**
 * Including static folders and files
 */
app.use('/static', express.static(__dirname + '/public'));

process.env.GOOGLE_APPLICATION_CREDENTIALS = './deu-match-fffebb156702.json';
/**
 * Server init
 */
app.set('port', (process.env.PORT || 5000));
// const PORT = 3000;

app.listen(app.get('port'), function () {
  console.log('Server listening on PORT ', app.get('port'));
});
