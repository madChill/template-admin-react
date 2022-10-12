import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
  },
  wrapper: {
    // margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    fontFamily: 'SVN-Gilroy !important',
    fontWeight: 'normal',
    '& ::hover': {
      background: 'transparent',
    }
    // backgroundColor: '#028547',
    // '&:hover': {
    //   backgroundColor: '#028547',
    // },
  },
  fabProgress: {
    // color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    // color: '#028547',
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // marginTop: -12,
    // marginLeft: -12,
  },
}));

export default function CircularIntegration({ text, loading, ...props }) {
  const classes = useStyles();
  //   const [loading, setLoading] = React.useState(false);
  //   const [success, setSuccess] = React.useState(false);
  //   const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: !loading,
  });

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          className={buttonClassname}
          disabled={loading}
          {...props}
        >
          {text}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}

CircularIntegration.propTypes = {
  text: PropTypes.any,
  loading: PropTypes.any,
};
