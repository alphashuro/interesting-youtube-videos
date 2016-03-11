const {describe, it} = global;
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import React from 'react';
import AddVideo from '../AddVideo.jsx';

describe('AddVideo component', () => {
	it('should have an input for the url', () => {
		const component = shallow(<AddVideo/>);

		const urlInput = component.find('input[name="url"]')
		expect(urlInput.length).to.be.equal(1);
	});
	describe('the url input', () => {
		it('should be required', () => {
			const component = shallow(<AddVideo/>);

			const urlInput = component.find('input[name="url" required');
			expect(urlInput.length).to.be.equal(1);
		});
	});
	it('should have an input for the title', () => {
		const component = shallow(<AddVideo/>);

		const titleInput = component.find('input[name="title"]')
		expect(titleInput.length).to.be.equal(1);
	});
	describe('the title input', () => {
		it('should be optional', () => {
			const component = shallow(<AddVideo/>);

			const titleInput = component.find('input[name="title" required]');
			expect(titleInput.length).to.be.equal(0);
		});
	});
	it('should have an input for the description', () => {
		const component = shallow(<AddVideo/>);

		const descriptionInput = component.find('input[name="description"]')
		expect(descriptionInput.length).to.be.equal(1);
	});
	describe('the description input', () => {
		it('should be optional', () => {
			const component = shallow(<AddVideo/>);

			const descriptionInput = component.find('input[name="description" required]');
			expect(descriptionInput.length).to.be.equal(0);
		});
	});
	it('should have a save button', () => {
		const component = shallow(<AddVideo/>);

		const saveBtn = component.find('button.save');
		expect(saveBtn.length).to.be.equal(1);
	});
	describe('the save button', () => {
		it(`should call onSave
				when save button is clicked`, () => {
			const props = {
				onSave: spy()
			};

			const component = mount(<AddVideo {...props}/>);

			const saveBtn = component.find('button.save');
			saveBtn.simulate('click');

			expect(props.onSave.calledOnce).to.be.equal(true);
		});
		it(`should call onSave
				with title, description and url
				when save button is clicked`, () => {
			const props = {
				onSave: spy()
			};

			const component = mount(<AddVideo {...props}/>);

			const urlInput = component.find('input[name="url"]');
			const titleInput = component.find('input[name="title"]');
			const descriptionInput = component.find('input[name="description"]');

			urlInput.value = 'http://new_url';
			titleInput.value = 'new_title';
			descriptionInput.value = 'new_description';

			const saveBtn = component.find('button.save');

			saveBtn.simulate('click');
			const args = props.onSave.args[0];

			expect(args[0]).to.deep.equal({
				url: 'http://new_url',
				title: 'new_title',
				description: 'new_description'
			});
		});
		it(`should not call onSave
				if url is blank`, () => {
			const props = {
				onSave: spy()
			};

			const component = mount(<AddVideo {...props}/>);

			const urlInput = component.find('input[name="url"]');
			const titleInput = component.find('input[name="title"]');
			const descriptionInput = component.find('input[name="description"]');

			urlInput.value = '';
			titleInput.value = 'new_title';
			descriptionInput.value = 'new_description';

			const saveBtn = component.find('button.save');

			saveBtn.simulate('click');
			expect(props.onSave).to.be.equal(false);
		});
	});
	it('should have a cancel button', () => {
		const component = shallow(<AddVideo/>);

		const cancelBtn = component.find('button.cancel');
		expect(cancelBtn.length).to.be.equal(1);
	});
	it('should call onCancel when cancel button is clicked', () => {
		const props = {
			onCancel: spy()
		};

		const component = mount(<AddVideo {...props}/>);

		const cancelBtn = component.find('button.cancel');
		cancelBtn.simulate('click');

		expect(props.onCancel.calledOnce).to.be.equal(true);
	});
});
