/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { compose } from 'redux';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  rootProgress: {
    color: theme.color.greenBank,
    height: '40px',
  },
}));

export function Todo({ children, loading = false, ...props }) {
  const classes = useStyles();
  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        className={classes.buttonOtp}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <CircularProgress
            classes={{
              root: classes.rootProgress,
            }}
          />
        ) : (
          children
        )}
      </Button>
      <div style={{height: '8px'}}></div>
    </>
  );
}
Todo.propTypes = {
  loading: PropTypes.bool,
  // hide: PropTypes.func,
};

export default Todo;
