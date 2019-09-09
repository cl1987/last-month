const {Writable} = require('stream');

class MyWriter extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk);
		console.log(encoding);
		callback && callback()
	}
}

const writer= new MyWriter();
writer.on('finish',()=>{
	console.log('finish.........');
})

writer.write('hello','utf-8',()=>{
	console.log('hello....')
})
writer.write("kuazhu");
writer.end();