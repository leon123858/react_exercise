import React from 'react';
import ReactDOM from 'react-dom';
//import TodoList from './todoList_antd';
//import Title from './title';
//import 'antd/dist/antd.css';

// react_redux
import TodoList from './todoList_react_redux';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
	return (
		<Provider store={store}>
			<TodoList />
		</Provider>
	);
};
ReactDOM.render(<App />, document.getElementById('root'));
// react_redux end

//ReactDOM.render(<Title />, document.getElementById('root'));
//ReactDOM.render(<TodoList />, document.getElementById('root'));
