import { Fragment } from 'react';
import { Input, List } from 'antd';
const Search = Input.Search;
// function 即為 stateless component
const todoListUI = (props) => {
	const { inputValue, list, changeFunc, addFunc, deleteFunc } = props;
	return (
		<Fragment>
			<Search
				placeholder='input text'
				allowClear
				enterButton='添加'
				size='large'
				style={{ marginLeft: 10, marginTop: 10, width: '30%' }}
				value={inputValue}
				onChange={(e) => changeFunc(e)}
				onSearch={addFunc}
			/>
			<List
				size='large'
				bordered
				dataSource={list}
				renderItem={(item, index) => (
					<List.Item onClick={() => deleteFunc(index)}>{item}</List.Item>
				)}
				style={{ marginLeft: 10, marginTop: 10, width: '30%' }}
			/>
		</Fragment>
	);
};

export default todoListUI;
