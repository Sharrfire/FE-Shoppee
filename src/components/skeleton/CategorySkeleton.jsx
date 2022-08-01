import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
CategorySkeleton.propTypes = {
  length: PropTypes.number,
};

function CategorySkeleton({ length = 5 }) {
  return (
    <Box>
      {Array.from(new Array(length)).map((x, index) => (
        <Box mb={1} key={index}>
          <Skeleton width='80%' />
        </Box>
      ))}
    </Box>
  );
}

export default CategorySkeleton;
