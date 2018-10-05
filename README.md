# node-palitanx-api
Nodejs wrapper for palitanx.com

[![Build Status](https://travis-ci.org/SloRunner/node-palitanx-api.svg?branch=master)](https://travis-ci.org/SloRunner/node-palitanx-api)[![Greenkeeper badge](https://badges.greenkeeper.io/SloRunner/node-palitanx-api.svg)](https://greenkeeper.io/)

[![NPM](https://nodei.co/npm/palitanx-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/palitanx-api/) 

## API Implementation
```javascript
const Palitanx = require('palitanx-api');
const palitanx = new Palitanx();
```

Methods:

```javascript
getMarkets(callback)
getCurrencies(callback)
getTicker(market, callback) - example getTicker('BTC-CIV', function)
getMarketSummaries(callback)
getMarketSummary(market, callback) - example getMarketSummary('BTC-CIV', function)
getOrderBook(market, type, callback) - example getOrderBook('BTC-CIV', 'both', function...)
getMarketHistory(market, callback) - example getMarketSummary('BTC-CIV', function)
```

Examples:
```javascript
const Palitanx = require('palitanx-api');
const palitanx = new Palitanx();

palitanx.getMarketSummary('BTC-CIV', function(err, data){
    console.log(err, data) //error should be false and you should get the data
})
 
palitanx.getTicker('BTC-CIV', function(err, data){
	if (!err) {
		console.log(data) // normal data
	}else{
		console.log(err, data) //problem with api err=true and data = ""
	};
})
```

Check examples folder for more
