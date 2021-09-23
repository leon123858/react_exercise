import axios from 'axios';
import { ACTION } from './actionType';
import store from './index';
class ActionCreator {
	changeInput = (e) => {
		return { type: ACTION.CHANGE_INPUT_VALUE, value: e.target.value };
	};
	addItem = () => {
		return { type: ACTION.ADD_LIST_ITEM };
	};
	deleteItem = (index) => {
		return { type: ACTION.DELETE_ITEM, index };
	};
	setItems = (array) => {
		return { type: ACTION.SET_ITEMS, array };
	};
	initItems = () => {
		return () => {
			axios
				.get('http://127.0.0.1:1337/getFile/json.json')
				.then((res) => {
					const action = this.setItems(res);
					store.dispatch(action);
				})
				.catch(() => {
					const action = this.setItems([1, 2, 3]);
					store.dispatch(action);
				});
		};
	};
}

const actionCreator = new ActionCreator();

export default actionCreator;
