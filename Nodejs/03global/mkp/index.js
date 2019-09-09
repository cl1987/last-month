const fs = require('fs')



//指定项目名称，创建前端项目的目录结构
function mkp(){
	//1.获取名称
	const pathName = process.argv[2]
	//2.根据名称建立文件夹
	fs.mkdirSync(pathName)
	fs.mkdirSync(pathName+"/css")
	fs.mkdirSync(pathName+"/js")
	fs.mkdirSync(pathName+"/images")
}
module.exports = mkp
