import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import classNames from 'classnames';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import QuantityField from '~/components/form-control/QuantityField';

AddToCartForm.propTypes = {
  colors: PropTypes.array,
  onSubmit1: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  btn1: {
    '&.MuiButton-root': {
      padding: '10px',
      borderRadius: '2px',
      marginRight: '15px',
      fontSize: '14px',
      backgroundColor: '#ffeee8',
      color: '#f06043',
      border: '1px solid #f06043',
      boxShawdow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
      minWidth: '156px',
    },
  },

  icon: {
    marginLeft: '5px',
    marginRight: '10px',
    height: '15px',
    width: '15px',
  },

  btn2: {
    '&.MuiButton-root': {
      padding: '10px',
      borderRadius: '2px',
      marginRight: '15px',
      fontSize: '14px',
      backgroundColor: '#f06043',
      color: '#ffeee8',
      border: '1px solid #f06043',
      boxShawdow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
      minWidth: '210px',
    },
  },
}));
function AddToCartForm({ colors = [], onSubmit = null }) {
  const [active, setActive] = useState(1);
  const { enqueueSnackbar } = useSnackbar();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  // console.log('isLoggedIn', isLoggedIn);
  const classes = useStyle();
  const schema = yup.object().shape({
    quantity: yup.number().required('Làm ơn nhập').min(1, 'Tối thiểu là 1 sản phẩm').typeError('Làm ơn nhập số'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (isLoggedIn === false) {
      enqueueSnackbar('vui lòng đăng nhập', { variant: 'error' });

      return;
    } else {
      const data = {
        quantity: values.quantity,
        idc: active,
      };
      console.log(data);
      // if (data.idc === 0) {
      //   return;
      // } else {
      if (onSubmit) {
        await onSubmit(data);
      }
    }
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='quantity__form'>
        <div className='product__type'>
          <label className='product__type-label'>Màu sắc</label>
          <ul className='product__type-list'>
            {colors.map((color) => (
              <li
                key={color.id}
                name='type'
                className={classNames('product__type-item', { 'product__type-active': color.id === active })}
                onClick={() => setActive(color.id)}
              >
                {color.colorName || ''}
              </li>
            ))}
          </ul>
        </div>
        <div className='quantity__form-control'>
          <label htmlFor='quantity' className='quantity__form-label'>
            Số lượng
          </label>
          <QuantityField name='quantity' id='quantity' form={form} />
          <span className='quantity__form-product'>500 sản phẩm có sẵn</span>
        </div>
        <div className='addToCart__button'>
          <Button className={classes.btn1} type='submit'>
            <AddShoppingCartIcon className={classes.icon} onSubmit={handleSubmit} />
            Thêm vào giỏ hàng
          </Button>
          {/* <Button className={classes.btn2} type="submit">Mua ngay</Button> */}
        </div>
      </form>
    </div>
  );
}

export default AddToCartForm;
