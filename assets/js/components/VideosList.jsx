import React, {PropTypes} from 'react';
import VideosListItem from '../containers/VideosListItem';
import AddVideo from '../containers/AddVideo';

const VideosList = ({videos, showAddingVideo, onAddVideo}) => (
	<div>
		<button
			className="add"
			onClick={onAddVideo}
			>
				Add a Video
		</button>
		{
			showAddingVideo ? <AddVideo /> : null
		}
		<ul>
			{
				videos.map(video => (
					<VideosListItem
						key={video.id}
						{...video}
						/>
				))
			}
		</ul>
	</div>
);

VideosList.propTypes = {
	videos: PropTypes.array.isRequired,
	onAddVideo: PropTypes.func.isRequired,
	showAddingVideo: PropTypes.bool.isRequired
};

export default VideosList;
