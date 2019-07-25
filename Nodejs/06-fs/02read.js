const fs = require('fs')
const util = require('util');
//1. 同步


//1.1逐步操作
/*
//1.1.1打开文件
const fd = fs.openSync('./01.txt','r')
//1.1.2读文件
const buf = Buffer.alloc(100);
fs.readSync(fd,buf,0,50,0)
console.log(buf.toString())
//1.1.3关闭文件
fs.closeSync(fd);
*/


//1.2合并操作
/*
const data = fs.readFileSync('./01.txt',{flag:'r'});
console.log(data)
*/


//fd 文件描述符。。。。。。。。。。。。。。。。。。。。。。。。
//2.异步
/*
const fd = fs.open('./01.txt','r',(err,fd)=>{
	if(err){
		console.log('open error:::',err)
	}else{//2.1.2读文件
		const buf = Buffer.alloc(100);
		fs.read(fd,buf,0,50,0,(err)=>{
			if(err){
				console.log('read error:::',err)
			}else{
				console.log('read success:::')
				console.log(buf.toString())
			}
			//.1.3关闭文件
			fs.close(fd,(err)=>{
				if(err){
					console.log('close error:::',err)
				}else{
					console.log('close success:::')
				}
			})
		})
	}
})	
*/

//2.2合并操作
/*
fs.readFile('./01.txt',{flag:'r'},(err,data)=>{
	if(err){
		console.log('write error:::',err)
	}else{
		console.log(data.toString())
	}
})
*/
//3.promise异步处理
const readFile = util.promisify(fs.readFile);

readFile('./01.txt',{flag:'r'})
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})
