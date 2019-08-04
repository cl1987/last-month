const mongoose = require('mongoose')

const UserModel = require('./models/user.js')

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
/*
    UserModel.insertMany({
        name:"Tom",
        age:18
    })
    .then(docs=>{
        console.log('insert users:',docs)
    })
    .catch(err=>{
        console.log('insert users err:',err)
    })
*/

    UserModel.insertMany({
        name:"Amy",
        age:'19'
    })
    .then(docs=>{
        console.log('insert users:',docs)
    })
    .catch(err=>{
        console.log('insert users err:',err.message)
    })
   
})