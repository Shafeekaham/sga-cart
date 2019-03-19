import { fromJS } from 'immutable';
import userInfoContainerReducer from '../reducer';

describe('userInfoContainerReducer', () => {
  it('returns the initial state', () => {
    expect(userInfoContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
