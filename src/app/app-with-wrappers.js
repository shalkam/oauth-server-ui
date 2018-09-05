import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import reducers from './reducers';
import AppContainer from './app';
import rootSaga from './sagas';

const reducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();
const enhanceCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware),
  // If you are using the devToolsExtension, you can add it here also
  // eslint-disable-next-line
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
)(createStore);
const store = enhanceCreateStore(reducer);
const persistor = persistStore(store);
const AppWithWrappers = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>
);
sagaMiddleware.run(rootSaga);

export default AppWithWrappers;
