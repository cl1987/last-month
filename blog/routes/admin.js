/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-02 17:46:33
*/
const express = require('express')
const UserModel = require('../models/user.js')

const router = express.Router()
//权限验证
router.use((req,res,next)=>{
    if(req.userInfo.isAdmin){
        next()
    }else{
        res.send('<h1>请用管理员账号登录</h1>')
    }
})

//显示后台管理首页
router.get('/', (req, res) => {
    res.render("admin/index",{
        userInfo:req.userInfo
    })
})
//显示用户列表
router.get('/users', (req, res) => {
	let page = req.query.page
	const limit = 2
	page = parseInt(page)
	if(isNaN(page)){
		page=1
	}

	if(page == 0){
		page=1
	}
	UserModel.countDocuments((err,count)=>{
		const pages=Math.ceil(count/limit)
		if(page>pages){
			page=pages
		}
		const list = [];
		for(let i =1;i<=pages;i++){
			list.push(i)
		}
		const skip=(page-1)*limit
		UserModel.find({})
		.skip(skip)
		.limit(limit)
		.then(users=>{
			res.render("admin/user_list",{
                userInfo:req.userInfo,
                users:users,
                page:page,
                list:list
            })
		})
		.catch(err=>{
            console.log('get users err:',err) 
        })
	})

})


module.exports = router