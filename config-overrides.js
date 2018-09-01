const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
  // eslint-disable-next-line
  config = rewireCssModules(config, env);
  return config;
};
