const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json')



//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
	console.log('url',req.url);
	//静态资源的处理
	const filePath = path.normalize(__dirname+"/static/"+req.url)
	//读取文件
	fs.readFile(filePath,(err,data)=>{
		//2.返回数据
		if(err){
			res.setHeader('Content-Type','text/html;charset=utf-8')
			res.statusCode = 404;
			res.end("<h1>出错了</h1>")
		}else{
			//1.根据扩展名设置mime类型
            //.css text/css
            //.html text/html
            const extname = path.extname(filePath)
            const mimeType = mime[extname] || 'text/plain'
			res.setHeader('Content-Type',mimeType+";charset=utf-8")
			res.end(data)
		}
	})
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})