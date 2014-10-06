var TwitterStatusesFilterStream = require('../index.js')
, through2=require('through2');

var keywords = ['ipad mini', 'samsung galaxy']


var t = new TwitterStatusesFilterStream({
    consumer_key: '2QPkyZrtEj8nrZDLilaFA',
    consumer_secret: 'XkSDAPFrdG0Tl1LATGEQ3QDKGWMkAuAO8CasxWXym0',
    access_token: '116567479-WBMmeBWbDZNgecoKpHi7N8WXuZS2GF28lbS0ab80',
    access_token_secret: 'OyPl8RBc4szk772V2AtO1FrYIRLXlGs6ILd8cEA',
    keywords: keywords,
    callback: function(tweet) {
        console.log('t', tweet.text, tweet.extractedByKeyword)
    }
}).pipe(through2.obj(function(chunk, encoding, done) {
    console.log('t', chunk.text,chunk.extractedByKeyword);
    done();
}))