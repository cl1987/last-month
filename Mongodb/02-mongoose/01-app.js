const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xukangkang', {useNewUrlParser: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  //1.定义Schema
 	const UserSchema = new mongoose.Schema({
		name: String,
		age:Number,
		major:String
	})
 //2.根据Schema定义数据模型
 //2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
 //2.2 model方法第二个参数指定Schema
 	const UserModel = mongoose.model('user', UserSchema);
 	//3.使用模型(CRUD)
    //4.1 新增
    
    const user = new UserModel({name:"Tom",age:18,major:"Computer"})
     user.save((err,doc)=>{
        if(err){
            console.log('save user error:',err)
        }else{
            console.log(doc)
        }
    })
    
    //4.2 查找
    /*
    UserModel.find({},(err,docs)=>{
		if(err){
			console.log('find user error::',err);
		}else{
			console.log(docs);
		}		
	})
	*/
	//4.3 更新
	//update要被废弃,不推荐使用
	/*
	UserModel.update({name:"Tom"},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('update user error::',err);
		}else{
			console.log(result);
		}			
	});
	*/
	/*
	UserModel.updateOne({name:"Tom"},{$set:{age:98}},(err,result)=>{
		if(err){
			console.log('update user error::',err);
		}else{
			console.log(result);
		}			
	});
	*/
	//4.4 删除
	/*
	UserModel.deleteOne({name:"Tom"},(err,result)=>{
		if(err){
			console.log('deleteOne user error::',err);
		}else{
			console.log(result);
		}		
	})
	*/

});



// const Kitten = mongoose.model('user', UserSchema);