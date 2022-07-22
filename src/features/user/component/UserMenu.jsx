import { Link, makeStyles } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
UserMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0px',
    '&.MuiLink-root': {
      color: 'rgba(0,0,0,.8)',
    },

    '&.MuiTypography-root': {
      fontSize: '14px',
    },
    '&:hover': {
      color: '#f06043',
    },
  },

  icon: {
    marginRight: '5px',
    color: '#0547ad',
    fontSize: '20px',
  },
}));
function UserMenu(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  return (
    <div className='user__menu'>
      <div className='user__userName'></div>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link component={NavLink} underline='none' to={''} className={classes.link}>
            <PermIdentityIcon className={classes.icon} />
            Tài Khoản của tôi
          </Link>
        </li>
        <li className='menu__item'>
          <Link component={NavLink} underline='none' to={`address`} className={classes.link}>
            <HomeIcon className={classes.icon} />
            Địa chỉ
          </Link>
        </li>
        <li className='menu__item'>
          <Link component={NavLink} underline='none' to={`purchase`} className={classes.link}>
            <AssignmentIcon className={classes.icon} />
            Đơn mua
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
