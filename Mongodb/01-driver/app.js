const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://127.0.0.1:27017"
const client =new MongoClient(uri,{ useNewUrlParser:true })
const dbUsers='lyc'

client.connect(err=>{
	if(err){
		console.log(err)
		throw err
	}
	console.log('connect db success...')
	const db = client.db(dbUsers)
	const collection = db.collection('users')
	/*
	collection.insertMany([{name:"Tom",score:100},{name:"Leo",score:88}],(err,result)=>{
        if(err){
            console.log('insertMany error:',err)
        }else{
            console.log('insertMany result:',result)
        }
        //关闭连接
        client.close()
    })
    */
    /*
    collection.find({}).toArray((err,docs)=>{
    	if(err){
    		console.log('find err',err)
    	}else{
    		console.log('find docs',docs)
    	}
    	client.close()
    })
    */
    collection.updataOne
})
