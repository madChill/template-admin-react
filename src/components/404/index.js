/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export function Page404({ alertProperty = [], hide }) {
  return <div style={{ height: '73vh' }}>Not found</div>;
}
Page404.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  alertProperty: PropTypes.array,
  hide: PropTypes.func,
};

export default memo(Page404);
