const EventEmitter = require('events');
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();


const fn=()=>{
	console.log('arg1')

}
emitter.on('test',fn)

// emitter.off('test',fn)
emitter.removeListener('test',fn);

emitter.emit('test');

//名字