/*
* @Author: TomChen
* @Date:   2019-07-31 09:42:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-01 17:52:07
*/
const mongoose = require('mongoose')

//1.定义Schema
const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"分类必须输入"],
    },
    order:{
        type:Number,
        default:0
    }
})

const CategoryModel = mongoose.model('category', CategorySchema)

module.exports = CategoryModel
