import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  formContainer: {
    fontSize: 12,
  },
  formRoot: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  formRootNoWrap: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2.3%',
  },
  fieldRoot: {
    width: '45%',
    marginBottom: 24,
  },
  fieldRootNoWrap: {
    width: '46%',
    marginBottom: 24,
  },
  outLineInputNonePadding: {
    '& .MuiFormHelperText-root': {
      position: 'absolute',
    },
    '& .MuiOutlinedInput-root': {
      padding: 'unset !important',
    },
    '& .MuiFormControl-marginNormal': {
      marginTop: 'unset !important',
      marginBottom: 'unset !important',
    },
  },
  outLineInputSetPadding: {
    '& .MuiOutlinedInput-input': {
      padding: '9.5px 14px',
    },
  },
  textFieldOutLineRoot: {
    display: 'block',
    marginTop: 'unset !important',
    marginBottom: 'unset !important',
    width: '100%',
    '& .MuiInputBase-root ': { width: '100%' },
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      color: 'red',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      display: 'none',
    },
    '& .MuiOutlinedInput-input': {
      padding: '9.5px 14px',
    },
  },
  buttonBase: {
    borderRadius: 20,
    width: 140,
    height: 30,
  },
  loading: {
    width: '80%',
    height: '80%',
    margin: 'auto',
    position: 'fixed',
    alignItems: 'center',
    opacity: 0.3,
    display: 'flex',
    backgroundColor: 'white',
    zIndex: 999,
  },
  textHelperError: {
    position: 'absolute',
  },
}));
