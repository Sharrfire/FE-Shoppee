// import { Breadcrumbs, Paper, Typography } from '@material-ui/core';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import { Link } from 'react-router-dom';
// import '../../../assets/css/productDetail.css';
// import ProductImg from '../components/ProductImg';
// import ProductInfo from '../components/ProductInfo';
// ProductDetail.propTypes = {};

// function ProductDetail(props) {
//   return (
//     <div className='app__container'>
//       <div className='grid wide content'>
//         <div className='row'>
//           <div className='col l-12'>
//             <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
//               <Link color='inherit' to='/'>
//                 Shopee
//               </Link>
//               <Typography color='textPrimary'>Product Name</Typography>
//             </Breadcrumbs>
//           </div>
//         </div>
//         <Paper elevation={0}>
//           <div className='row'>
//             <div className='col l-5'>
//               <ProductImg />
//             </div>
//             <div className='col l-7'>
//               <ProductInfo />
//             </div>
//           </div>
//         </Paper>
//         <Paper elevation={0}>
//           <div className='row'>
//             <div className='col l-12'>3</div>
//           </div>
//         </Paper>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

import { Breadcrumbs, makeStyles, Paper, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '~/assets/css/productDetail.css';
import useProductDetail from '~/features/hook/useProductDetail';
import Comment from '../components/comments/Comment';
import ProductImg from '../components/ProductImg';
import ProductInfo from '../components/ProductInfo';
ProductDetail.propTypes = {};

const useStyle = makeStyles((theme) => ({
  link: {
    marginTop: '20px',
    height: '16px',
    display: 'flex',
    justifyItems: 'center',
  },

  home: {
    textDecoration: 'none',
    fontSize: '13px',
    color: '#05a',
  },

  path: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '13px',
    color: '#808080',
  },

  icon: {
    fontSize: '18px',
  },

  paper: {
    marginTop: '16px',
  },
}));
function ProductDetail(props) {
  const classes = useStyle();
  // product
  const { productId } = useParams();

  const { product, loading } = useProductDetail(productId);
  const [value, setValue] = useState();
  console.log('Pre value', value);
  console.log('Pre loading', loading);
  useEffect(() => {
    setValue(product);
  }, [product]);
  return (
    <div className='app__container'>
      <div className='grid wide'>
        <div className='row'>
          <div className='col l-12'>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' className={classes.icon} />}
              aria-label='breadcrumb'
              className={classes.link}
            >
              <Link color='inherit' to='/' className={classes.home}>
                Shopee
              </Link>
              <Typography color='textPrimary' className={classes.path}>
                {product.name}
              </Typography>
            </Breadcrumbs>
          </div>
        </div>
        <Paper elevation={0} className={classes.paper}>
          <div className='row'>
            <div className='col l-5'>{product.id && <ProductImg product={product} />}</div>
            <div className='col l-7'>{product.id && <ProductInfo product={product} />}</div>
          </div>
        </Paper>
        <div>
          <div className='row'>
            <div className='col l-12'>
              <Comment id={productId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
