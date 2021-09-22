import { ACTION } from './actionType';

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
}

const actionCreator = new ActionCreator();

export default actionCreator;
