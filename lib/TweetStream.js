var _und = require('underscore'),
    Twit = require('twit');

function TwitterStatusesFilterStream(options) {
    var self = this
    _und.defaults(self, options)
    self.twitterApi = new Twit({
        consumer_key: this.consumer_key,
        consumer_secret: this.consumer_secret,
        access_token: this.access_token,
        access_token_secret: this.access_token_secret
    })

    self._callback = function(tweet) {
            tweet.extractedByKeyword = (self.keywords.length == 1) ? keywords : self.keywords.filter(function(k) {
                if(isContainingPhrase(tweet.text, k)) {
                    return k
                }
            });
            self.callback(tweet)
        }
    self._start()
}

TwitterStatusesFilterStream.prototype._start = function() {
    var stream = this.twitterApi.stream('statuses/filter', {
        track: this.keywords
    })
    stream.on('tweet', this._callback)
}


module.exports = TwitterStatusesFilterStream



/***
 * Given a text, and a phrase composed by terms separated by spaces, it returns true if text contains all the terms in phrase
 */
function isContainingPhrase(text, phrase) {
    var phraseAsArray = phrase.split(/ +/g),
        match = true
        phraseAsArray.forEach(function(term) {
            match = match && text.toLowerCase().match(term) != null
        })
        return match
}