/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export function Todo({ showLoading }) {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={showLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
Todo.propTypes = {
  showLoading: PropTypes.bool,
  // hide: PropTypes.func,
};

export default compose(memo)(Todo);
