import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { withHandlers } from 'recompose';
import { push } from 'react-router-redirect';

const Sidebar = ({ handleMenu }) => (
  <Layout.Sider breakpoint="lg" collapsedWidth="0">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={handleMenu}
    >
      <Menu.Item key="1">
        <Icon type="user" />
        <span className="nav-text">home</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span className="nav-text">My apps</span>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
);

Sidebar.propTypes = {
  handleMenu: PropTypes.func.isRequired
};

export default withHandlers({
  handleMenu: () => ({ item, key, keyPath }) => {
    console.log({ item, key, keyPath });
    switch (key) {
      case '1':
        push('/');
        break;
      case '2':
        push('/my-apps');
        break;
      default:
        break;
    }
  }
})(Sidebar);
