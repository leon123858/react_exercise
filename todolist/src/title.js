import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
class title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Title: 'todoList',
			isShow: true,
			list: [],
		};
	}
	render() {
		return (
			<Fragment>
				{this.getTitleGroup()}
				<button onClick={this.clickBtn}>動畫</button>
			</Fragment>
		);
	}

	getTitleGroup = () => {
		const { isShow, list } = this.state;
		return (
			<TransitionGroup>
				{list.map((element, index) => {
					return (
						<CSSTransition
							in={isShow}
							timeout={1000}
							classNames='fade'
							unmountOnExit
							onEnter={(element) => {
								element.style.color = 'blue';
							}}
							appear={true}
						>
							<h1 key={index}>{element}</h1>
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		);
	};

	clickBtn = () => {
		const { Title, list } = this.state;
		this.setState(() => {
			return {
				list: [...list, Title],
			};
		});
	};
}

export default title;
