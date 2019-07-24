const EventEmitter = require('events');
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
emitter.on('newListener',(eventName,callback)=>{
	console.log(eventName);
	callback();
})
emitter.on('test1',function(){
	console.log('fn1 ... test')
})
emitter.on('test2',function(){
	console.log('fn2 ... test')
})