import classNames from 'classnames';
import PropTypes from 'prop-types';
BrandFilter.propTypes = {
  onChange: PropTypes.func,
  brandList: PropTypes.array,
  active: PropTypes.number,
  loading: PropTypes.bool,
};

function BrandFilter({ onChange, brandList, active }) {
  const handleBrandClick = (brand) => {
    if (onChange) {
      onChange(brand.id);
    }
  };

  return (
    <div className='brand__filter'>
      <ul className='brand-list'>
        {brandList.map((brand) => (
          // neu duoc active thi them brand-item--active
          <li
            key={brand.id}
            className={classNames('brand-item', { 'brand-item--active': brand.id === active })}
            onClick={() => handleBrandClick(brand)}
          >
            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandFilter;
