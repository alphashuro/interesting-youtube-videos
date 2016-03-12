import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunk // allows us return functions from action creators
	),
	// redux dev tools
	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
);

export default store;
