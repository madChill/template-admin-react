import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '24px auto 16px',
    display: 'flex',
  },
  circleActive: {
    width: '20px',
    height: '20px',
    borderRadius: '20px',
    background: theme.color.greenBank,
    [theme.breakpoints.up('md')]: {
      width: '32px',
      height: '32px',
    },
  },
  circle: {
    width: '20px',
    height: '20px',
    borderRadius: '20px',
    background: theme.color.grey,
    [theme.breakpoints.up('md')]: {
      width: '32px',
      height: '32px',
    },
  },
  divide: {
    height: '2px',
    /* margin: 0; */
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    width: '24px',
    margin: '8px 8px',
    [theme.breakpoints.up('md')]: {
      // margin: '6px auto 0px',
      margin: '16px 8px',
      width: '40px',
    },
  },
  contentCircle1: {
    color: 'white',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      margin: '6px auto 0px',
    },
    [theme.breakpoints.down('md')]: {
      margin: 0,
    },
  },
  circleActiveIcon: {
    [theme.breakpoints.up('md')]: {
      // margin: '6px auto 0px',
      margin: '6px auto',
      width: '100%',
    },
  },
}));

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  // const steps = getSteps();

  return (
    <div className={classes.root}>
      {/* <div className={classes.circleActive}>
        <CheckIcon
          className={classes.circleActiveIcon}
          style={{ color: 'white' }}
          fontSize="small"
        />
      </div> */}
      <div className={classes.circleActive}>
        <p className={classes.contentCircle1}>1</p>
      </div>
      <div className={classes.divide} />
      <div className={classes.circle}>
        <p className={classes.contentCircle1}>2</p>
      </div>
      <div className={classes.divide} />
      <div className={classes.circle}>
        <p className={classes.contentCircle1}>3</p>
      </div>
      <div className={classes.divide} />
      <div className={classes.circle}>
        <p className={classes.contentCircle1}>4</p>
      </div>
    </div>
  );
}
