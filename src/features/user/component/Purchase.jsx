import { Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import purchaseApi from '../../../api/purchaseApi';
import PurchaseFilter from './PurchaseFilter';
import PurchaseList from './PurchaseList';
Purchase.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20px',
  },

  progress: {
    '&.MuiCircularProgress-colorPrimary': {
      color: '#ee4d2d',
    },
  },
}));
function Purchase(props) {
  const classes = useStyle();
  const history = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 10,
      status: Number.parseInt(params.status) || 1,
    };
  }, [location.search]);

  const [purchaseList, setPurchaseList] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _total: 10,
    _page: 1,
  });
  console.log(pagination);

  useEffect(() => {
    (async () => {
      try {
        const params2 = { ...queryParams };
        const list = await purchaseApi.getAll(params2);
        console.log(list);
        const { data, pagination } = list;

        setPurchaseList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('error', error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  //handle pagination

  // handle filter
  const handleFilterChange = (newFilter) => {
    const filters = {
      ...queryParams,
      ...newFilter,
    };
    history({
      pathName: history.location.pathName,
      search: queryString.stringify(filters),
    });
  };

  // const handleComent
  const handleComment = (list) => {
    const { data, pagination } = list;
    setPurchaseList(data);
    setPagination(pagination);
  };

  const handleCancel = (list) => {
    const { data, pagination } = list;
    setPurchaseList(data);
    setPagination(pagination);
  };
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  if (!isLoggedIn) {
    return <Navigate to='/' />;
  }
  return (
    <div className='user__purchase'>
      <div className='user__purchase-filter'>
        <PurchaseFilter onChange={handleFilterChange} currentFillter={queryParams.status} filters={queryParams} />
      </div>
      {loading ? (
        <Box className={classes.root}>
          <CircularProgress color='primary' className={classes.progress} />
        </Box>
      ) : (
        <PurchaseList purchaseList={purchaseList} onSubmitComment={handleComment} onClick={handleCancel} />
      )}
    </div>
  );
}

export default Purchase;
