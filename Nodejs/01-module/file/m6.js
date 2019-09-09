//返回引入文件的module.exports对象
/*
const m5=require('./m5.js')
console.log(m5)
*/
const {str,fn,obj} = require('./m5.js')
fn()
console.log(str)
console.log(obj)

