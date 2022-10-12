import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from 'components/TextField';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
        marginTop: 0,
      },
    },
  },
  formControl: {
    // margin: '24px 16px 0',
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '48%',
    //   margin: '0 0 0 8px',
    // },
  },
  titleName: {
    fontSize: '13px',
    lineHeight: '16px',
    color: '#333333',
    fontFamily: 'SVN-Gilroy',
    textTransform: 'uppercase',
    '& .MuiFormLabel-root': {
      textTransform: 'uppercase',
    },
  },
}));

export default function BasicTextFields(
  { error, ...props } = {
    onChange: () => {},
    onBlur: () => {},
    options: [],
  }
) {
  const classes = useStyles();
  return (
    <Autocomplete
      classes={{
        root: classes.root,
      }}
      // defaultValue
      {...props}
      onChange={(val, value) => {
        props?.onChange(value);
      }}
      onBlur={props?.onBlur}
      InputLabelProps={{
        shrink: true,
        error,
      }}
    />
  );
}

BasicTextFields.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  error: PropTypes.any,
  options: PropTypes.array,
};
