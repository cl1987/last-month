const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const query = require('querystring')

const swig = require('swig');
const { get } = require('./Mode/item.js')

const mime = require('./mime.json')



//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{//req是可读流，res是可写流
	//路由：根据不同的请求做不同的处理
	console.log(req.method+"::::"+req.url)

	const parseUrl = url.parse(req.url,true)

	const pathname = parseUrl.pathname

	//路由处理
	// console.log('url',req.url);
	if(pathname == "/" || pathname == "/index.html"){
		//1.获取数据
		get()
		.then(data=>{
			//将数据分配到页面并返回页面
			const filePath = path.normalize(__dirname+"/static/index.html")
			//引入模板
			const template = swig.compileFile(filePath)
			const html = template({
				data:data
			})
			res.setHeader('Content-Type','text/html;charset=utf-8')
			res.end(html)
		})
		.catch(err=>{
			res.setHeader('Content-Type','text/html;charset=utf-8')
			res.statusCode = 404;
			res.end("<h1>出错了</h1>")
		})
	}
	//添加路由
	else if(pathname == "/add"){
		//1.获取参数
		let body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			const query = querystring.parse(body)
			//2.根据参数生成任务对象并且写入到文件中
			add(query.task)
			.then(data=>{
				//3.如果写入成功，则将新生成的任务对象返回到前端
				res.end(JSON.stringify({
					code:0,
					message:'添加成功',
					data:data
				}))
			})
			.catch(err=>{
				console.log("add task err:::",err)
				res.end(JSON.stringify({
					code:1,
					message:"添加失败"
				}))
			})
		})
		res.end(JSON.stringify({
			code:0
		}))
	}
	//静态资源的处理
	else{
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
	}
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})