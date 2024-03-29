import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
RateSkeletion.propTypes = {
  length: PropTypes.number,
};

function RateSkeletion({ length = 5 }) {
  return (
    <>
      {/* <h3>Đánh giá</h3> */}
      {Array.from(new Array(length)).map((x, index) => (
        <Box mb={1} key={index}>
          <Skeleton key={index} width='80%' />
        </Box>
      ))}
    </>
  );
}

export default RateSkeletion;
