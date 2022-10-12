import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const GreenRadio = withStyles(theme => ({
  root: {
    // color: '#DFDFDF',
    // background: '#FFFFFF',
    '&$checked': {
      color: theme.color.greenBank,
    },
  },
  checked: {},
}))(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    '& .MuiButtonBase-root': {
      padding: '3.63px',
    },
    '& .MuiFormControlLabel-root': {
      marginLeft: '-6px',
      marginBottom: 0,
    },
    '& .Mui-focused': {
      color: theme.color.greenBank,
    },
  },
  labelRoot: {
    fontSize: '10px',
    lineHeight: '16px',
    color: '#333333',
    fontFamily: 'SVN-Gilroy',
    borderBottom: 0,
    marginBottom: '8px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  controlRoot: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '48%',
      // margin: '16px 0 0 0px',
    },
  },
  divide: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '96%',
    },
    height: '1px',
    /* margin: 0; */
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    margin: '0 auto',
  },
}));

export default function RadioButtonsGroup({
  title,
  name,
  defaultValue,
  disabled,
  ...props
}) {
  const [value, setValue] = React.useState(defaultValue || 'Male');

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = event => {
    if (!disabled) {
      setValue(event.target.value);
      props?.onChange(event.target.value);
    }
  };

  const classes = useStyles();
  return (
    <FormControl
      classes={{
        root: classes.controlRoot,
      }}
      component="fieldset"
    >
      <FormLabel
        classes={{
          root: classes.labelRoot,
        }}
        component="legend"
      >
        {title}
      </FormLabel>
      <RadioGroup
        classes={{
          root: classes.root,
        }}
        style={{ display: 'block' }}
        aria-label="gender"
        name={name}
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Male" control={<GreenRadio />} label="Nam" />
        <FormControlLabel value="Female" control={<GreenRadio />} label="Nữ" />
      </RadioGroup>
      <div className={classes.divide}></div>
    </FormControl>
  );
}
RadioButtonsGroup.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.any,
};
