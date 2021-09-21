import React, { Component, Fragment } from 'react';
import TodoItem from './todoItem';
import axios from 'axios';
import './style.css';

class todoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputWord: '',
			list: [],
		};
	}
	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor='inputArea'>input something</label>
					<input
						id='inputArea'
						className='input'
						value={this.state.inputWord}
						onChange={this.changeInputWord}
					></input>
					<button onClick={this.clickBtn}>提交</button>
				</div>
				<ul>{this.getTodoItems()}</ul>
			</Fragment>
		);
	}
	// 生命週期函數, 當組件完成掛載後執行
	componentDidMount() {
		// 這裡會放一些 AJAX 來獲取填充 render 內容的資訊
		// 僅在掛載時會執行一次
		axios
			.get('http://127.0.0.1:1337/getFile/json.json')
			.then((res) => {
				this.setState(() => {
					return {
						list: [...res.data],
					};
				});
			})
			.catch(() => {
				console.log('fetch error');
			});
	}

	getTodoItems = () => {
		// <li
		// 	key={index}
		// 	onClick={(e) => this.deleteItem(index)}
		// 	dangerouslySetInnerHTML={{ __html: item }}
		// ></li>;
		return this.state.list.map((item, index) => {
			return (
				<TodoItem
					key={index}
					content={item}
					index={index}
					deleteFunc={this.deleteItem}
				/>
			);
		});
	};

	changeInputWord = (e) => {
		this.setState(() => {
			return {
				inputWord: e.target.value,
			};
		});
	};
	clickBtn = () => {
		this.setState((prevStage) => {
			const { inputWord, list } = prevStage;
			const duplicateList = [...list, inputWord];
			return {
				inputWord: '',
				list: duplicateList,
			};
		});
	};
	deleteItem = (index) => {
		this.setState((prevStage) => {
			const list = [...prevStage.list];
			list.splice(index, 1);
			return { list: list };
		});
	};
}

export default todoList;
