import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();
const store = createStore(
	rootReducer,
	applyMiddleware(
		thunk, // allows us return functions from action creators
		logger
	),
	// redux dev tools
	// window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
);

export default store;
