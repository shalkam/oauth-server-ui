import { updateUserData, clearUserData } from 'constants/action-types';

const appReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case updateUserData:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case clearUserData:
      return { user: {} };
    default:
      return state;
  }
};

export default appReducer;
