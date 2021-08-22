import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
import reducer from './store/reducers/root';
import rootSaga from './store/sagas/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(
  // applyMiddleware(sagaMiddleware, logger),
  applyMiddleware(sagaMiddleware),
  )
  );

sagaMiddleware.run(rootSaga);
