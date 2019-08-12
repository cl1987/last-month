
import React,{ Component } from 'react'

import { Button,Input,Col,Row,List } from 'antd';

import "./App.css"

const AppUI=(props)=>{
    const { handleChange,handleAdd,handleDel,task,list }=props
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

export default AppUI