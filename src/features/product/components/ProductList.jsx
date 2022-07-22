import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './Product';
ProductList.propTypes = {
  productList: PropTypes.array,
};
function ProductList({ productList = [] }) {
  return (
    <div className='row'>
      {productList.map((product) => (
        <div key={product.id} className='col l-2-4 m-4 c-6'>
          <Link to={`${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Product product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
