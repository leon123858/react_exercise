import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Hello extends Component {
	render() {
		return (
			// 有子元素的 View
			<View
				style={{
					flexDirection: 'row',
					height: 100,
					padding: 20,
				}}
			>
				{/* 就是一塊藍色的 View */}
				<View style={{ backgroundColor: 'blue', flex: 0.3 }} />

				{/* 就是一塊藍色的 View */}
				<View style={{ backgroundColor: 'red', flex: 0.5 }} />

				{/* 啊，混進一個 Text */}
				<Text>Hello World!</Text>
			</View>
		);
	}
}

export default Hello;
