// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import * as types from './constants';
import { getUserInfoSuccessAction, getUserInfoFailureAction } from './actions';

function* getUserInfoSaga(action) {
  const { userId } = action;
  const apiUrl = `api/user/${userId}`;
  try {
    const results = yield call(fetch, apiUrl);
    const resolved = yield results.json();
    if (resolved) {
      yield put(getUserInfoSuccessAction(resolved));
    }
  } catch (err) {
    console.error('error', err);
    yield put(getUserInfoFailureAction(err));
  }
}
// Individual exports for testing
export default function* manageCartSaga() {
  yield takeLatest(types.GET_USERINFO, getUserInfoSaga);
  // See example in containers/HomePage/saga.js
}
