import { requestsReducer } from 'redux-saga-requests';
import { passwordLoginRequest } from 'constants/action-types';

const reducer = requestsReducer({
  actionType: passwordLoginRequest
});

export default reducer;
