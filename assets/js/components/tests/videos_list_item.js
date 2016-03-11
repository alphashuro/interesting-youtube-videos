const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import React from 'react';
import VideosListItem from '../VideosListItem.jsx';

describe('VideosListItem component', () => {
	const getVideo = () => ({
		id: '0',
		title: 'Video 1',
		description: 'Description',
		url: 'http://you.tube/video1'
	});
	it(`should render a link to the video's url`, () => {
		const props = getVideo();

		const item = shallow(<VideosListItem {...props}/>);
		const url = item.find(`a[href="${props.url}"]`);

		expect(url.length).to.be.equal(1);
	});
	it(`should render the video's title`, () => {
		const props = getVideo();

		const item = shallow(<VideosListItem {...props}/>);
		const title = item.find({children: props.title});

		expect(title.length).to.be.equal(1);
	});
	it(`should render the video's description`, () => {
		const props = getVideo();

		const item = shallow(<VideosListItem {...props}/>);
		const description = item.find({children: props.description});

		expect(description.length).to.be.equal(1);
	});
	it('should have a button to delete a video', () => {
		const item = shallow(<VideosListItem/>);
		const del = item.find('button.delete');

		expect(del.length).to.be.equal(1);
	});
	it('should call onDeleteVideo when delete button is clicked', () => {
		const props = {
			onDeleteVideo: spy()
		};

		const item = shallow(<VideosListItem {...props}/>);
		const del = item.find('button.delete');

		del.simulate('click');

		expect(props.onDeleteVideo.calledOnce).to.be.equal(true);
	});
});
