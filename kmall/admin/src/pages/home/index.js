     
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from 'common/layout'
import { Breadcrumb,Col,Row,Card } from 'antd'
import "./index.css"
import { actionCreator } from './store'

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.handleCount()
  }
  render() {
    const {usernum,productnum,ordernum}= this.props
    return (
      <div className="Home">
          <Layout>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
            </Breadcrumb>
            <div className="content">
                <Row>
                  <Col span={8}>
                    <Card title="用户数" bordered={false} style={{ width: 300 }}>
                      <p>{usernum}</p>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="商品数" bordered={false} style={{ width: 300 }}>
                      <p>{productnum}</p>
                    </Card>                      
                  </Col>
                  <Col span={8}>
                    <Card title="订单数" bordered={false} style={{ width: 300 }}>
                      <p>{ordernum}</p>
                    </Card>  
                  </Col>
                </Row>                                                        
            </div>
          </Layout>
      </div>
    );
  }
}


//映射属性到组件
const mapStateToProps = (state) => ({
    usernum:state.get('home').get('username'),
    productnum:state.get('home').get('productnum'),
    ordernum:state.get('home').get('ordernum')
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
    handleCount:()=>{
      dispatch(actionCreator.getCountAction())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)