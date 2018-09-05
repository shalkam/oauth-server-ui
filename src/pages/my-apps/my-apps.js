import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './redux/actions';
import styles from './style/home.module.css';

class Home extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    pending: PropTypes.number.isRequired,
    data: PropTypes.object
  };

  static defaultProps = {
    data: null
  };

  componentDidMount() {
    const {
      actions: { getBuckets }
    } = this.props;
    getBuckets();
  }

  render() {
    const { pending, data } = this.props;
    if (pending === 1) return <Spin spinning tip="Loading data..." />;
    return <div className={styles['page-home']}>{data && data.message}</div>;
  }
}

export default connect(
  ({ home: { pending, data, error } }) => ({ pending, data, error }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Home);
