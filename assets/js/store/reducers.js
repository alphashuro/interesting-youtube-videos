import {combineReducers} from 'redux';
import types from './types';

const initialVideosState = {
	isFetching: false,
	isAdding: false,
	isDeleting: false,
	meta: {},
	items: []
};

export function videos(state = initialVideosState, action) {
	switch (action.type) {
		case (types.GET_VIDEOS):
			return {
				...state,
				error: null,
				isFetching: true
			};
		case (types.GET_VIDEOS_SUCCESS):
			return {
				...state,
				error: null,
				isFetching: false,
				items: action.items,
				meta: action.meta
			};
		case (types.GET_VIDEOS_ERROR):
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		case (types.ADD_VIDEO):
			return {
				...state,
				error: null,
				isAdding: true
			};
		case (types.ADD_VIDEO_SUCCESS):
			return {
				...state,
				error: null,
				isAdding: false
			};
		case (types.ADD_VIDEO_ERROR):
			return {
				...state,
				isAdding: false,
				error: action.error
			};
		case (types.DELETE_VIDEO):
			return {
				...state,
				isDeleting: true,
				error: null
			};
		case (types.DELETE_VIDEO_SUCCESS):
			return {
				...state,
				isDeleting: false,
				error: null
			};
		case (types.DELETE_VIDEO_ERROR):
			return {
				...state,
				isDeleting: false,
				error: null
			};
		default:
			return state;
	}
}

export function addingVideo(state = false, action) {
	switch (action.type) {
		case (types.TOGGLE_ADDING_VIDEO):
			return !state;
		default:
			return state;
	}
}

export default combineReducers({
	videos,
	addingVideo
});
