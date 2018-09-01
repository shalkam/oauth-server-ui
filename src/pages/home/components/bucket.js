import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import styles from '../style/home.module.css';

const Bucket = ({ bucket: { Description, Items } }) => (
  <div className={styles.bucket}>
    <h3>{Description}</h3>
    {Items && Items.map(item => <Item item={item} />)}
  </div>
);

Bucket.propTypes = {
  bucket: PropTypes.object.isRequired
};

export default Bucket;
