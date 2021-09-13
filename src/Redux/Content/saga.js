import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import { axiosGet } from '../axiosHelper';

export function* getContentRequest({ queryParams }) {
  try {
    const { data } = yield axiosGet(`posts?${queryParams}`);
    yield put(actions.getContentSuccess(data));
  } catch (error) {
    yield put(actions.getContentFailure(error.message, error.data || {}));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_CONTENT_REQUEST, getContentRequest)]);
}
