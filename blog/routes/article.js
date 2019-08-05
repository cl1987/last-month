/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-02 17:46:33
*/
const express = require('express')

// const multer = require('multer')
// const upload = multer({ desk: 'public/uploads/' })

const ArticleModel = require('../models/article.js')
const CategoryModel = require('../models/category.js')
const pagination = require('../util/pagination.js')

const router = express.Router()
//权限验证
router.use((req,res,next)=>{
    if(req.userInfo.isAdmin){
        next()
    }else{
        res.send('<h1>请用管理员账号登录</h1>')
    }
})

//显示分类管理首页
router.get('/', (req, res) => {
    let page = req.query.page
    const options = {
        page:req.query.page,
        model:ArticleModel,
        query:{},
        sort:{_id:-1},
        projection:"-__v"
    }
    pagination(options)
    .then(data=>{
        res.render("admin/article_list",{
            userInfo:req.userInfo,
            articles:data.docs,
            page:data.page,
            list:data.list,
            pages:data.pages,
            url:"/article"
        })       
    })
    .catch(err=>{
       console.log('get categories err:',err) 
    })
})

//显示添加文章的页面
router.get('/add', (req, res) => {
    CategoryModel.find({},"name")
    .sort({order:-1})
    .then(categories=>{
        res.render("admin/article_add",{
            userInfo:req.userInfo,
            categories
        }) 
    })
    
})
// 处理添加文章
router.post('/add',(req,res)=>{
	const {title,category,intro,content}=req.body

    ArticleModel.insertMany({
        title,
        category,
        intro,
        content,
        user:req.userInfo._id
    })
    .then(categories=>{
        res.render("admin/success",{
            message:"添加分类成功"
        })
    })
	.catch(err=>{
        console.log(err)
		res.render("admin/err",{
            message:"数据库操作失败",
            url:'/category'
        })
	})
})
//显示编辑分类
router.get('/edit/:id',(req,res)=>{
    const { id } = req.params
    console.log(id)
    ArticleModel.findById(id)
    .then(category=>{
        res.render("admin/category_add_edit",{
            userInfo:req.userInfo,
            category
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            message:"数据库操作失败",
            url:'/category'
        })
    })
})
//处理编辑分类
router.post("/edit/:id",(req,res)=>{
    const{ id,category,title,intro,content} = req.body
    ArticleModel.updataOne({_id:id},{category,title,intro,content})
    .then(result=>{
        res.render("admin/success",{
            message:"新增分类成功",
            url:'/article'
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            message:"修改文章操作失败"
        })
    })
})

//处理删除操作
router.get('/delete/:id',(req,res)=>{
    const { id } = req.params
    CategoryModel.deleteOne({_id:id})
    .then(result=>{
        res.render("admin/success",{
            message:"删除分类成功",
            url:"/category"
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            message:"数据库操作失败",
            url:"category"
        })
    })
})








module.exports = router