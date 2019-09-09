
import React,{ Component } from 'react'
// import store from './store'

import { getAddAction,
        getChangeAction,
        getDelAction,
        getRequestInitDataAction } 
        from './store/actionCreator.js'

// import AppUI from './AppUI.js'
import { Button,Input,Col,Row,List } from 'antd';
import { connect } from 'react-redux'

import "./App.css"
/*
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
*/
class App extends Component{
    componentDidMount(){
        this.props.handleInit()
    }
    render(){
        const { handleChange,handleAdd,handleDel,task,list }=this.props
        return( 
            <div className="App">
                <Row>
                    <Col span={16}>
                        <Input 
                            onChange={handleChange} 
                            value={task}  
                        />
                    </Col>
                    <Col span={8}>
                        <Button
                            type="primary"
                            onClick={handleAdd}
                        >Primary
                        </Button>
                    </Col>
                </Row>
                <List
                    style={{ marginTop: 20 }}
                    bordered
                    dataSource={list}
                    renderItem={(item,index) => (
                        <List.Item
                            onClick={()=>{handleDel(index)}} 
                        >
                            {item}
                        </List.Item>
                    )}
                />
            </div> 
        )
    }
}
//映射属性到组件
const mapStateToProps = (state)=>{
    return{
        task:state.task,
        list:state.list
    }
}
//映射方法到组件
const mapDispatchToProps = (dispatch)=>({
    handleChange:(ev)=>{
        const task = ev.target.value
        dispatch(getChangeAction(task))
    },
    handleAdd:()=>{
        dispatch(getAddAction())
    },
    handleDel:(index)=>{
        dispatch(getDelAction(index))
    },
    handleInit:()=>{
        dispatch(getRequestInitDataAction())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(App)