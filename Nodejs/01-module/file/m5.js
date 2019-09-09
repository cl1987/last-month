//定义模块
console.log('in m5...')
const str = 'hello'

const fn = ()=>{
    console.log('fn...')
}

const obj = {
    name:'Tom',
    age:18
}
/*
exports.str = str
exports.fn = fn
exports.obj = obj
*/

/*
module.exports.str = str
module.exports.fn = fn
module.exports.obj = obj
*/

module.exports={
	str,
	fn,
	obj
}

// console.log(exports)