import { Paper } from '@material-ui/core';
import { Outlet } from 'react-router-dom';
import '../../assets/css/user.css';

import UserMenu from './component/UserMenu';
UserFeature.propTypes = {};

function UserFeature(props) {
  return (
    <div className='user__container'>
      <div className='grid wide'>
        <div className='row'>
          <div className='col l-2 m-0 c-0'>
            {' '}
            <UserMenu />
          </div>
          <div className='col l-10 m-12 c-12'>
            {' '}
            <div className='user__content'>
              <Paper elevation={0}>
                <Outlet />
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFeature;
