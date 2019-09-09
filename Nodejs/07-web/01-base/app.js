const http = require('http');
const server = http.createServer((req,res)=>{
	//req == request 是可读流
	//res == response 是可写流
	res.write('hello');
	res.end('good');
})
console.log(server)
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})