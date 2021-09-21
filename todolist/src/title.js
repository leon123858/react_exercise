import React, { Component, Fragment } from 'react';
import './style.css';
class title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Title: 'title',
			isShow: true,
		};
	}
	render() {
		const { Title, isShow } = this.state;
		return (
			<Fragment>
				<h1 className={isShow ? 'show' : 'hide'}>{Title}</h1>
				<button onClick={this.clickBtn}>動畫</button>
			</Fragment>
		);
	}

	clickBtn = () => {
		this.setState((prevStage) => {
			return {
				isShow: prevStage.isShow ? false : true,
			};
		});
	};
}

export default title;
