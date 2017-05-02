let fs = require('fs')  

let path = process.argv[2]; 
let stringFile = fs.readFileSync(path).toString();

let fileSplit = stringFile.split('\n');
console.log(fileSplit.length - 1);

