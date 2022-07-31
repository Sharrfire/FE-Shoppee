import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import addressApi from '../../../api/addressApi';
import cartApi from '../../../api/cartApi';
import { setCart } from '../../product/components/shoppingCart/CartSlice';
import { setAddress } from '../../user/component/AddressSlice';
import { login } from '../userSlice';
import LoginForm from './LoginForm';
import { useSnackbar } from 'notistack';

Login.propTypes = {
  closeDialog: PropTypes.func,
  openForgot: PropTypes.func,
  openRegister: PropTypes.func,
};

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();

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
        const items = await cartApi.getAll();
        const { cartItems } = items;
        dispath(setCart(cartItems));
        const items1 = await addressApi.getAll();
        console.log('items', items1);
        const { addressList } = items1;
        console.log('addressList', addressList);
        dispath(setAddress(addressList));
        const { closeDialog } = props;
        if (closeDialog) {
          closeDialog();
        }

        enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
      } catch (error) {
        enqueueSnackbar('Sai tên đăng nhập hoặc mật khẩu', { variant: 'error' });
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
