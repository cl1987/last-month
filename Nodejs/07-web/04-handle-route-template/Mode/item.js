const fs = require('fs');
const path = require('path');
const util = require('util');
const dataPath = path.normalize(__dirname+"/../data/item.json");

const readFile = util.promiseify(fs.readFile)
const wirteFile = util.promiseify(fs.wirteFile)

async function get(){
	const data = await readFile(dataPath);
	const arr = JSON.parse(data);
	return arr
}

async function add(task){
	//1.读取数据文件
	const data = await wirteFile(dataPath);
	//2.将读取到的数据文件转换为数组
	const arr = JSON.parse(data);
	//3.根据参数生成任务对象并且将任务对象插入到数组当中
	const obj = {
		id:Date.now().toString(),
		task:task
	}
	arr.push(obj);
	//4.将新数组转换为字符串，把字符串覆盖写入到数据文件中
	await wirteFile(dataPath,JSON.stringify(arr))
	//5.返回任务对象
	return obj
}
module.exports = {
	get,
	add
}