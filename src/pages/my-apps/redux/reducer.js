import { requestsReducer } from 'redux-saga-requests';
import { getBucketsRequest } from 'constants/action-types';

const reducer = requestsReducer({
  actionType: getBucketsRequest
});

export default reducer;
