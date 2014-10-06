var _und = require('underscore'),
    Twit = require('twit'),
    stream = require('stream-wrapper');

function TwitterStatusesFilterStream(options) {
    var self = this
    _und.defaults(self, options)
    self.twitterApi = new Twit({
        consumer_key: this.consumer_key,
        consumer_secret: this.consumer_secret,
        access_token: this.access_token,
        access_token_secret: this.access_token_secret
    });

    self.nodejsStream = stream.readable({objectMode:true});

    self._callback = function(tweet) {
        tweet.extractedByKeyword = (self.keywords.length == 1) ? keywords : self.keywords.filter(function(k) {
            if (isContainingPhrase(tweet.text, k)) {
                return k
            }
        });
        // self.callback(tweet)
        return tweet;
    }
    self._start();
    return self.nodejsStream;
    // here i should create a writable stream, and return it!!! 
    // so the caller can pipe it

}

TwitterStatusesFilterStream.prototype._start = function() {
    var self=this;
    var stream = this.twitterApi.stream('statuses/filter', {
        track: this.keywords
    })
    stream.on('tweet', function(tweet) {
        console.log('ola')
        tweet = self._callback(tweet);
        self.nodejsStream.push(tweet);
    });
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