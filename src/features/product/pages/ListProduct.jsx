import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import '../../../assets/css/product.css';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
ListProduct.propTypes = {};

const useStyle = makeStyles((theme) => ({}));

const theme = createTheme({
  overrides: {
    MuiPaginationItem: {
      page: {
        fontWeight: '500',
        color: '#999999',
        marginLeft: '15px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&.Mui-selected': {
          backgroundColor: '#ee4d2d',
          color: '#fff',
        },
        '&.Mui-focusVisible': {
          backgroundColor: '#ee4d2d',
        },
      },
      rounded: {
        borderRadius: '2px',
        width: '40px',
        height: '30px',
      },
      sizeLarge: {
        fontSize: '15px',
      },
      icon: {
        marginLeft: '15px',
        marginRight: '15px',
        width: '30px',
        height: '30px',
      },
    },
  },
});
function ListProduct(props) {
  const [productList, setProductList] = useState([]);
  console.log('productList', productList);
  const [pagination, setPagination] = useState({
    limit: 15,
    total: 10,
    page: 1,
  });

  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    (async () => {
      try {
        // const params2 = { ...queryParams };

        const rp = await productApi.getAll();
        // const { data, pagination } = rp;
        console.log(rp);
        // console.log('data', data);
        setProductList(rp);
        // eslint-disable-next-line
        setPagination(pagination);
      } catch (error) {
        console.log('failed', error);
      }
      setLoading(false);
    })();
  }, [pagination]);
  const classes = useStyle();
  return (
    <div className='app__container'>
      <div className='grid wide content'>
        <div className='row'>
          <div className='col l-2'>
            <ProductFilter />
          </div>
          <div className='col l-10'>
            <ProductSort />
            <ProductList />
            <div className='product_pagination'>
              <ThemeProvider theme={theme}>
                <Pagination count={10} shape='rounded' size='large' selected={true} className={classes.root} />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
