import {connect} from 'react-redux';
import VideosList from '../components/VideosList.jsx';
import {toggleAddingVideo} from '../store/actions';

export const mapStateToProps = state => ({
	videos: state.videos,
	showAddingVideo: state.addingVideo
});

export const mapDispatchToProps = (dispatch) => ({
	onAddVideo: () => {
		dispatch(toggleAddingVideo());
	}
});

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(VideosList);

Container.displayName = 'VideosList';

export default Container;
