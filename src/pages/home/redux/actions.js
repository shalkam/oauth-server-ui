import { getBucketsRequest } from 'constants/action-types';

export default {
  getBuckets: () => dispatch =>
    dispatch({
      type: getBucketsRequest,
      request: {
        url:
          'https://raw.githubusercontent.com/shalkam/cra-rest-starter/gh-pages/static/data.json',
        method: 'GET'
      }
    })
};
