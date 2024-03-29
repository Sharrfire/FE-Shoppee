import { makeStyles } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import brandApi from '../../../api/brandApi';
import BrandFilter from './filter/BrandFilter';
import PriceFilter from './filter/PriceFilter';
import RateFilter from './filter/RateFilter';
ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  icon: {
    fontSize: '18px',
    marginRight: '8px',
  },
  input: {
    // border: '1px solid black',
  },
  btn: {
    marginTop: '20px',
    '&.MuiButton-root': {
      borderRadius: '2px',
      backgroundColor: 'rgb(238, 77, 45)',
      color: '#fff',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
    },
  },
}));

function ProductFilter({ filters, onChange = null }) {
  const classes = useStyle();

  const [brandList, setBrandList] = useState([]);
  const [active, setactive] = useState(filters.brand);

  useEffect(() => {
    (async () => {
      try {
        const list = await brandApi.getAll();
        setBrandList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleBrandChange = (newBrandId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      brand: newBrandId,
    };

    onChange(newFilters);
    setactive(newBrandId);
  };

  const handlePriceChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };

  const handleRateChange = (newRateId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      rate: newRateId,
    };

    onChange(newFilters);
  };
  return (
    <nav className='category'>
      <h3 className='category__heading' style={{ display: 'flex' }}>
        <ListIcon className={classes.icon} />
        Danh mục
      </h3>
      <BrandFilter onChange={handleBrandChange} brandList={brandList} active={active} />
      <RateFilter onChange={handleRateChange} />
      <PriceFilter onChange={handlePriceChange} />
    </nav>
  );
}

export default ProductFilter;
