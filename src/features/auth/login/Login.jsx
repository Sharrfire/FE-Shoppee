import React from 'react';
import PropTypes from 'prop-types';
import { login } from '../userSlice';
import LoginForm from './LoginForm';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

Login.propTypes = {
  closeDialog: PropTypes.func,
  openForgot: PropTypes.func,
  openRegister: PropTypes.func,
};

function Login(props) {
  const oncloseLogin = (value) => {
    const open = props.openForgot;
    open();
  };
  const openFormRegister = () => {
    const open1 = props.openRegister;
    open1();
  };
  const dispath = useDispatch();
  const handleSubmit = async (values) => {
    (async () => {
      try {
        const action = login(values);
        console.log('action', action);
        const resultAction = await dispath(action);
        console.log('resultAction', resultAction);
        const user = unwrapResult(resultAction);
        console.log('user', user);

        //gọi api
        // const { items } = await cartApi.getAll();
        // dispath(setCart(items));
        const { closeDialog } = props;
        if (closeDialog) {
          closeDialog();
        }

        // enqueueSnackbar('login successfully', { variant: 'success' });
      } catch (error) {
        // enqueueSnackbar(error.message, { variant: 'error' });
      }
    })();
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} onClose={oncloseLogin} opendangky={openFormRegister} />{' '}
    </div>
  );
}

export default Login;
