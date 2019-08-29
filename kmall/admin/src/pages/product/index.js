     
import React, { Component } from 'react'
import {
  Route,
  Switch
} from "react-router-dom"
import ProductSave from './save.js'
import ProductList from './list.js'
import ProductDetail from './detail.js'



import "./index.css"


class Product extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (

      <Switch>
        <Route path="/product/save/:productId?" component={ProductSave} />
        <Route path="/product/detail/:productId?" component={ProductDetail} />
        <Route path="/product/" component={ProductList} />
      </Switch>
    );
  }
}


export default Product