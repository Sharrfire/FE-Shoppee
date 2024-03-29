import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { register } from '../userSlice';
import RegisterForm from './RegisterForm';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register({ closeDialog }) {
  const dispath = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitRegister = async (values) => {
    try {
      const action = register(values);
      // console.log('action', action);
      const resultAction = await dispath(action);
      // console.log('resultAction', resultAction);
      const user = unwrapResult(resultAction);
      console.log('user', user);
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar('Tài khoản đã tồn tại', { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmitRegister={handleSubmitRegister} />
    </div>
  );
}

export default Register;
