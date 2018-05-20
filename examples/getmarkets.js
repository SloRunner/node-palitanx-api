const Palitanx = require('../index.js'); // use palitanx-api in production
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