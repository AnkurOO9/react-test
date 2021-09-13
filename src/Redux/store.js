import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
export { store };