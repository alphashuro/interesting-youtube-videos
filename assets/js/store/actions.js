import types from './types';

export function toggleAddingVideo() {
	return {
		type: types.TOGGLE_ADDING_VIDEO
	};
}

export function addVideo({url, title, description}) {
	return dispatch => {
		dispatch(toggleAddingVideo());
		dispatch(addingVideo());
		return fetch('video/', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				url, title, description
			})
		})
		.then(() => dispatch(addingVideoSuccess()))
		.catch(err => dispatch(addingVideoError(err)));
	};
}

export function addingVideo() {
	return {
		type: types.ADD_VIDEO
	};
}

export function addingVideoSuccess() {
	return {
		type: types.ADD_VIDEO_SUCESS
	};
}

export function addingVideoError(error) {
	return {
		type: types.ADD_VIDEO_ERROR,
		error
	};
}

export function deleteVideo(id) {
	return dispatch => {
		dispatch(deletingVideo());
		const url = `video/${id}`;
		return fetch(url, {method: 'delete'})
		.then(() => dispatch(deletingVideoSuccess()))
		.catch(err => dispatch(deletingVideoError(err)));
	};
}

export function deletingVideo() {
	return {
		type: types.DELETE_VIDEO
	};
}
export function deletingVideoSuccess() {
	return {
		type: types.DELETE_VIDEO_ERROR
	};
}
export function deletingVideoError(error) {
	return {
		type: types.DELETE_VIDEO_SUCCESS,
		error
	};
}

export function fetchVideos() {
	return dispatch => {
		dispatch(getVideos());
		return fetch('video')
			.then(res => res.json()
				.then(d => dispatch(getVideosSuccess(d)))
				)
			.catch(err => dispatch(getVideosError(err)));
	};
}

export function getVideos() {
	return {
		type: types.GET_VIDEOS
	};
}

export function getVideosSuccess(videos) {
	return {
		type: types.GET_VIDEOS_SUCCESS,
		meta: videos.meta,
		items: videos.objects
	};
}

export function getVideosError(error) {
	return {
		type: types.GET_VIDEOS_ERROR,
		error
	};
}

export default {toggleAddingVideo, addVideo, deleteVideo};
