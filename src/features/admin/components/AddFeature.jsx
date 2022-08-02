import { Button, Dialog, DialogContent, IconButton, makeStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AddForm from './add/AddForm';

AddFeature.propTypes = {
  onChange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  label: {
    marginTop: '20px',
  },
  btn: {
    '&.MuiButton-root': {
      borderRadius: '2px',
      backgroundColor: 'rgb(54, 223, 76)',
      color: '#fff',
      fontSize: '12px',
    },
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));
function AddFeature({ props }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
      setOpen(false);
    }
  };

  return (
    <>
      <div className='price__filter'>
        <h3 className={classes.label}>THÊM SẢN PHẨM</h3>
        <div className='price__filter-list'>
          <Button onClick={handleClickOpen} className={classes.btn} fullWidth>
            Thêm{' '}
          </Button>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <IconButton onClick={handleClose} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText> */}
          <AddForm />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddFeature;
