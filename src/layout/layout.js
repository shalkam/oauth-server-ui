import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntdLayout } from 'antd';
import './styles/index.css';

const { Header, Content, Footer } = AntdLayout;

const Layout = ({ children }) => (
  <AntdLayout className="layout">
    <Header className="layout-header">React Rest Starter</Header>
    <Content>
      <div className="layout-content">{children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>React Rest Starter ©2018</Footer>
  </AntdLayout>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layout;
