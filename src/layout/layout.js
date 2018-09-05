import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntdLayout } from 'antd';
import Sidebar from './sidebar';
import './styles/index.css';

const { Header, Content, Footer } = AntdLayout;

const Layout = ({ children }) => (
  <AntdLayout>
    <Sidebar />
    <AntdLayout className="layout">
      <Header className="layout-header">OAuth Server UI</Header>
      <Content>
        <div className="layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>OAuth Server UI ©2018</Footer>
    </AntdLayout>
  </AntdLayout>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layout;
