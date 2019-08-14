

import axios from 'axios'

import * as types from './actionsTypes.js'

export const getAddAction=()=>({
		type:types.ADD_ITEM
})
export const getChangeAction=(task)=>({
		type:types.CHANGE_ITEM,
		payload:task
})
export const getDelAction=(index)=>({
		type:types.DEL_ITEM,
		payload:index
})
const getLoadInitDataAction = (payload)=>({
    type:types.LOAD_DATA,
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