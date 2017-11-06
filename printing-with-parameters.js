var https = require('https');

var buffer = "";


function getAndPrintHTML (options) {

	https.get(options, function(response){

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

  var requestOptions = {
    host: process.argv.slice(2)[0],
    path: process.argv.slice(2)[1]
    // host: 'sytantris.github.io',
    // path: '/http-examples/step2.html'
  };

getAndPrintHTML(requestOptions)
