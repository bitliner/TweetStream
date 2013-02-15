var _und = require('underscore'),
    Twit = require('twit')

function TwitterStatusesFilterStream(options) {
    _und.defaults(this, options)
    this.twitterApi = new Twit({
        consumer_key:this.consumer_key,
        consumer_secret:this.consumer_secret,
        access_token:this.access_token,
        access_token_secret:this.access_token_secret
    })
    this._start()
}

TwitterStatusesFilterStream.prototype._start = function () {
    var stream=this.twitterApi.stream('statuses/filter',{
        track: this.keywords
    })
    stream.on('tweet',this.callback)
}

module.exports=TwitterStatusesFilterStream

