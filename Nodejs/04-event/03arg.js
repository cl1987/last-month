const EventEmitter = require('events');
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();

emitter.on('test',(arg1,arg2)=>{
	console.log(arg1)
	console.log(arg2)
})


var arg=["hello","leo"]
emitter.emit('test',"hello","kuazhu")
emitter.emit('test',...arg)