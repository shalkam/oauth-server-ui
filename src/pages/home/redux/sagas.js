import { takeLatest, all } from 'redux-saga/effects';
import { updateSignupData } from 'constants/action-types';
import { push } from 'react-router-redirect';

function update({ payload: { src, values } }) {
  if (src === 'account' && values.username) {
    push('/signup/verify');
  } else if (src === 'account' && !values.username && values.mobile) {
    push('/signup/facility');
  }
}

export default all([takeLatest(updateSignupData, update)]);
