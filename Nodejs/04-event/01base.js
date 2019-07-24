const EventEmitter = require('events');
/*
const emitter = new EventEmitter();
emitter.on('test',()=>{
	console.log('running test fn');
})
emitter.emit('test');
*/
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
emitter.on('test',()=>{
	console.log('running test....')
})
emitter.emit('test')