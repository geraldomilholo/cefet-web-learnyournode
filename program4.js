let fs = require('fs')  

let path = process.argv[2]; 
let file = fs.readFile(path, function(err, data) {

	let dataSplit = data.toString().split('\n');
	console.log(dataSplit.length - 1);

});