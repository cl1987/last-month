import React,{ Component } from 'react'
import Item from './Item.js'
import './App.css'


class App extends Component{
	constructor(props){
		console.log('constructor(props)')
		super(props);
		this.state={
			list:['吃饭','睡觉','敲代码','跑步'],
			task:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	static getDerivedStateFromProps(props, state){
		//根据props来修改state
		console.log('getDerivedStateFromProps(props, state)',props,state)
		//用返回的对象和当前的state合并
		/*
		return {
			task:"hello"
		}
		*/
		return null
	}
	shouldComponentUpdate(nextProps, nextState){
		//根据当前新的props或者新的state来决定到底需不需要更新DOM
		console.log('shouldComponentUpdate(nextProps, nextState)',nextProps,nextState)
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		//保证真实DOM更新前的某些数据 
		console.log('getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState)
		return 123
	}
	//真实的更新
	componentDidUpdate(prevProps, prevState,snapshot){
		//获取真实DOM更新前的某些数据 
		console.log('componentDidUpdate(prevProps, prevState,snapshot)',prevProps, prevState,snapshot)
	}
	componentDidMount(){
		//一般在这里发送Ajax
		console.log('App componentDidMount()')
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
		console.log('App...render')
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

