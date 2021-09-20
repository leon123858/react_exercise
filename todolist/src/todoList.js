import React, { Component, Fragment } from 'react';

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
					<input
						value={this.state.inputWord}
						onChange={this.changeInputWord}
					></input>
					<button onClick={this.clickBtn}>提交</button>
				</div>
				<ul>
					{this.state.list.map((item, index) => {
						return (
							<li key={index} onClick={(e) => this.deleteItem(index)}>
								{item}
							</li>
						);
					})}
				</ul>
			</Fragment>
		);
	}
	changeInputWord = (e) => {
		this.setState({
			inputWord: e.target.value,
		});
	};
	clickBtn = () => {
		const { inputWord } = this.state;
		const list = [...this.state.list, inputWord];
		this.setState({
			inputWord: '',
			list: list,
		});
	};
	deleteItem = (index) => {
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list,
		});
	};
}

export default todoList;
