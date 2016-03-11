import React, {PropTypes} from 'react';

const AddVideo = React.createClass({
	propTypes: {
		onSave: PropTypes.func.isRequired,
		onCancel: PropTypes.func.isRequired
	},
	render() {
		const {onSave, onCancel} = this.props;
		return (
			<div>
				<h3>Add a Video</h3>
				<label htmlFor="url">Url</label>
				<input
					type="text"
					name="url"
					required
					placeholder="Url"
					ref={node => {
						this.url = node;
					}}
					/>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					placeholder="Title"
					ref={node => {
						this.title = node;
					}}
					/>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					name="description"
					placeholder="Description"
					ref={node => {
						this.description = node;
					}}
					/>
				<button
					className="save"
					onClick={() => {
						if (!this.url.value) {
							return;
						}
						const video = {
							url: this.url.value,
							title: this.title.value,
							description: this.description.value
						};
						onSave(video);
					}}
					>
					Save
				</button>
				<button
					className="cancel"
					onClick={onCancel}
					>
					Cancel
				</button>
			</div>
		);
	}
});

export default AddVideo;
