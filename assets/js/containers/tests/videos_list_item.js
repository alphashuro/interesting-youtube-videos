const {describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {mapDispatchToProps} from '../VideosListItem';
import types from '../../store/types';

describe('containers.videos_list_item', () => {
	describe('mapDispatchToProps', () => {
		it('should add an onDeleteVideo function to props', () => {
			const dispatch = spy();

			const props = mapDispatchToProps(dispatch);

			expect(props.onDeleteVideo).to.be.a('function');
		});
		describe('onDeleteVideo', () => {
			it('should dispatch a types.DELETE_VIDEO action with the given id', () => {
				const dispatch = spy();

				const props = mapDispatchToProps(dispatch);
				props.onDeleteVideo('id');

				expect(dispatch.args[0][0]).to.deep.equal({
					type: types.DELETE_VIDEO,
					videoId: 'id'
				});
			});
		});
	});
});
