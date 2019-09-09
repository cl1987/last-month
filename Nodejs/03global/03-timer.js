const t1=setTimeout(()=>{
	console.log("extend,,,,,,")
},0)
// console.log(t1)

const t3=setImmediate(()=>{
	console.log("11111,,,,,,")
})

const t4=process.nextTick(()=>{
	console.log("2222,,,,,,")
})
// console.log(t3)

/*
const t2=setInterval(()=>{
	console.log("init itnt")
},100)
*/