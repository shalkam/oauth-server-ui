import { takeLatest, all, put } from 'redux-saga/effects';
import { passwordLoginRequest, updateUserData } from 'constants/action-types';
import { push } from 'react-router-redirect';
import { message } from 'antd';

function* success({ data }) {
  message.success('Logged in successfully');
  yield put({ type: updateUserData, payload: data });
  push('/');
}

export default all([takeLatest(`${passwordLoginRequest}_SUCCESS`, success)]);
