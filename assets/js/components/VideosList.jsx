import React, {PropTypes} from 'react';
import VideosListItem from '../containers/VideosListItem';
import AddVideo from '../containers/AddVideo';

const VideosList = React.createClass({
	propTypes: {
		videos: PropTypes.object.isRequired,
		onAddVideo: PropTypes.func.isRequired,
		showAddingVideo: PropTypes.bool.isRequired,
		refresh: PropTypes.func.isRequired
	},
	componentDidMount() {
		this.props.refresh();
	},
	render() {
		const {videos, showAddingVideo, onAddVideo, refresh} = this.props;
		return (
			<div>
				{videos.error ? <p>{videos.error.message}</p> : null}
				<button
					onClick={() => refresh()}
					>
					Refresh
				</button>
				<button
					className="add"
					onClick={onAddVideo}
					>
						Add a Video
				</button>
				{
					showAddingVideo ? <AddVideo/> : null
				}
				<ul>
					{
						videos.items.map(video => (
							<VideosListItem
								key={video.id}
								{...video}
								/>
						))
					}
				</ul>
			</div>
		);
	}
});

export default VideosList;
