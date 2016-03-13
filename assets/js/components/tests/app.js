const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';

import React from 'react';
import App from '../App.jsx';

describe('App component', () => {
	it('should have an element with the text Interesting YouTube Videos', () => {
		const app = shallow(<App/>);

		const heading = app.find({children: 'Interesting YouTube Videos'});
		expect(heading.length).to.be.equal(1);
	});
	it('should render a VideosList component', () => {
		const app = shallow(<App/>);

		const videosList = app.find('VideosList');
		expect(videosList.length).to.be.equal(1);
	});
});
