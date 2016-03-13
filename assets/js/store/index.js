import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunk // allows us return functions from action creators
	),
	// redux dev tools
	// window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
);

export default store;
