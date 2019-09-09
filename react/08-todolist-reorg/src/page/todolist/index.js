
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Button,Input,Col,Row,List } from 'antd';


import "./index.css"
import { actionCreator } from './store'


class TodoList extends Component{
    componentDidMount(){
        this.props.handleInit()
    }
    render(){
        const { handleChange,handleAdd,handleDel,task,list }=this.props
        return( 
            <div className="TodoList">
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
        task:state.todolist.task,
        list:state.todolist.list
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
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)