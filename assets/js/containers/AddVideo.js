import {connect} from 'react-redux';
import AddVideo from "../components/AddVideo.jsx";
import {toggleAddingVideo, addVideo} from '../store/actions';

export const mapDispatchToProps = dispatch => ({
	onSave: ({url, title, description}) => {
		dispatch(addVideo({url, title, description}));
	},
	onCancel: () => {
		dispatch(toggleAddingVideo());
	}
});

const Container = connect(
	null,
	mapDispatchToProps
)(AddVideo);

Container.displayName = 'AddVideo';

export default Container;
