import { Button, Dialog, DialogContent, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeAddress, setStatusAddress } from './AddressSlice';
import EditAddress from './EditAddress';
AddressDetail.propTypes = {
  address: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
  btnSave: {
    '&.MuiButton-root': {
      margin: '0',
      padding: '7px 0',
      color: '#555',
      boxSizing: 'border-box',
      background: 'none',
      border: 'none',
      outline: 'none',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
      textTransform: 'capitalize',
      textDecoration: 'underline',
    },
  },

  btnSetDefault: {
    '&.MuiButton-root': {
      height: 'auto',
      padding: '7px 10px',
      margin: '0 5px',
      background: ' #fff',
      color: '#555',
      border: '1px solid rgba(0,0,0,.09)',
      boxShadow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
      minWidth: '60px',
      maxWidh: '190px',
      borderRadius: '2px',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
      textTransform: 'capitalize',
    },

    '&.Mui-disabled': {
      background: '#fff!important',
      color: '#ccc !important',
      boxShadow: 'none',
      cursor: 'not-allowed',
    },
  },
}));
function AddressDetail({ address = {} }) {
  const { enqueueSnackbar } = useSnackbar();
  // dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
      setOpen(false);
    }
  };
  // end dialog
  const { name, phone, status } = address;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddressDefault = () => {
    const action = setStatusAddress({
      id: address.id,
      status: true,
    });
    dispatch(action);
    enqueueSnackbar('bạn đã đặt mặc định cho địa chỉ', { variant: 'success' });
  };

  const handleDeleteAddress = () => {
    const action = removeAddress({
      id: address.id,
    });
    dispatch(action);
    enqueueSnackbar('bạn đã xóa địa chỉ', { variant: 'error' });
  };
  return (
    <div className='user__address-content'>
      <div></div>
      <div className='user__address-content-left' onClick={handleClickOpen}>
        <div className='user__address-name'>
          <div className='user__address-label'>Họ và tên</div>
          <div className='user__address-contentDetail'>
            <span className='user__address-contentDetail-text'>{name}</span>
            {/* <span className='user__address-contentDetail-text'>Đinh Ngọc Thái</span> */}
            {status === true && (
              <>
                <div className='user__address-contentDetail-default'>Mặc định</div>
              </>
            )}
          </div>
        </div>
        <div className='user__address-phone'>
          <div className='user__address-label'>Số điện thoại</div>
          {/* <div className='user__address-contentDetail'>{phone}</div> */}
          <div className='user__address-contentDetail'>0704614563</div>
        </div>
        <div className='user__address-address'>
          <div className='user__address-label'>Địa chỉ</div>
          <div className='user__address-contentDetail'>
            <span>{address.address}</span>
            {/* <span>Đồng nai</span> */}
          </div>
        </div>
      </div>
      <div className='user__address-content-buttons hide-on-mobile'>
        <div className='user__address-btn'>
          <Button className={classes.btnSave} onClick={handleClickOpen}>
            Sửa
          </Button>
          {status !== true && (
            <>
              <Button className={classes.btnSave} onClick={handleDeleteAddress}>
                Xóa
              </Button>
            </>
          )}
        </div>
        <div className='user__address-btn'>
          {status === true && (
            <Button className={classes.btnSetDefault} disabled>
              Thiết lập mặc định
            </Button>
          )}
          {status !== true && (
            <Button className={classes.btnSetDefault} onClick={handleAddressDefault}>
              Thiết lập mặc định
            </Button>
          )}
        </div>
      </div>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
        <DialogContent>
          <EditAddress closeDialog={handleClose} address={address} id={address.id} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddressDetail;
