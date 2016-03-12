const {describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {mapStateToProps, mapDispatchToProps} from '../VideosList.js';
import types from '../../store/types';

describe('containers.VideosList', () => {
	describe('mapStateToProps', () => {
		it('should map state.videos to props.videos', () => {
			const state = {
				videos: [{id: '1'}]
			};

			const props = mapStateToProps(state);

			expect(props.videos).to.deep.equal(state.videos);
		});
		it('should map state.addingVideo to props.showAddingVideo', () => {
			const state = {
				addingVideo: true
			};

			const props = mapStateToProps(state);

			expect(props.showAddingVideo).to.be.equal(true);
		});
	});
	describe('mapDispatchToProps', () => {
		it('should have an onAddVideo function', () => {
			const dispatch = spy();

			const props = mapDispatchToProps(dispatch);

			expect(props.onAddVideo).to.be.a('function');
		});
		describe('onAddVideo', () => {
			it('should dispatch a types.TOGGLE_ADDING_VIDEO action', () => {
				const dispatch = spy();

				const props = mapDispatchToProps(dispatch);
				props.onAddVideo();
				expect(dispatch.args[0][0]).to.deep.equal({
					type: types.TOGGLE_ADDING_VIDEO
				});
			});
		});
	});
});
