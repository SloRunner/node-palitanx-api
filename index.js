'use strict'
const request = require('request')
const crypto = require('crypto')

var browser = request.defaults({
  headers: {'User-Agent': 'The Botfather NodeJS module (https://www.npmjs.com/package/palitanx-api)'}
})

module.exports = class Palitanx {
    constructor(apikey, secret) {
        this.apikey = apikey || '';
        this.secret = secret || '';
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

    getOrderBook(market, type, callback) {
        browser(this.apiurl + 'public/getorderbook/' + market + '/' + type, { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    getMarketHistory(market, callback) {
        browser(this.apiurl + 'public/getmarkethistory/' + market, { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    getBalances(callback) {
        var gen_url = this.apiurl + 'account/getbalances/' + this.apikey + '/' + new Date().getTime()
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    getBalance(coin, callback) {
        var gen_url = this.apiurl + 'account/getbalance/' + this.apikey + '/' + new Date().getTime() + '/' + coin
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    getOpenOrders(market, callback) {
        var gen_url = this.apiurl + 'market/getopenorders/' + this.apikey + '/' + new Date().getTime() + '/' + market
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    getOrder(orderID, callback) {
        var gen_url = this.apiurl + 'market/getorder/' + this.apikey + '/' + new Date().getTime() + '/' + orderID
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    cancelOrder(orderid, callback) {
        var gen_url = this.apiurl + 'market/cancel/' + this.apikey + '/' + new Date().getTime() + '/' + orderid
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    getOrderHistory(market, callback) {
        if (!market) {
            var gen_url = this.apiurl + 'market/getorderhistory/' + this.apikey + '/' + new Date().getTime()
        }else{
            var gen_url = this.apiurl + 'market/getorderhistory/' + this.apikey + '/' + new Date().getTime() + '/' + market
        };
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    getWithdrawalHistory(coin, callback) {
        if (!coin) {
            var gen_url = this.apiurl + 'market/getwithdrawalhistory/' + this.apikey + '/' + new Date().getTime()
        }else{
            var gen_url = this.apiurl + 'market/getwithdrawalhistory/' + this.apikey + '/' + new Date().getTime() + '/' + coin
        };
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    getDepositHistory(coin, callback) {
        if (!coin) {
            var gen_url = this.apiurl + 'market/getdeposithistory/' + this.apikey + '/' + new Date().getTime()
        }else{
            var gen_url = this.apiurl + 'market/getdeposithistory/' + this.apikey + '/' + new Date().getTime() + '/' + coin
        };
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }

    sellLimit(market, quantity, rate, callback) {
        var gen_url = this.apiurl + 'market/selllimit/' + this.apikey + '/' + new Date().getTime() + '/' + market + '/' + quantity + '/' + rate
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }
    buyLimit(market, quantity, rate, callback) {
        var gen_url = this.apiurl + 'market/buylimit/' + this.apikey + '/' + new Date().getTime() + '/' + market + '/' + quantity + '/' + rate
        var hash = crypto.createHmac('sha512', this.secret)
        hash.update(gen_url)
        var sign = hash.digest('hex')
        var options = {
            url: gen_url,
            headers: {'apisign': sign},
            json: true
        }
        browser(options, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
        })
    }
}
