import React, { Component, Fragment } from 'react';

class todoItem extends Component {
	// 生命週期函數之一, 當組件 update 時詢問此組件是否更新
	shouldComponentUpdate(prevProps, prevStage) {
		const content = prevProps.content;
		if (content === this.props.content) return false;
		return true; // 要更新
	}

	render() {
		const { content, index, deleteFunc } = this.props;
		return (
			<Fragment>
				<li onClick={() => deleteFunc(index)}>{content}</li>
			</Fragment>
		);
	}
}

export default todoItem;
