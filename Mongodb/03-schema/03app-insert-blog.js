const mongoose = require('mongoose')

const BlogModel = require('./models/blog.js')

//1.连接数据库
mongoose.connect('mongodb://localhost/liucheng', { useNewUrlParser: true })

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error', (err) => {
    console.log('connection db error:',err)
    throw err
})

db.once('open', () => {
    console.log('connection db success')
//.................................................................
    BlogModel.insertMany({
        title:"best blog",
        content:"this is a best blog",
        author:"5d40f53121503007f0fea990"
    })
    .then(docs=>{
        console.log('insert users:',docs)
    })
    .catch(err=>{
        console.log('insert users err:',err.message)
    })
})