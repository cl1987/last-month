import React,{ Component } from 'react'
import './index.css'
import Layout from 'common/layout'
import { connect } from 'react-redux'

import { Breadcrumb,Form, Select, Input, Button , InputNumber } from 'antd'
import { actionCreator } from './store'
import UploadImage from 'common/upload-image'
import RichEditor from 'common/rich-editor'
import { UPLOAD_PRODUCT_IMAGE,UPLOAD_PRODUCT_DETAIL_IMAGES } from 'api/config.js'

const { Option } = Select;

class ProductDetail extends Component {
	constructor(props){
		super(props)
    this.state ={
      productId:this.props.match.params.productId 
    }
	}
  componentDidMount(){
    if(this.state.productId){
      this.props.getProductDetail(this.state.productId)
    }
  } 
    render() {
        const {
          categoryName,
          category,
          name,
          description,
          price,
          stock,
          detail,
          mainImage,
          images,
        } = this.props
        const { getFieldDecorator } = this.props.form
        let imagesBox = null
        if(images){
          imagesBox = images.split(',').map((url,index)=>{
            return (<li key={index}>
              <img src={url} />
            </li>)
          })
        }
        return (
            <Layout>
                 <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                  <Breadcrumb.Item>查看商品</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} >
                        <Form.Item label="商品分类">
                          <Input value={categoryName}  disabled={true} />
                        </Form.Item>                    
                        <Form.Item label="商品名称">
                          <Input value={name}  disabled={true} />
                        </Form.Item>
                        <Form.Item label="商品描述">
                          <Input value={description}  disabled={true} />
                        </Form.Item>
                        <Form.Item label="商品价格">
                          <InputNumber value={price}  disabled={true} />
                        </Form.Item>
                        <Form.Item label="商品库存">
                          <InputNumber  value={stock}  disabled={true} />
                        </Form.Item>
                        <Form.Item 
                          label="封面图片"
                        >
                        {
                          mainImage ? <ul className="imgBox"><li><img src={mainImage} /></li></ul> : null
                        }
                        </Form.Item>
                        <Form.Item 
                          label="商品图片"
                        >
                          <ul className="imgBox">{imagesBox}</ul>
                        </Form.Item>
                        <Form.Item label="商品详情">
                          <div dangerouslySetInnerHTML={{__html:detail}} ></div>
                        </Form.Item> 
                      </Form>                                  
                </div>                
            </Layout>
        )
    }
}
const WrappedProductDetail = Form.create({ name: 'category' })(ProductDetail)
//映射属性到组件
const mapStateToProps = (state) => {
    return {

      categoryName:state.get('product').get('categoryName'),
      name:state.get('product').get('name'),
      description:state.get('product').get('description'),
      price:state.get('product').get('price'),
      stock:state.get('product').get('stock'),
      detail:state.get('product').get('detail'),        
      mainImage:state.get('product').get('mainImage'),        
      images:state.get('product').get('images'),
    }
}
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
  handleMainImage:(fileList)=>{
    dispatch(actionCreator.setMainImageAction(fileList))
  },
  handleImages:(fileList)=>{
    dispatch(actionCreator.setImagesAction(fileList))
  },
  handleDetail:(values)=>{
    dispatch(actionCreator.setDetailAction(values))
  },
	handleSave:(err,values)=>{
		dispatch(actionCreator.getSaveAction(err,values))
	},
  getLevelCategories:()=>{
    dispatch(actionCreator.getLevelCategoriesAction())
  },
  getProductDetail:(productId)=>{
    dispatch(actionCreator.getProductDetailAction(productId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedProductDetail)