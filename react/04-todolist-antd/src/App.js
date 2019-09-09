
import React,{ Component } from 'react'
import { Button,Input,Col,Row,List } from 'antd';
import Item from './Item.js'

import "./App.css"
// import 'antd/dist/antd.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:["吃饭","睡觉"],
            task:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleAdd(){
        this.setState((preState)=>({
            list:[...preState.list,preState.task],
            task:''
        }))
    }
    handleChange(ev){
      const task = ev.target.value
      this.setState(()=>({
         task:task
      }))
    }
    handleDel(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState(()=>({
            list
        }))
    }
    getItems(){
        return this.state.list.map((item,index)=>{
          return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)} />
        })        
    }
    render(){
        return( 
        <div className="App">
            <Row>
                <Col span={16}>
                    <Input 
                        onChange={this.handleChange} 
                        value={this.state.task}  
                    />
                </Col>
                <Col span={8}>
                    <Button
                        type="primary"
                        onClick={this.handleAdd}
                    >Primary
                    </Button>
                </Col>
            </Row>
            <List
                style={{ marginTop: 20 }}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (
                    <List.Item
                        onClick={this.handleDel.bind(this,index)} 
                    >
                        {item}
                    </List.Item>
                )}
            />
            {/*
            <ul ref={(ul)=>{this.ul = ul}}>
                {
                    this.getItems()
                }
            </ul>
            */}
        </div> 
        )             
    }
}

export default App