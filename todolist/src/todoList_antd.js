import React, { Component } from 'react';
import axios from 'axios';
import actionCreator from './store/actionCreator';
import store from './store/index';
import TodoListUI from './todoListUI';

class todo_List_antd extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		store.subscribe(() => {
			this.setState(store.getState());
		});
	}
	render() {
		const { inputValue, list } = this.state;
		return (
			<TodoListUI
				inputValue={inputValue}
				list={list}
				changeFunc={(e) => {
					const action = actionCreator.changeInput(e);
					store.dispatch(action);
				}}
				addFunc={() => {
					const action = actionCreator.addItem();
					store.dispatch(action);
				}}
				deleteFunc={(index) => {
					const action = actionCreator.deleteItem(index);
					store.dispatch(action);
				}}
			></TodoListUI>
		);
	}
	componentDidMount() {
		// 這裡會放一些 AJAX 來獲取填充 render 內容的資訊
		// 僅在掛載時會執行一次
		axios
			.get('http://127.0.0.1:1337/getFile/json.json')
			.then((res) => {
				const action = actionCreator.setItems(res);
				store.dispatch(action);
			})
			.catch(() => {
				const action = actionCreator.setItems([1, 2, 3]);
				store.dispatch(action);
			});
	}
}
export default todo_List_antd;
