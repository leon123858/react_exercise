import React, { Component, Fragment } from 'react';

class todoItem extends Component {
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
