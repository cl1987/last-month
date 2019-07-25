const fs = require('fs')
const util = require('util');
//1. 同步


//1.1逐步操作
/*
//1.1.1打开文件
const fd = fs.openSync('./01.txt','w')
//1.1.2写入文件
fs.writeSync(fd,"hello")
//1.1.3关闭文件
fs.closeSync(fd);
*/

//1.2合并操作
// fs.writeFileSync('./01.txt',"hello world",{flag:'a'})


//fd 文件描述符。。。。。。。。。。。。。。。。。。。。。。。。
//2.异步

//2.1逐步操作
//2.1.1打开文件
/*
const fd = fs.open('./01.txt','w',(err,fd)=>{
	if(err){
		console.log('open error:::',err)
	}else{//2.1.2写入文件
		fs.write(fd,'everyday is new begining',(err)=>{
			if(err){
				console.log('write error:::',err)
			}else{
				console.log('write success:::')
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
fs.writeFile('./01.txt','hello liucheng',{flag:'a'},(err)=>{
	if(err){
		console.log('write error:::',err)
	}else{
		console.log('write success:::')
	}
})
*/

//3.promise异步处理
const writeFile = util.promisify(fs.writeFile);

writeFile('./01.txt','promise',{flag:'w'})
.then(data=>{
	console.log('success');
})
.catch(err=>{
	console.log(err);
})
