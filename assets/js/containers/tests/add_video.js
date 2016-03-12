const {describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {mapDispatchToProps} from '../AddVideo';
import types from '../../store/types';

describe('components.AddVideo', () => {
	describe('mapDispatchToProps', () => {
		it('should map an onSave function to props', () => {
			const dispatch = spy();

			const props = mapDispatchToProps(dispatch);

			expect(props.onSave).to.be.a('function');
		});
		describe('onSave', () => {
			it(`should dispatch an ADD_VIDEO action
				with the url, title and description given`, () => {
				const dispatch = spy();
				const video = {
					url: 'www',
					title: 'Video',
					description: 'A video'
				};

				const props = mapDispatchToProps(dispatch);
				props.onSave(video);

				expect(dispatch.firstCall.args[0]).to.deep.equal({
					type: types.ADD_VIDEO,
					video
				});
			});
		});
		it('should map an onCancel function to props', () => {
			const dispatch = spy();

			const props = mapDispatchToProps(dispatch);

			expect(props.onCancel).to.be.a('function');
		});
		describe('onCancel', () => {
			it('should dispatch a TOGGLE_ADDING_VIDEO action', () => {
				const dispatch = spy();

				const props = mapDispatchToProps(dispatch);
				props.onCancel();

				expect(dispatch.firstCall.args[0]).to.deep.equal({
					type: types.TOGGLE_ADDING_VIDEO
				});
			});
		});
	});
});
