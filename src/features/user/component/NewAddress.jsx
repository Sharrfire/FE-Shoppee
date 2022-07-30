import React from 'react';
import PropTypes from 'prop-types';
import NewAddressForm from './NewAddressForm';
import addressApi from '~/api/addressApi';
NewAddress.propTypes = {
  closeDialog: PropTypes.func,
  onSubmitNew: PropTypes.func,
};

function NewAddress({ closeDialog = null, onSubmitNew = null }) {
  const handleNewAddress = async (data) => {
    try {
      const res = await addressApi.add(data);
      onSubmitNew(res);
      console.log('data at new address', data);

      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <NewAddressForm onSubmitNew={handleNewAddress} closeDialog={closeDialog} />
    </div>
  );
}

export default NewAddress;
