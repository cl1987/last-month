const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const mime = require('./mime.json')
<<<<<<< HEAD
const { get,add } = require('./Model/item.js')
=======
const { get,add,del } = require('./Model/item.js')
>>>>>>> 677407ee90955cfbfc981d1d326999c0201d940b
const swig = require('swig')
const querystring = require('querystring')


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
			const template = swig.compileFile(filePath)
			const html = template({
				data:data
			})
			res.setHeader('Content-Type','text/html;charset=UTF-8')
			res.end(html)
		})
		.catch(err=>{
			res.setHeader('Content-Type','text/html;charset=UTF-8')
			res.statusCode=404;
			res.end('<h1>请求出错了</h1>')
		})
	}
	//添加路由
	else if(pathname == '/add'){
<<<<<<< HEAD
		//1.获取参数
		let body=""
		req.on('data',(chunk)=>{
			body+=chunk
		})
		req.on('end',()=>{
			const query=querystring.parse(body)
			res.end(JSON.stringify({
				code:0
			}))
		})
		
=======
		let body="";
		//1.获取参数
		req.on('data',(chunk)=>{
			body += chunk;
		})
		req.on('end',()=>{
			const query = querystring.parse(body)
			//2.根据参数生成任务对象并且写入到文件中h
			add(query.task)
			.then(data=>{
				 //3.如果写入成功,将新生成的任务对象返回到前端
				 console.log(11111111111111111111111)
				 res.end(JSON.stringify({
				 	code:0,
				 	message:'添加成功',
				 	data:data
				 })) 
			})
			.catch(err=>{
				res.end(JSON.stringify({
					code:1,
				 	message:'添加失敗'
				}))
			})
		})
	}
	else if(pathname == '/del'){
		//1.获取参数
		const id = parsedUrl.query.id
		//2.根据参数删除任务对象并且更改文件
		del(id)
		.then(()=>{
			//3.返回结果	
			res.end(JSON.stringify({
				code:0,
				message:'删除成功'
			}))

		})
		.catch(err=>{
			res.end(JSON.stringify({
				code:1,
				message:'删除失败'
			}))
		})
>>>>>>> 677407ee90955cfbfc981d1d326999c0201d940b
	}
	/*
	 else if(pathname == "/del"){//get
        //1.获取参数
        const id = parsedUrl.query.id
        //2.根据参数删除任务对象并且更改文件
        del(id)
        .then(()=>{
            //3.返回结果
            res.end(JSON.stringify({
                code:0,
                message:'删除成功'
            }))            
        })
        .catch(err=>{
            res.end(JSON.stringify({
                code:1,
                message:'删除失败'
            }))                 
        })

    }
    */
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