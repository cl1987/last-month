
async function pagination(options){

}


module.exports = pagination

async function pagination(options){
	let { page,model,query,sort,projection } = options
	const limit = 2
	page = parseInt(page)
	if(isNaN(page)){
		page=1
	}

	if(page == 0){
		page=1
	}
	const count = await model.countDocuments()
	const pages=Math.ceil(count/limit)
	if(page>pages){
		page=pages
	}
	const list = [];
	for(let i =1;i<=pages;i++){
		list.push(i)
	}
	const skip=(page-1)*limit

	const docs = await model.find(query,projection).sort(sort).skip(skip).limit(limit)

	return{
		docs:docs,
        page:page,
        list:list,
        pages:pages
	}
}


module.exports=pagination

