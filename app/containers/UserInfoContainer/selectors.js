import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userInfoContainer state domain
 */

const selectUserInfoContainerDomain = state =>
  state.get('userInfoContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserInfoContainer
 */

const makeSelectUserInfoContainer = () =>
  createSelector(selectUserInfoContainerDomain, substate => substate.toJS());

export default makeSelectUserInfoContainer;
export { selectUserInfoContainerDomain };
