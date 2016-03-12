import {combineReducers} from 'redux';
import types from './types';

export function videos(state = [], action) {
	switch (action.type) {
		case (types.ADD_VIDEO):
			var maxId = state.reduce((prev, current) => (prev.id > current.id) ? prev : current, 0);
			return [
				...state,
				{
					id: maxId + 1,
					...action.video
				}
			];
		case (types.DELETE_VIDEO):
			return state.filter(video => video.id !== action.videoId);
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
