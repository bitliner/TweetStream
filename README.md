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
## Notes

This module adds to any tweet the specific keyword the tweet is been extracted by.
For example, if the specified 'keywords' option is `['twitter api','twitter streaming']`, and the stream receives the tweet "Twitter has a streaming API", the module assign to the corresponding tweet the field 'extractedByKeyword' with 'twitter streaming' as value.

In this way, more streams can be aggregated to a unique stream, avoiding to reach the Twitter api limit for stream api. 

