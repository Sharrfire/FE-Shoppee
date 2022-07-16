import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  Toolbar,
  Typography,
  Badge,
  Box,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { AccountCircle, Close, ShoppingCart } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Login from '~/features/Auth/components/Login';
import Register from '~/features/Auth/components/Register';
import { logout } from '~/features/Auth/components/userSlice';
import { cartItemsCountSelector } from '~/features/Cart/selector';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));
const MODE = { LOGIN: 'login', REGISTER: 'register' };
export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useNavigate();
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const loginUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loginUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };
  const handleCartClick = () => {
    history('cart');
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.link} to='/'>
              GAMING SHOP
            </Link>
          </Typography>
          <NavLink to='/products' className={classes.link}>
            <Button color='inherit'>Products</Button>
          </NavLink>{' '}
          {!isLoggedIn && (
            <Button color='inherit' onClick={handleClickOpen}>
              Login
            </Button>
          )}
          <IconButton color='inherit' onClick={handleCartClick}>
            <Badge badgeContent={cartItemsCount} color='error' overlap='rectangular'>
              <ShoppingCart />
            </Badge>
          </IconButton>{' '}
          {isLoggedIn && (
            <IconButton color='inherit' onClick={handleUserClick}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      <Dialog
        disableEscapeKeyDown
        onClose={(_, reason) => {
          if (reason !== 'backdropClick') {
            handleClose();
          }
        }}
        open={open}
        // onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign='center'>
                <Button
                  color='primary'
                  onClick={() => {
                    setMode(MODE.LOGIN);
                  }}
                >
                  Already have an account? Login here
                </Button>
              </Box>
            </>
          )}{' '}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign='center'>
                <Button
                  color='primary'
                  onClick={() => {
                    setMode(MODE.REGISTER);
                  }}
                >
                  Dont have an account? Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
