import { getBucketsRequest } from 'constants/action-types';

export default {
  getBuckets: () => dispatch =>
    dispatch({
      type: getBucketsRequest,
      request: {
        url: 'data.json',
        method: 'GET'
      }
    })
};
