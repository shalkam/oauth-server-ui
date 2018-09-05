import { all } from 'redux-saga/effects';
import axios from 'axios';
import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import login from 'pages/login/redux/sagas';

export default function* rootSaga() {
  yield all([login]);
  yield createRequestInstance({ driver: createDriver(axios) });
  yield watchRequests();
}
