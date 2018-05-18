'use strict'
const request = require('request')
var browser = request.defaults({
  headers: {'User-Agent': 'The Botfather NodeJS module'}
})

module.exports = class Palitanx {
    constructor() {
    	this.apiurl = 'https://api.palitanx.com/v1/';
    }

    getMarkets() {
    	browser(this.apiurl + 'public/getmarkets', { json: true }, function(err, res, body) {
    		if (err) { 
    			return err;
    		}
    		return body;
    	})
    }

    getCurrencies() {
    	browser(this.apiurl + 'public/getcurrencies', { json: true }, function(err, res, body) {
    		if (err) { 
    			return err;
    		}
    		return body;
    	})
    }

    getTicker(market) {
    	browser(this.apiurl + 'public/getticker/' + market, { json: true }, function(err, res, body) {
    		if (err) { 
    			return err;
    		}
    		return body;
    	})
    }

    getMarketSummaries() {
    	browser(this.apiurl + 'public/getcurrencies', { json: true }, function(err, res, body) {
    		if (err) { 
    			return err;
    		}
    		return console.log(body);
    	})
    }

    getMarketSummary(market) {
    	browser(this.apiurl + 'public/getmarketsummary/' + market, { json: true }, function(err, res, body) {
    		if (err) { 
    			return err;
    		}
    		return console.log(body);
    	})
    }
}