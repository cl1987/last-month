
import React,{ Component } from 'react'
import store from './store'

import { getAddAction,
        getChangeAction,
        getDelAction,
        getRequestInitDataAction } 
        from './store/actionCreator.js'

import AppUI from './AppUI.js'

class App extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
        this.state=store.getState()
        console.log("1111111111:::::",this.state)
        store.subscribe(()=>{this.setState(store.getState())})
    }
    componentDidMount(){
        //发送ajax请求，
        store.dispatch(getRequestInitDataAction())
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