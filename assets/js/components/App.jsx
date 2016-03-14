import React from 'react';
import VideosList from '../containers/VideosList';

const styles = require('./styles/App.scss');

const App = () => (
	<div className={styles.app}>
		<h1 className={styles.title}>Interesting YouTube Videos</h1>
		<VideosList className={styles.videosList}/>
	</div>
);

export default App;
