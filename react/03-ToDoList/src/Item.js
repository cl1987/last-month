import React,{ Component } from 'react'
import propTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props)
	}
	componentWillUnmount(){
		//通常做一些清理工作比如，清除定时器
		console.log('componentWillUnmount()')
	}
	render(){
		// console.log('Item.js...render')
		const { handleDelete,task }=this.props
		return (
			<li onClick={handleDelete} >{task}</li>
		)
	}
}

Item.propTypes={
	handleDelete:propTypes.func,
	task:propTypes.string.isRequired
}
Item.defaultProps={
	task:'learn....'
}

export default Item