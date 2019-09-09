

const path = require('path')
const fs = require('fs')
const util = require('util');
const dataPath = path.normalize(__dirname + '/../data/item.json')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)


async function get(){
	const data = await readFile(dataPath)
	const arr = JSON.parse(data);
	return arr
}
async function add(task){
<<<<<<< HEAD

=======
    //1.读取数据文件
    const data = await readFile(dataPath)
    //2.将读取文件的字符串转换为数组
    const arr = JSON.parse(data)
    //3.根据参数生成任务对象并且将任务对象插入到数组
    const obj = {
        id:Date.now().toString(),
        task:task
    }
    arr.push(obj)
    //4.把新数组转换为字符串,把字符串覆盖写入到数据文件
    await writeFile(dataPath,JSON.stringify(arr))
    //5.返回任务对象
    return obj
}
async function del(id){
    //1.读取数据文件
    const data = await readFile(dataPath)
    //2.将读取文件的字符串转换为数组
    const arr = JSON.parse(data)
    //3.根据ID删除数组中对应的数据并且生成新的数组
    const newArr = arr.filter((item)=>{
        return item.id != id
    })
    //4.把新数组转换为字符串,把字符串覆盖写入到数据文件
    await writeFile(dataPath,JSON.stringify(newArr))
>>>>>>> 677407ee90955cfbfc981d1d326999c0201d940b
}

module.exports = {
	get,
<<<<<<< HEAD
	add
=======
	add,
	del
>>>>>>> 677407ee90955cfbfc981d1d326999c0201d940b
}