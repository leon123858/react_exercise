import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // 讓 store 可以接受 function 類型
import reducer from './reducer';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
// prod mode
// const store = createStore(reducer,applyMiddleware([thunk]));
export default store;
