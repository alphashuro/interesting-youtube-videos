import React, {PropTypes} from 'react';

import styles from './styles/VideosListItem.scss';

const VideosListItem = ({
	id,
	url,
	title,
	description,
	onDeleteVideo,
	className}) => (
	<li className={className + " " + styles.videosListItem}>
		<p className={styles.title}>{title}</p>
		<p className={styles.description}>{description}</p>
		<a className={styles.link} href={url}>Watch</a>
		<button
			className={"delete " + styles.deleteButton}
			onClick={() => onDeleteVideo(id)}
			>
			Delete
		</button>
	</li>
);

VideosListItem.propTypes = {
	id: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	onDeleteVideo: PropTypes.func.isRequired,
	className: PropTypes.string
};

export default VideosListItem;
