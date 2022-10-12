/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Login from 'containers/Login/Loadable';
import LoadingCom from 'components/Loading';
// import Footer from 'components/Footer';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
// import {
//   selectionAppDetail,
//   configBackHistory,
//   selectionRouteMatrix,
// } from 'atoms/global';
import { connect } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from 'components/Layout';
import Router from 'containers/routers';
import { ROUTE } from 'utils/constants';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import LoadingIndicator from 'components/LoadingIndicator';
import { selectLoading } from '../../atoms/loading';
import actions from './actions';
import { key } from './constants';
import saga from './saga';
import reducer from './reducer';
import useStyle from './style';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const App = props => {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  // const setAppDetail = useSetRecoilState(selectionAppDetail);

  const [loading, setLoading] = React.useState(false);
  const loadingApi = useRecoilValue(selectLoading);
  const classes = useStyle();

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - " defaultTitle="manager dashboard">
        <meta name="description" content="manager dashboard" />
      </Helmet>
      <LoadingCom showLoading={loadingApi} />
      {!loading && (
        <div className={classes.mainContain}>
          <Switch>
            <Route exact path={ROUTE.login} component={Login} />
            <Layout>
              <Router />
            </Layout>
          </Switch>
        </div>
      )}
    </AppWrapper>
  );
};
App.propTypes = {
  getSelectionsRequest: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({});
export function mapDispatchToProps(dispatch) {
  return {
    getProvincesRequest: payload => dispatch(actions.getProvinces(payload)),
    getSelectionsRequest: (data, onSuccess, onError) =>
      dispatch(actions.getSelections({ data, onSuccess, onError })),
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(App);
