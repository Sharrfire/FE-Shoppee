import { Box, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';

FilterSkeleton.propTypes = {
  length: PropTypes.number,
};
FilterSkeleton.defaultProps = {
  length: 4,
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
    <Box className={classes.root}>
      {Array.from(new Array(length)).map((x, index) => (
        <Box padding={1} key={index}>
          <Typography variant='body1'>
            <Skeleton width='100%' />
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default FilterSkeleton;
