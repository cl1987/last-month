
import React,{ Component } from 'react'
import store from './store'
import axios from 'axios'

import { Button,Input,Col,Row,List } from 'antd';
import { getAddAction,
        getChangeAction,
        getDelAction,
        getLoadInitDataAction } 
        from './store/actionCreator.js'

import AppUI from './AppUI.js'

class App extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
        this.state=store.getState()
        store.subscribe(()=>{this.setState(store.getState())})
    }
    componentDidMount(){
        //发送ajax请求，
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            // console.log(result)
            store.dispatch(getLoadInitDataAction(result.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    handleAdd(){
        store.dispatch(getAddAction())
    }
    handleChange(ev){
        const task = ev.target.value
        store.dispatch(getChangeAction(task))
    }
    handleDel(index){
        store.dispatch(getDelAction(index))
    }
    handleInit(){
        const action=getInitDataAction();
        store.dispatch()
    }
    render(){
        return( 
            <AppUI
                task={this.state.task}
                list={this.state.list}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}
                handleDel={this.handleDel}
            />
        )             
    }
}

export default App