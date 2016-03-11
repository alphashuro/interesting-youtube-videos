import {connect} from 'react-redux';
import VideosListItem from '../components/VideosListItem.jsx';
import {deleteVideo} from '../store/actions';

export const mapDispatchToProps = dispatch => ({
	onDeleteVideo: (id) => {
		dispatch(deleteVideo(id));
	}
});

const Container = connect(
	null,
	mapDispatchToProps
)(VideosListItem);

Container.displayName = 'VideosListItem';

export default Container;
