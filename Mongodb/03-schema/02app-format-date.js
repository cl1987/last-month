const mongoose = require('mongoose')

const moment = require('moment')

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
    UserModel.findById('5d41005363d1902b340262b0',(err,user)=>{
        if(err){
            console.log(err)
        }else{
            const date = new Date(user.createdAt)
            console.log(date.toLocaleString())
            console.log(moment(user.createdAt).format('YYY-MM-DD-HH:mm:ss'))
        }
    })
})