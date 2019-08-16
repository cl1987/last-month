
import axios from 'axios'

import * as types  from './actionTypes.js'
import { message } from 'antd'
import { saveUsername } from 'util'
import api from 'api'



const getPageReqestStartAction = ()=>({
    type:types.PAGE_REQEST_START,
})
const getPageReqestDoneAction = ()=>({
    type:types.PAGE_REQEST_DONE,
})
const getSetPageAction = (payload)=>({
    type:types.SET_PAGE,
    payload
})


export const getPageAction = (page)=>{
    return (dispatch,getState)=>{
        dispatch(getPageReqestStartAction())
        api.getUserList({
            page:page
        })
        .then(result=>{
            console.log(result)
            // const data  = result.data
            if(result.code == 0){
               dispatch(getSetPageAction(result.data))
            }else{
                message.error('网络错误,请稍后再试')
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })
        .finally(()=>{
            dispatch(getPageReqestDoneAction())
        })     
    }
}


