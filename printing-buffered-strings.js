var https = require('https');

var buffer = "";


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

	https.get(requestOptions, function(response){

		response.setEncoding('utf8');

		response.on('data', function (data){
			buffer += data;
			console.log(buffer)
		});

		response.on('error', function (){
			console.log('Response stream complete!')
		});
	});
};

getAndPrintHTML();