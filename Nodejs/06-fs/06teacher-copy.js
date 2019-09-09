const fs = require('fs');

const ws = fs.createWriteStream('./2.jpg');

const rs = fs.createReadStream('./1.jpg');


rs.on('open',()=>{
	console.log('rs open...');
})
rs.on('close',()=>{
	console.log('rs close...');
})
rs.on('data',(chunk)=>{
	console.log(chunk);
})
rs.on('end',()=>{
	console.log('rs end...');
})


rs.pipe(ws);
