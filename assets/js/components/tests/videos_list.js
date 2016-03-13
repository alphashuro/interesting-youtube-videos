const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import React from 'react';
import VideosList from '../VideosList.jsx';

describe('VideosList component', () => {
	const getProps = () => ({
		videos: [],
		onAddVideo: spy(),
		showAddingVideo: false
	});
	it('should render a list of videos', () => {
		const props = getProps();
		props.videos = [
			{id: 1},
			{id: 2},
			{id: 3}
		];

		const list = shallow(<VideosList {...props}/>);
		const items = list.find('VideosListItem');

		expect(items.length).to.be.equal(3);
	});
	it('should have a button to add a video', () => {
		const props = getProps();
		const list = shallow(<VideosList {...props}/>);
		const button = list.find('button.add');

		expect(button.length).to.be.equal(1);
	});
	it('should call onAddVideo when the add button is clicked', () => {
		const props = getProps();

		const list = shallow(<VideosList {...props}/>);
		const button = list.find('button.add');

		button.simulate('click');

		expect(props.onAddVideo.calledOnce).to.be.equal(true);
	});
});
