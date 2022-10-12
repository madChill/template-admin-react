import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      //   margin: theme.spacing(1),
      //   width: '25ch',
    },
    margin: '24px auto 0',
    // width: theme.width.mobileFormLayout,
    [theme.breakpoints.up('md')]: {
      // width: '48%',
      margin: '0',
    },
  },
  rootInput: {
    // border: 'none',
    width: '100%',
    // height: '24px',
    [theme.breakpoints.up('md')]: {
      // width: '95%',
      // margin: '0 0 0 8px',
    },
    '&:focus': {
      border: 'none',
    },
    '& .MuiFormLabel-root': {
      textTransform: 'uppercase',
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left',
      fontFamily: 'SVN-Gilroy',
      fontSize: '10px',
    },
    '&::placeholder': {
      fontStyle: 'italic',
      color: 'red',
    },
    // '& .Mui-focused': {
    //   color: theme.color.greenBank,
    // },
  },
  titleName: {
    fontSize: '10px',
    lineHeight: '16px',
    color: '#333333',
    fontFamily: 'SVN-Gilroy',
    textTransform: 'uppercase',
  },
  divide: {
    width: '100%',
    height: '1px',
    /* margin: 0; */
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    margin: '0 auto',
  },
}));

export default function BasicTextFields({
  text,
  key,
  defaultValue,
  placeholder,
  removeIcon = false,
  disabled = false,
  ...props
}) {
  const classes = useStyles();
  const moreOp = disabled
    ? { value: defaultValue || props?.value, onChange: () => {} }
    : {};
  return (
    <TextField
      classes={{
        root: classes.rootInput,
      }}
      id="standard-basic"
      label={text}
      placeholder={placeholder || text}
      defaultValue={defaultValue}
      disabled={disabled}
      key={key}
      {...props}
      {...moreOp}
    />
  );
}

BasicTextFields.propTypes = {
  removeIcon: PropTypes.any,
  text: PropTypes.string,
  defaultValue: PropTypes.string,
  key: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.any,
};
