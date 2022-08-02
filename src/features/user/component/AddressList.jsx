import React from 'react';
import PropTypes from 'prop-types';
import AddressDetail from './AddressDetail';
import addressApi from '../../../api/addressApi';

AddressList.propTypes = {
  addressList: PropTypes.array,
};

AddressList.defaultProps = {
  addressList: [],
};

function AddressList({ addressList }) {
  return (
    <div>
      {addressList.map((address, index) => (
        <div key={index}>{address.id && <AddressDetail key={address.id} address={address} />}</div>
      ))}
    </div>
  );
}

export default AddressList;
