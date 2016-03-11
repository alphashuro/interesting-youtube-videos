const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import React from 'react';
import VideosList from './VideosList.jsx';

describe('VideosList component', () => {
	it('should render a list of videos', () => {
		const props = {
			videos: [
				{},
				{},
				{}
			]
		};

		const list = shallow(<VideosList {...props}/>);
		const items = list.find('VideosListItem');

		expect(items.length).to.be.equal(3);
	});
	it('should have a button to add a video', () => {
		const list = shallow(<VideosList/>);
		const button = list.find('button.add');

		expect(button.length).to.be.equal(1);
	});
	it('should call onAddVideo when the add button is clicked', () => {
		const props = {
			onAddVideo: spy()
		};

		const list = shallow(<VideosList {...props}/>);
		const button = list.find('button.add');

		button.simulate('click');

		expect(props.onAddVideo.calledOnce).to.be.equal(true);
	});
});
