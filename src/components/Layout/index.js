import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header/Header.js';
import Sidebar from 'components/Sidebar/Sidebar.js';

// import Banner from 'components/Banner';
// import Footer from 'components/Footer';
// import LeftBar from 'components/LeftBar';

const makeStyle = makeStyles(theme => ({
  rootContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      background: 'white',
    },
  },
  mainContainer: {
    width: '100%',
    overflow: 'auto',
  },
  mainContent: {
    // margin: '16px 16px 0 16px',
    margin: 0,
  },
  rootMenu: {
    width: '25%',
    minWidth: '270px',
    minHeight: '999px',
    zIndex: 999,
  },
}));
function Layout({ children }) {
  const classes = makeStyle();
  return (
    <div className={classes.rootContainer}>
      <Header />
      <Sidebar />
      {/* <div className={classes.rootMenu}>
        <LeftBar />
      </div> */}
      <div className={classes.mainContainer}>
        {/* <Header /> */}
        <main className={classes.mainContent}>
          {/* <Banner /> */}
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  // isHome: PropTypes.bool,
};

export default Layout;
