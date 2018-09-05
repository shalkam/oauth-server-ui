import { takeLatest, all, put } from 'redux-saga/effects';
import { passwordLoginRequest, updateUserData } from 'constants/action-types';
import { message } from 'antd';

function* success({ data }) {
  message.success('Token saved');
  yield put({ type: updateUserData, payload: data });
}

export default all([takeLatest(`${passwordLoginRequest}_SUCCESS`, success)]);
