module.exports = function getHTML (options, callback) {

	var https = require('https');

	var buffer = "";
	
	https.get(options, function(response){

		response.setEncoding('utf8');

		response.on('data', function (data){
			buffer += data;
			callback(buffer)
		});

		response.on('end', function (){
			console.log('Response stream complete!')
		});
	});
};

function printHTML (html) {
 	console.log(html);
};

  var requestOptions = {
    // host: process.argv.slice(2)[0],
    // path: process.argv.slice(2)[1]
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

// getHTML(requestOptions, printHTML);
