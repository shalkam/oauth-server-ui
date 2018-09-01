import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './redux/actions';
import Bucket from './components/bucket';
import styles from './style/home.module.css';

class Home extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    pending: PropTypes.number.isRequired,
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };

  componentDidMount() {
    const {
      actions: { getBuckets }
    } = this.props;
    getBuckets();
  }

  render() {
    const { pending, data } = this.props;
    if (pending === 1) return <Spin spinning tip="Loading buckets..." />;
    return (
      <div className={styles['page-home']}>
        {data && data.map(bucket => <Bucket bucket={bucket} />)}
      </div>
    );
  }
}

export default connect(
  ({ home: { pending, data, error } }) => ({ pending, data, error }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Home);
