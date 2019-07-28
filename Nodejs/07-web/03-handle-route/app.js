const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const mime = require('./mime.json')
const { get } = require('./Model/item.js')


const server = http.createServer((req,res)=>{
	//req == request 是可读流
	//res == response 是可写流
	// res.write('hello');
	// res.end('good');
	//路由：：根据不同的请求做不同的处理

	const parsedUrl = url.parse(req.url,true)
	// console.log(parsedUrl)
	// console.log(req.method+":::::::"+req.url)
	const pathname = parsedUrl.pathname; 
	//路由处理
	//首页路由
	if(pathname == '/' || pathname == '/index.html'){
		//1. 获取数据
		get()
		.then(data=>{
			//将数据分配到页面并返回页面
			console.log(data)
			// 引入模板
			const filePath = path.normalize(__dirname + '/static/index.html' )
			fs.readFile(filePath,(err,data)=>{
				if(err){
					res.setHeader('Content-Type','text/html;charset=UTF-8')
					res.statusCode=404;
					res.end('<h1>请求出错了</h1>')	
				}else{
					res.setHeader('Content-Type','text/html;charset=UTF-8')
					res.end(data)
				}
			})
		})
	}
	//添加路由
	else if(pathname == '/add'){
		console.log("add.....")
		res.end(JSON.stringify({
			code:0
		}))
	}
	//静态资源处理
	else{
		const filePath = path.normalize(__dirname + '/static/' + req.url)
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset=UTF-8')
				res.statusCode=404;
				res.end('<h1>请求出错了</h1>')	
			}else{
				//1.根据拓展名设置mime类型
				const extname = path.extname(filePath)
				const mimeType = mime[extname] || 'text/plain'
				res.setHeader('Content-Type',mimeType+';charset=UTF-8')
				res.end(data)
			}
		})
	}
/*
	const filePath = path.normalize(__dirname + '/static/' + req.url)
	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.setHeader('Content-Type','text/html;charset=UTF-8')
			res.statusCode=404;
			res.end('<h1>请求出错了</h1>')	
		}else{
			//1.根据拓展名设置mime类型
			const extname = path.extname(filePath)
			const mimeType = mime[extname] || 'text/plain'
			res.setHeader('Content-Type',mimeType+';charset=UTF-8')
			res.end(data)
		}
	})
*/
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})