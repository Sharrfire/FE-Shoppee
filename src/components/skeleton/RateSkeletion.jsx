import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
RateSkeletion.propTypes = {
  length: PropTypes.number,
};
RateSkeletion.defaultProps = {
  length: 5,
};
function RateSkeletion({ length }) {
  return (
    <Box>
      <h3>Đánh giá</h3>
      {Array.from(new Array(length)).map((x, index) => (
        <Box mb={1} key={index}>
          <Skeleton width='100%' />
        </Box>
      ))}
    </Box>
  );
}

export default RateSkeletion;
