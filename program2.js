let sum = 0;

let argv = process.argv;
for (let i = 2; i < argv.length; i++) {
	sum = sum + Number(argv[i]);
} 

console.log(sum);