import types from './types';

export function toggleAddingVideo() {
	return {
		type: types.TOGGLE_ADDING_VIDEO
	};
}

export function addVideo({url, title, description}) {
	return {
		type: types.ADD_VIDEO,
		video: {
			url,
			title,
			description
		}
	};
}

export function deleteVideo(id) {
	return {
		type: types.DELETE_VIDEO,
		videoId: id
	};
}

export default {toggleAddingVideo, addVideo, deleteVideo};
