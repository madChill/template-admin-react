import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import get from 'lodash/get';

import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '../TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
    '& .MuiFormLabel-root': {
      textTransform: 'uppercase',
      // transform: 'translate(0, 1.5px) scale(0.75)',
      // transformOrigin: 'top left',
      fontSize: '12px',
      // color: '#333333',
      fontFamily: 'SVN-Gilroy',
    },
  },
  textLabel: {},
}));

// status = active, edited, null

export default function DatePickers({
  handleDateChange,
  text,
  status,
  error = false,
  placeholder = 'DD/mm/yyyy',
  ...props
}) {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider name={props.name} utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.textField}
        disableFuture
        // autoOk
        openTo="year"
        format="dd/MM/yyyy"
        label="Date of birth"
        views={['year', 'month', 'date']}
        InputProps={{ placeholder, error }}
        InputLabelProps={{
          shrink: true,
          error,
        }}
        error={error}
        // error
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
}

DatePickers.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  status: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.any,
  handleDateChange: PropTypes.any,
};
