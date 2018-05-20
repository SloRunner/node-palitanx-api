'use strict'
const request = require('request')
var browser = request.defaults({
  headers: {'User-Agent': 'The Botfather NodeJS module'}
})

module.exports = class Palitanx {
    constructor() {
    	this.apiurl = 'https://api.palitanx.com/v1/';
    }

    getMarkets(callback) {
    	browser(this.apiurl + 'public/getmarkets', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
    	})
    }

    getCurrencies(callback) {
    	browser(this.apiurl + 'public/getcurrencies', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
    	})
    }

    getTicker(market, callback) {
    	browser(this.apiurl + 'public/getticker/' + market, { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
    	})
    }

    getMarketSummaries(callback) {
    	browser(this.apiurl + 'public/getmarketsummaries', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
    	})
    }

    getMarketSummary(market, callback) {
    	browser(this.apiurl + 'public/getmarketsummary/' + market, { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
    	})
    }
}