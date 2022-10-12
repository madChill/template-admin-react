import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
  color: {
    greenBank: '#00B74F',
    grey: '#DFDFDF',
    greyAccording: 'rgb(232, 232, 232, 0.24)',
    defaultFormField: '#999999',
    activeFormField: '#00B74F',
    editedFormField: '#333333',
  },
  width: {
    mobileFormLayout: '90.5%',
  },
  font: {
    fontFamily: 'SVN-Gilroy',
  },
});
export function ThemeProvider1(props) {
  return (
    <ThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </ThemeProvider>
  );
}

ThemeProvider1.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider1;
