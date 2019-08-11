import React,{ Component } from 'react'
import propTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props)
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