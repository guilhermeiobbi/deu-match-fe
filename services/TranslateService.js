const Translate = require('@google-cloud/translate');
const translate = Translate({
	projectId: 'deu-match'
});

const PersonalityInsightService = require('./PersonalityInsightService');

module.exports = function(req, res) {
	console.log('TranslateService - req.body: ' + JSON.stringify(req.body));
	const text = req.body.q1 + req.body.q2 + req.body.q3 + req.body.q4 + req.body.q5;
	const target = 'en';
	translate.translate(text, target)
	.then((results) => {
		let translations = results[0];
		translations = Array.isArray(translations) ? translations : [translations];
  
		let translatedText = '';
		translations.forEach((translation, i) => {
			translatedText += translation;
		});
		PersonalityInsightService(req, res, translatedText);
	})
	.catch((err) => {
	  	console.error('TranslateService - ERROR:', err);
	});
}