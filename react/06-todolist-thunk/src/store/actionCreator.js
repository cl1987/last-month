import{
	ADD_ITEM,
	CHANGE_ITEM,
	DEL_ITEM,
	LOAD_DATA
} from './actionsTypes.js'

export const getAddAction=()=>{
	return {
		type:ADD_ITEM
	}
}
export const getChangeAction=(payload)=>{
	return {
		type:CHANGE_ITEM,
		payload
	}
}
export const getDelAction=(payload)=>{
	return {
		type:DEL_ITEM,
		payload
	}
}
export const getLoadInitDataAction = (payload)=>({
	type:LOAD_DATA,
	payload
})