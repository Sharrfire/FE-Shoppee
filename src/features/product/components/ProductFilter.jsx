import { makeStyles } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
ProductFilter.propTypes = {};
const useStyle = makeStyles((theme) => ({
  icon: {
    fontSize: '18px',
    marginRight: '8px',
  },
  input: {
    // border: '1px solid black',
  },
}));
function ProductFilter(props) {
  const classes = useStyle();
  return (
    <nav className='category'>
      <h3 className='category__heading' style={{ display: 'flex' }}>
        <ListIcon className={classes.icon} />
        Danh mục
      </h3>
      <ul className='category-list'>
        <li className='category-item category-item--active'>Trang điểm mặt</li>
        <li className='category-item'>Trang điểm mặt</li>
        <li className='category-item'>Trang điểm mặt</li>
      </ul>
    </nav>
  );
}

export default ProductFilter;
