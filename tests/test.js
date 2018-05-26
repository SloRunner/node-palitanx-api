const expect = require('chai').expect
const Palitanx = require('../index.js'); // use palitanx-api in production
const palitanx = new Palitanx();

describe('getMarkets() test', function () {
  it('it should download market data as object without error', function () {
  	palitanx.getMarkets(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  	})
  });
});

describe('getCurrencies() test', function () {
  it('it should download currencies as object without error', function () {
  	palitanx.getCurrencies(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  	})
  });
});

describe('getTicker() test', function () {
  it('it should download ticker as object without error', function () {
  	palitanx.getTicker('BTC-CIV', function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  	})
  });
});

describe('getMarketSummaries() test', function () {
  it('it should download market summaries as object without error', function () {
  	palitanx.getMarketSummaries(function(err, data){
  		expect(err).to.be.a('boolean');
  		expect(err).to.be.equal(false);
  		expect(data).to.be.a('object');
  	})
  });
});

describe('getMarketSummary() test', function () {
  it('it should download market summary as object without error', function () {
    palitanx.getMarketSummary('BTC-CIV', function(err, data){
      expect(err).to.be.a('boolean');
      expect(err).to.be.equal(false);
      expect(data).to.be.a('object');
    })
  });
});

describe('getOrderBook() test', function () {
  it('it should download Order Book as object without error', function () {
    palitanx.getOrderBook('BTC-CIV', 'both', function(err, data){
      expect(err).to.be.a('boolean');
      expect(err).to.be.equal(false);
      expect(data).to.be.a('object');
    })
  });
});

describe('getMarketHistory() test', function () {
  it('it should download market history as object without error', function () {
    palitanx.getMarketHistory('BTC-CIV', function(err, data){
      expect(err).to.be.a('boolean');
      expect(err).to.be.equal(false);
      expect(data).to.be.a('object');
    })
  });
});