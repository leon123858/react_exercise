import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import actionCreator from './store/actionCreator';

const todoList = (props) => {
	const { inputValue, list, createItem, changeInput, deleteItem } = props;
	return (
		<Fragment>
			<h1>todoList</h1>
			<input
				placeholder='想添加的任務'
				value={inputValue}
				onChange={changeInput}
			></input>
			<button onClick={createItem}>提交</button>
			<ul>
				{list.map((value, index) => {
					return (
						<li key={index} onClick={() => deleteItem(index)}>
							{value}
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list,
	};
};

const eventHandler = (dispatch) => {
	return {
		createItem() {
			const action = actionCreator.addItem();
			dispatch(action);
		},
		changeInput(e) {
			const action = actionCreator.changeInput(e);
			dispatch(action);
		},
		deleteItem(index) {
			const action = actionCreator.deleteItem(index);
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, eventHandler)(todoList);
