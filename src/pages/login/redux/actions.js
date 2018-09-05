import qs from 'qs';
import { passwordLoginRequest } from 'constants/action-types';

export default {
  login: data => dispatch =>
    dispatch({
      type: passwordLoginRequest,
      request: {
        url: '/oauth/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0'
        },
        data: qs.stringify({
          ...data,
          grant_type: 'password',
          scope: 'profile'
        })
      }
    })
};
