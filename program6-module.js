let fs = require('fs');  
let path = require('path');

let exportedFunction = function (directoryName, extension, callback) {
	fs.readdir(directoryName, function(err, files) {

		 if (err) {
		 	return callback(err);
        } else {

        	var filteredFiles = [];

			files.forEach(file => {
	    		if ("." + extension == path.extname(file)) {	
					filteredFiles.push(file);
				}
	  		});

			callback(err, filteredFiles);
        }

	});
};

module.exports = exportedFunction;