import { takeLatest, all } from 'redux-saga/effects';
import { passwordLoginRequest } from 'constants/action-types';
import { message } from 'antd';

function success(data) {
  console.log(data);
  message.success('Token saved');
}

export default all([takeLatest(`${passwordLoginRequest}_SUCCESS`, success)]);
