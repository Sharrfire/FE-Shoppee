import React from 'react';
import PropTypes from 'prop-types';
import NewAddressForm from './NewAddressForm';
import addressApi from '../../../api/addressApi';
import { addAddress } from '../component/AddressSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
NewAddress.propTypes = {
  closeDialog: PropTypes.func,
};

function NewAddress({ closeDialog = null }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  let listAddress = JSON.parse(localStorage.getItem('address'));
  const loggedInUser = useSelector((state) => state.user.current);
  console.log('loggedInUserId', loggedInUser.id);
  const handleNewAddress1 = async (data) => {
    console.log('data at new address ', data);
    if (listAddress === null) {
      const action = addAddress({
        name: data.name,
        address: data.address,
        phone: data.phone,
        status: data.status,
        id: 1,
        user: loggedInUser.id,
      });
      dispatch(action);
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('bạn đã thêm địa chỉ mới', { variant: 'success' });
    } else if (listAddress !== null) {
      const action = addAddress({
        name: data.name,
        address: data.address,
        phone: data.phone,
        status: data.status,
        id: listAddress.pop().id + 1 || 2,
        user: loggedInUser.id,
      });
      dispatch(action);
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('bạn đã thêm địa chỉ mới', { variant: 'success' });
    }
  };

  return (
    <div>
      <NewAddressForm closeDialog={closeDialog} onSubmit1={handleNewAddress1} />
    </div>
  );
}

export default NewAddress;
