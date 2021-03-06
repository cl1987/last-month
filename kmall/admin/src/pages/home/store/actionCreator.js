
import axios from 'axios'

import * as types  from './actionTypes.js'
import { message } from 'antd'
import { saveUsername } from 'util'

const getSetCountAction = (payload)=>({
    type:types.SET_COUNT,
    payload
})


export const getCountAction = (values)=>{
    return (dispatch,getState)=>{
        axios({
            method: 'get',
            url:'http://127.0.0.1:3000/counts/',
            withCredentials:true
        })
        .then(result=>{
            // console.log(result)
            const data  = result.data
            if(data.code == 0){
               dispatch(getSetCountAction(data.data))
            }else{
                message.error('网络错误,请稍后再试')
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })      
    }
}


