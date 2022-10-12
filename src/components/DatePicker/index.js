import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useStyles from './style';

export default function MaterialUIPickers({
  handleDateChange,
  selectedDate,
  inputVariant = 'outlined',
  label = '',
  onFocus = () => {},
  error = false,
  disabled = false,
}) {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          className={classes.textFieldOutLineRoot}
          autoOk
          onFocus={onFocus}
          onOpen={onFocus}
          disableToolbar
          disabled={disabled}
          variant="inline"
          label={label}
          inputVariant={inputVariant}
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          invalidDateMessage=""
          InputProps={{ placeholder: 'dd/mm/yyyy', error }}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
MaterialUIPickers.propTypes = {
  handleDateChange: PropTypes.func,
  selectedDate: PropTypes.any,
  inputVariant: PropTypes.any,
  label: PropTypes.any,
  onFocus: PropTypes.func,
  error: PropTypes.any,
  disabled: PropTypes.any,
};
