import{
	ADD_ITEM,
    CHANGE_ITEM,
    DEL_ITEM,
    LOAD_DATA
} from './actionsTypes.js'
const defaultState={
	list:["昨日星空","打上火花"],
    task:''
}

export default (state=defaultState,action)=>{
	if(action.type==CHANGE_ITEM){
		 const newState = JSON.parse(JSON.stringify(state))
		 newState.task= action.payload

		 return newState
	}
	if(action.type==DEL_ITEM){
		 const newState = JSON.parse(JSON.stringify(state))
		 newState.list.splice(action.payload,1)

		 return newState
	}
	if(action.type==ADD_ITEM){
		 const newState = JSON.parse(JSON.stringify(state))
		 newState.list.push(state.task)
		 newState.task =''	

		 return newState
	}
	if(action.type == LOAD_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.payload
        return newState
    }
	return state
}