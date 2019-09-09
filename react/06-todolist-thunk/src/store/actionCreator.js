

import axios from 'axios'

import{
	ADD_ITEM,
	CHANGE_ITEM,
	DEL_ITEM,
	LOAD_DATA
} from './actionsTypes.js'

export const getAddAction=()=>({
		type:ADD_ITEM
})
export const getChangeAction=(task)=>({
		type:CHANGE_ITEM,
		payload:task
})
export const getDelAction=(index)=>({
		type:DEL_ITEM,
		payload:index
})
const getLoadInitDataAction = (payload)=>({
    type:LOAD_DATA,
    payload
})
export const getRequestInitDataAction = ()=>{
	return (dispatch,getState)=>{
		axios.get('http://127.0.0.1:3000')
        .then(result=>{
            dispatch(getLoadInitDataAction(result.data))
        })
        .catch(err=>{
            console.log(err)
        })
	}
}