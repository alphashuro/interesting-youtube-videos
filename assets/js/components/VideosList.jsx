import React, {PropTypes} from 'react';
import VideosListItem from '../containers/VideosListItem';
import AddVideo from '../containers/AddVideo';

import styles from './styles/VideosList.scss';

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
			<div className={`${this.props.className} ${styles.videosListContainer}`}>
				{videos.error ? <p>{videos.error.message}</p> : null}
				<div className={styles.actions}>
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
				</div>
				{
					showAddingVideo ? <AddVideo/> : null
				}
				<ul className={styles.videosList}>
					{
						videos.items.map(video => (
							<VideosListItem
								key={video.id}
								className={styles.listItem}
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
