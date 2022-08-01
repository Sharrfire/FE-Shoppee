import React from 'react';
import PropTypes from 'prop-types';
import NewAddressForm from './NewAddressForm';
import addressApi from '~/api/addressApi';
import { useSnackbar } from 'notistack';
NewAddress.propTypes = {
  closeDialog: PropTypes.func,
  onSubmitNew: PropTypes.func,
};

function NewAddress({ closeDialog = null, onSubmitNew = null }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleNewAddress = async (data) => {
    try {
      const res = await addressApi.add(data);
      onSubmitNew(res);
      console.log('data at new address', data);

      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar('Không thể tạo địa chỉ', { variant: 'error' });
    }
  };

  return (
    <div>
      <NewAddressForm onSubmitNew={handleNewAddress} closeDialog={closeDialog} />
    </div>
  );
}

export default NewAddress;
