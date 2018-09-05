import loadable from 'helpers/loadable';

export default {
  home: loadable(import('pages/home')),
  login: loadable(import('pages/login')),
  'my-apps': loadable(import('pages/my-apps'))
};
