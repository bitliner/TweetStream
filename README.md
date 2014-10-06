# tweet_stream

It lets you to create a keyword based Twitter stream.

**Pros** of using  *tweet_stream*:

1. integration with nodejs streams: you can create a twitter stream and pipe it to an other nodejs stream that makes some computations on each tweet (check the example)

2. it enriches each tweet with the specific keyword it was extracted by. In this way you can easily aggregate multiple streams, avoiding to reach the Twitter api limit for stream api

## Installation

`npm install tweet_stream`


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
}).pipe(through2.obj(function(tweet, encoding, done) {
    console.log('t', tweet.text);
    done();
}))
```
