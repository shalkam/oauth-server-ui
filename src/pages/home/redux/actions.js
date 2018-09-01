import { getBucketsRequest } from 'constants/action-types';

export default {
  getBuckets: () => dispatch =>
    dispatch({
      type: getBucketsRequest,
      request: {
        url: 'buckets',
        method: 'GET'
      }
    })
};
