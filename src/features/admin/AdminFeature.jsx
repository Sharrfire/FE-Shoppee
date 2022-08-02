import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

AdminFeature.propTypes = {};

function AdminFeature(props) {
  const { enqueueSnackbar } = useSnackbar();

  const loggedInUser = useSelector((state) => state.user.current);
  console.log('loggedInUser', loggedInUser);

  const isLoggedIn = !!loggedInUser.id;
  const isAdmin = (isLoggedIn) => {
    if (isLoggedIn) {
      return loggedInUser.role.id;
    } else {
      return 0;
    }
  };
  // console.log('isAdmin', isAdmin);

  if (!isLoggedIn) {
    enqueueSnackbar('Vui lòng đăng nhập', { variant: 'error' });
    return <Navigate to='/' />;
  }
  if (isAdmin(isLoggedIn) !== 2) {
    enqueueSnackbar('Bạn không thể truy cập trang này', { variant: 'error' });
    return <Navigate to='/' />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AdminFeature;
