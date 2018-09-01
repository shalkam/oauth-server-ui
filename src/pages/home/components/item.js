import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styles from '../style/home.module.css';

const Item = ({ item: { Description, ItemTitle } }) => (
  <Card title={ItemTitle} className={styles.item}>
    <p>{Description}</p>
  </Card>
);

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;
