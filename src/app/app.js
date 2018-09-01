import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Layout from '../layout';
import routes from './routes';

export class App extends React.Component {
  static propTypes = {
    token: PropTypes.string
  };

  static defaultProps = {
    token: null
  };

  componentWillMount() {
    const { token } = this.props;
    axios.defaults.baseURL = process.env.REACT_APP_API;
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    if (!token) delete axios.defaults.headers.common.Authorization;
  }

  componentWillReceiveProps({ token }) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    if (!token) delete axios.defaults.headers.common.Authorization;
  }

  render() {
    return (
      <Layout>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={routes.home} />
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
