const fs = require('fs')

const ws = fs.createWriteStream('03ws.txt');
ws.on('open',()=>{
	console.log('write stream open....')
})
ws.write('abc')
ws.write('ni hao liu cheng')
ws.end();
ws.on('finish',()=>{
	console.log('write stream finish....')
})
ws.on('close',()=>{
	console.log('write stream close....')
})
