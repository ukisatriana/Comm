import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp, showLoading, showAuthMessage, hideAuthMessage } from 'store/slices/authSlice';
import { Button, Form, Input, Alert } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from "framer-motion";


const RegisterForm = (props) => {
  const navigate = useNavigate();
  const { 
    showLoading,
    signUp,
    token, 
    loading,
    redirect,
    showMessage,
    message,
    hideAuthMessage,
    allowRedirect = true
  } = props;

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirm: ''
  });

  useEffect(() => {
    if (token !== null && allowRedirect) {
      navigate(redirect);
    }
    if (showMessage) {
      const timer = setTimeout(() => hideAuthMessage(), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [token, allowRedirect, navigate, redirect, showMessage, hideAuthMessage]);

  const handleChangeText = (e) => {
    const { id, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  const handleRegisterSubmit = () => {
//     console.log('email', formState.email);
//     console.log('password', formState.password);
//     console.log('confirm', formState.confirm);
//   }

if (formState.password !== formState.confirm) {
	alert("Passwords do not match!");
	return;
  }
  showLoading();
  signUp({ email: formState.email, password: formState.password });
}

  return (
    <Form>
      <Form.Item>
        <Input
          id="email"
          prefix={<MailOutlined />}
          placeholder="Email"
          value={formState.email}
          onChange={handleChangeText}
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          id="password"
          prefix={<LockOutlined />}
          placeholder="Password"
          value={formState.password}
          onChange={handleChangeText}
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          id="confirm"
          prefix={<LockOutlined />}
          placeholder="Confirm Password"
          value={formState.confirm}
          onChange={handleChangeText}
        />
      </Form.Item>
      <Button type="primary" onClick={handleRegisterSubmit} loading={loading}>
        Register
      </Button>
      {showMessage && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Alert message={message} type="error" showIcon />
        </motion.div>
      )}
    </Form>
  );
}

const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect };
}

const mapDispatchToProps = {
  signUp,
  showAuthMessage,
  showLoading,
  hideAuthMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);