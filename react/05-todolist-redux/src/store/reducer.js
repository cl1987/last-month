
const defaultState={
	list:["昨日星空","打上火花"],
    task:''
}

export default (state=defaultState,action)=>{
	if(action.type=='change_item'){
		 const newState = JSON.parse(JSON.stringify(state))
		 newState.task= action.payload

		 return newState
	}
	if(action.type=='del_item'){
		 const newState = JSON.parse(JSON.stringify(state))
		 newState.list.splice(action.payload,1)

		 return newState
	}
	if(action.type=='add_item'){
		 const newState = JSON.parse(JSON.stringify(state))
		 newState.list.push(state.task)
		 newState.task =''	

		 return newState
	}
	return state
}