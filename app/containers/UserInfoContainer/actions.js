/*
 *
 * UserInfoContainer actions
 *
 */

import { DEFAULT_ACTION } from './constants';
import { makeActionCreator } from '../utils/history';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = makeActionCreator(SET_CURRENT_USER, 'user');
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
