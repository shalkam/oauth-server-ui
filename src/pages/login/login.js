import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Card } from 'antd';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import actions from './redux/actions';
import styles from './style/login.module.css';

const FormItem = Form.Item;

class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    pending: PropTypes.number.isRequired
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
      actions: { login }
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        login(values);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      pending
    } = this.props;
    return (
      <Card className={styles.login}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <Button
            block
            loading={pending === 1}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form>
      </Card>
    );
  }
}

export default compose(
  connect(
    ({ login: { pending } }) => ({ pending }),
    dispatch => ({
      actions: bindActionCreators(actions, dispatch)
    })
  ),
  Form.create()
)(Login);
