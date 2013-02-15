# TweetStream

It lets you to create a keyword based Twitter stream.

## Usage
```
var TwStream=require('tweet_stream')

var t=new TwStream({
    consumer_key:'xxx',
    consumer_secret:'yyy',
    access_token:'zzz',
    access_token_secret:'lll',
    keywords: ['obama','election'],
    callback: function(tweet){
        console.log('tweet',tweet)
    }
})
```
