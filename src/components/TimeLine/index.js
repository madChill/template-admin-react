import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepRoot: {
    padding: 0,
  },
  horizontal: {
    padding: 0,
  },
}));

function getSteps() {
  return [
    '    Create an ad      ',
    '     Create an ad      ',
    'Create an ad',
    '      Create an ad    ',
  ];
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        classes={{
          root: classes.stepRoot,
          horizontal: classes.horizontal,
        }}
        alternativeLabel
        activeStep={2}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>
              <p style={{}}>{label}</p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
