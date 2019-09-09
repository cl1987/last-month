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
emitter.setMaxListeners(11)
emitter.on('test',()=>{
	console.log('running test1....')
})
emitter.on('test',()=>{
	console.log('running test2....')
})
emitter.on('test',()=>{
	console.log('running test3....')
})
emitter.on('test',()=>{
	console.log('running test4....')
})
emitter.on('test',()=>{
	console.log('running test5....')
})
emitter.on('test',()=>{
	console.log('running test6....')
})
emitter.on('test',()=>{
	console.log('running test7....')
})
emitter.on('test',()=>{
	console.log('running test8....')
})
emitter.on('test',()=>{
	console.log('running test9....')
})
emitter.on('test',()=>{
	console.log('running test10....')
})
emitter.on('test',()=>{
	console.log('running test11....')
})
// emitter.addListener('test',()=>{
// 	console.log('running test1111111111....')
// })

// emitter.once('test',()=>{
// 	console.log(111)
// })
emitter.emit('test')
console.log(emitter.on==emitter.addListener);