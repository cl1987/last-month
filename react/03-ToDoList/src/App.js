import React,{ Component } from 'react'
import Item from './Item.js'
import './App.css'


class App extends Component{
	constructor(props){
		super(props);
		this.state={
			list:['吃饭','睡觉','敲代码','跑步'],
			task:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState((preState)=>({
			list:[...preState.list,preState.task],
			task:''
		}),()=>{
			// console.log('2...',this.ul.childNodes)
		})
		// console.log('1......',this.ul.childNodes)
	}
	handleChange(event){
		// console.log(event.target.value)
		const task=event.target.value
		this.setState(()=>({
			task:task
		}))
	}
	handleDelete(index){
		const list=[...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} task={item} handleDelete={this.handleDelete.bind(this,index)} />
		})
	}
	render(){
		// console.log('App.js...render')
		return (
			<div className="App">		
				<input
					onChange={this.handleChange} 
					value={this.state.task}
					ref={(input)=>{this.input=input}}
				/>
				<button className="btn" onClick={this.handleClick}>提交</button>
				<ul 
					style={{ color:'red'}}
					ref={(ul)=>{this.ul=ul}}
				>
					{
						this.getItems()
					}
				</ul> 
			</div>
		)
	}
}
export default App

