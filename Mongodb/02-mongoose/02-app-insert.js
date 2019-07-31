const mongoose = require('mongoose');
//构建数据用
const getRandom = (min,max)=>{
	return Math.round(min + (max-min)*Math.random());
}
const names=["Amy","Tom","Leo","Peter","Ricky","Lucy","Andy","Mike"];
const majors=["art","computer","sport","music"]

const getName = ()=> names[getRandom(0,names.length-1)]
const getMajor = ()=> majors[getRandom(0,majors.length-1)]











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

 	const arr=[];
 	for(let i=0;i<100;i++){
 		arr.push({
 			name:getName(),
 			age:getRandom(10,150),
 			major:getMajor()
 		})
 	}
 	//3.使用模型(CRUD)
 	UserModel.insertMany(arr)
 	.then(docs=>{
 		console.log(docs)
 	})
 	.catch(err=>{
 		console.log("in")
 	})
});



// const Kitten = mongoose.model('user', UserSchema);