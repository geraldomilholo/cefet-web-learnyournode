let program6Module = require('./program6-module'); 

let directoryName = process.argv[2]; 
let extension = process.argv[3];
let callback = function callback(err, files) {

	files.forEach(file => {  	
		console.log(file);
  	});
};

program6Module(directoryName, extension, callback);