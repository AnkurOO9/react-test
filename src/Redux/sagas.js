/** Import and export saga from here */
import { all } from 'redux-saga/effects';
import contentSaga from './Content/saga';

export default function* rootSaga(getState) {
  yield all([
    contentSaga()
  ]);
}
