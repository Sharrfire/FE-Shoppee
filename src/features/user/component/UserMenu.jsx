import { Link, makeStyles } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import classNames from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
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

  selectedLink: {
    '&.MuiLink-root': {
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
  const location = useNavigate();

  const [selected, setSelected] = useState(location.pathName);

  const handleSelected = (data) => {
    setSelected(data);
  };

  const loggedInUser = useSelector((state) => state.user.current);

  const history = useNavigate();

  const handleClickEditUser = () => {
    history('/user');
  };

  return (
    <div className='user__menu '>
      <div className='user__userName'>
        <div className='user__userName-avatar' onClick={handleClickEditUser}>
          <div className='user__userName-avatar-placeholder'>
            <svg
              enableBackground='new 0 0 15 15'
              viewBox='0 0 15 15'
              x='0'
              y='0'
              className='shopee-svg-icon icon-headshot'
            >
              <g>
                <circle cx='7.5' cy='4.5' fill='none' r='3.8' strokeMiterlimit='10'></circle>
                <path
                  d='m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6'
                  fill='none'
                  strokeLinecap='round'
                  strokeMiterlimit='10'
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className='user__userName-fullname'>
          <div className='userName'>{loggedInUser.fullname}</div>
          <div className='editInfo' onClick={handleClickEditUser}>
            <EditIcon />
            Sửa hồ sơ
          </div>
        </div>
      </div>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link
            component={NavLink}
            underline='none'
            to={''}
            onClick={() => handleSelected('/user')}
            className={classNames(classes.link, selected === '/user' && classes.selectedLink)}
          >
            <PermIdentityIcon className={classes.icon} />
            Tài Khoản của tôi
          </Link>
        </li>
        <li className='menu__item'>
          <Link
            component={NavLink}
            underline='none'
            to={`address`}
            onClick={() => handleSelected('user/address')}
            className={classNames(classes.link, selected === '/user/address' && classes.selectedLink)}
          >
            <HomeIcon className={classes.icon} />
            Địa chỉ
          </Link>
        </li>
        <li className='menu__item'>
          <Link
            component={NavLink}
            underline='none'
            to={`purchase`}
            onClick={() => handleSelected('/user/purchase')}
            className={classNames(classes.link, selected === '/user/purchase' && classes.selectedLink)}
          >
            <AssignmentIcon className={classes.icon} />
            Đơn mua
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
