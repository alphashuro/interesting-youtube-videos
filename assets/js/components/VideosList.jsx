import React, {PropTypes} from 'react';
import VideosListItem from '../containers/VideosListItem';

const VideosList = ({videos, onAddVideo}) => (
	<div>
		<button
			className="add"
			onClick={onAddVideo}
			>
				Add a Video
		</button>
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
	onAddVideo: PropTypes.func.isRequired
};

export default VideosList;
