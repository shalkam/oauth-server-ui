import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirector } from 'react-router-redirect';
import axios from 'axios';
import Layout from '../layout';
import routes from './routes';

export class App extends React.Component {
  static propTypes = {
    accessToken: PropTypes.string
  };

  static defaultProps = {
    accessToken: null
  };

  componentWillMount() {
    const { accessToken } = this.props;
    axios.defaults.baseURL = process.env.REACT_APP_API;
    if (accessToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    if (!accessToken) delete axios.defaults.headers.common.Authorization;
  }

  componentWillReceiveProps({ accessToken }) {
    if (accessToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    if (!accessToken) delete axios.defaults.headers.common.Authorization;
  }

  render() {
    return (
      <Layout>
        <BrowserRouter>
          <React.Fragment>
            <Redirector />
            <Switch>
              <Route exact path="/" component={routes.home} />
              <Route path="/login" component={routes.login} />
              <Route path="/my-apps" component={routes['my-apps']} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default connect(({ app: { user: { accessToken } } }) => ({
  accessToken
}))(App);
