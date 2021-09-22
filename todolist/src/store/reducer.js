import { ACTION } from './actionType';
const defaultStage = {
	inputValue: '',
	list: [],
};
const reducer = (state = defaultStage, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case ACTION.CHANGE_INPUT_VALUE:
			newState.inputValue = action.value;
			return newState;
		case ACTION.ADD_LIST_ITEM:
			newState.list.push(newState.inputValue);
			newState.inputValue = '';
			return newState;
		case ACTION.DELETE_ITEM:
			newState.list.splice(action.index, 1);
			return newState;
		case ACTION.SET_ITEMS:
			newState.list = action.array;
			return newState;
		default:
			return state;
	}
};
export default reducer;
