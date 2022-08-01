import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

FilterSkeleton.propTypes = {
  length: PropTypes.number,
};
FilterSkeleton.defaultProps = {
  length: 6,
};
const useStyles = makeStyles((theme) => ({
  root: {},

  top: {
    marginBottom: '10px',
  },

  bottom: {},
}));

function FilterSkeleton({ length }) {
  const classes = useStyles();
  return (
    <Box>
      {Array.from(new Array(length)).map((x, index) => (
        <Box padding={1}>
          <Skeleton className={classes.top} variant='rect' width='240px' height={230} />
          {/* <Skeleton width='180px' height={40} /> */}
        </Box>
      ))}
    </Box>
  );
}

export default FilterSkeleton;
