const fs = require('fs')

const rs = fs.createReadStream('04rs.txt');
rs.on('open',()=>{
	console.log('rs open....')
})
rs.on('end',()=>{
	console.log('rs end....')
})
rs.on('data',(chunk)=>{
	console.log(chunk)
})
rs.on('close',()=>{
	console.log('rs close....')
})

