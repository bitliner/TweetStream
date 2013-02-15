var TwitterStatusesFilterStream=require('../TwitterStream.js')

var keywords=['pdl','pd','fermare il declino','rivoluzione civile','movimento a 5 stelle','casa pound','m5s',
    'popolo della libertà','sel','rivciv','lega'
]
keywords=keywords.concat([
    'berlusconi','bersani','giannino','boldrini','vendola','casini',
    'monti','grillo','ruotolo','meloni','alfano','monti','fini',
    'formigoni','maroni','di pietro','bonino'
])

keywords=keywords.concat([
    'elezioni politiche','elezioni 2013','elezioni2013'
])

var t=new TwitterStatusesFilterStream({
    consumer_key:'2QPkyZrtEj8nrZDLilaFA',
    consumer_secret:'XkSDAPFrdG0Tl1LATGEQ3QDKGWMkAuAO8CasxWXym0',
    access_token:'116567479-WBMmeBWbDZNgecoKpHi7N8WXuZS2GF28lbS0ab80',
    access_token_secret:'OyPl8RBc4szk772V2AtO1FrYIRLXlGs6ILd8cEA',
    keywords: keywords,
    callback: function(tweet){
        console.log('t',tweet)
    }
})