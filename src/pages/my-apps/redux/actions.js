import { getBucketsRequest } from 'constants/action-types';

export default {
  getBuckets: () => dispatch =>
    dispatch({
      type: getBucketsRequest,
      request: {
        url: '/secure',
        method: 'GET'
      }
    })
};
