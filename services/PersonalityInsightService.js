const MatchProjectService = require('./MatchProjectService');

const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const personalityInsights = new PersonalityInsightsV3({
  username: '98ea0b0f-6c64-4ea7-abb5-9adcfaa8e2c8',
  password: 'sAc6MzJftthX',
  version_date: '2017-10-13'
});

module.exports = function(req, res, translatedText) {
    console.log('PersonalityInsightService - translatedText: ' + translatedText);
    
    var contentItems = [{
        content: translatedText,
        contenttype: 'text/plain',
        created: 1447639154000,
        id: '666073008692314113',
        language: 'en'
     }];

    var params = {
      content_items: contentItems,
      consumption_preferences: true,
      raw_scores: true,
      headers: {
        'accept-language': 'pt-br',
        'accept': 'application/json'
      }
    };
    
    personalityInsights.profile(params, function(error, json) {
        if (error) {
            console.log('PersonalityInsightService#profile - ERROR: ', error);
        } else {
            console.log('PersonalityInsightService#profile - JSON: ' + JSON.stringify(json));
            MatchProjectService(req, res, json);
        }
    });

}