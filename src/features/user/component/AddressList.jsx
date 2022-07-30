import PropTypes from 'prop-types';
import AddressDetail from './AddressDetail';

AddressList.propTypes = {
  addressList: PropTypes.array,
};

AddressList.defaultProps = {
  addressList: [],
};

function AddressList({ addressList }) {
  return (
    <div>
      {addressList.map((address) => (
        <div key={address.id}>{address.id && <AddressDetail address={address} />}</div>
      ))}
    </div>
  );
}

export default AddressList;
