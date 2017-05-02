let fs = require('fs')  

let directory = process.argv[2]; 
let extension = process.argv[3]; 

fs.readdir(directory, function(err, files) {

	files.forEach(file => {
    	
		if (file.endsWith('.' + extension)) {
			console.log(file);
		}
    	
  	});

});