import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import home from 'pages/home/redux/reducer';
import login from 'pages/login/redux/reducer';
import app from './redux/reducer';

export default {
  home,
  login,
  app: persistReducer(
    {
      key: 'app',
      storage
      //   blacklist: []
    },
    app
  )
};
