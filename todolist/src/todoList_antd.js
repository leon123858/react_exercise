import React, { Component, Fragment } from 'react';
import { Input, List } from 'antd';
import store from './store/index';

const Search = Input.Search;

class todo_List_antd extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
	}
	render() {
		const { inputValue, list } = this.state;
		return (
			<Fragment>
				<Search
					placeholder='input text'
					allowClear
					enterButton='添加'
					size='large'
					onSearch={'Search'}
					style={{ marginLeft: 10, marginTop: 10, width: '30%' }}
					value={inputValue}
				/>
				<List
					size='large'
					bordered
					dataSource={list}
					renderItem={(item) => <List.Item>{item}</List.Item>}
					style={{ marginLeft: 10, marginTop: 10, width: '30%' }}
				/>
			</Fragment>
		);
	}
}
export default todo_List_antd;
