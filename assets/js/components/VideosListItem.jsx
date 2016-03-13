import React, {PropTypes} from 'react';

const VideosListItem = ({
	id,
	url,
	title,
	description,
	onDeleteVideo}) => (
	<li>
		<a href={url}>
			<p>{title}</p>
			<p>{description}</p>
		</a>
		<button
			className="delete"
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
	onDeleteVideo: PropTypes.func.isRequired
};

export default VideosListItem;
