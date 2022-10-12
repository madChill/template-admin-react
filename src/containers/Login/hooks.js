import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { ROUTE, ROLES, LOGIN_KEY } from 'utils/constants';
import { person } from 'utils/helpers';

import * as Api from 'utils/api';
import { toast } from 'react-toast';

export function useLogic(init = { isOnline: false }) {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  // phone
  //   useEffect(() => {
  //     function handleStatusChange(status) {
  //       setIsOnline(status.isOnline);
  //     }
  //     Api.login()(friendID, handleStatusChange);
  //   }, []);

  const Login = values => {
    setloading(true);
    person.phoneNum = values?.phone;
    person.fullName = values?.fullName;
    person.email = values?.email;
    history.push(`${ROUTE.otp}?mobile=${values?.phone}`);
    return;
    return Api.login(values)
      .then(res => {
        const d = new Date();
        const countNumberOfLogin = localStorage.getItem('countNumberOfLogin');
        d.setTime(d.getTime() + 2500 * 36000);
        localStorage.setItem('username', values.username.toLowerCase());
        localStorage.setItem(LOGIN_KEY, res?.login);
        localStorage.setItem('userEmail', res && res.email);
        localStorage.setItem(
          'countNumberOfLogin',
          Number(countNumberOfLogin) + 1
        );
        localStorage.setItem('firstLogin', 1);

        const productType = !_.isEmpty(res.type) ? res.type : 'CC';
        localStorage.setItem(
          'productType',
          productType === 'CCUPL' ? 'CC' : productType
        );
        // localStorage.setItem('productType', productType)
        localStorage.setItem('showChangeProductTypeTab', productType);

        const flowApp = !_.isEmpty(res.flowApp) ? res.flowApp : 'Combine';
        localStorage.setItem(
          'journey',
          flowApp === 'All' ? 'Combine' : flowApp
        );

        if (!_.isEmpty(res, 'channelId')) {
          localStorage.setItem('channelId', res.channelId);
        }
        if (res.branchId !== null && res.branchId !== undefined) {
          localStorage.setItem('branchId', res.branchId);
        }
        if (res.groupId !== null && res.groupId !== undefined) {
          localStorage.setItem('groupId', res.groupId);
        }
        if (
          [
            ROLES.ROLE_TS_ADMIN_CHANNEL,
            ROLES.ROLE_TS_SALE,
            ROLES.ROLE_TS_TEAMLEAD,
          ].includes(localStorage.role)
        ) {
          localStorage.setItem('saleManagerId', res.id);
          localStorage.setItem('groupHubId', res.groupHubId);
        }
        if (
          [
            ROLES.ROLE_TS_ADMIN_CHANNEL,
            ROLES.ROLE_TS_SALE,
            ROLES.ROLE_TS_TEAMLEAD,
          ].includes(localStorage.role)
        ) {
          localStorage.setItem('saleManagerId', res.saleManagerId);
          localStorage.setItem('saleCode', res.saleCode || '');
        }
        if (res.id) {
          localStorage.setItem('userId', res.id);
        }
        // if (res.type) {
        //   localStorage.setItem('type', res.type)
        // }
        if (res.branhName) {
          localStorage.setItem('branhName', res.branhName);
        }
        if (_.get(res, 'limitUpper')) {
          localStorage.setItem('limitUpper', _.get(res, 'limitUpper'));
        }
        if (_.get(res, 'phoneNumber')) {
          localStorage.setItem('phoneNumberSale', _.get(res, 'phoneNumber'));
        }
        if (_.get(res, 'limitLower')) {
          localStorage.setItem('limitLower', _.get(res, 'limitLower'));
        }
        if (_.get(res, 'limitUpperValue')) {
          localStorage.setItem(
            'limitUpperValue',
            _.get(res, 'limitUpperValue')
          );
        }
        if (_.get(res, 'limitLowerValue')) {
          localStorage.setItem(
            'limitLowerValue',
            _.get(res, 'limitLowerValue')
          );
        }
        if (_.get(res, 'partnerName')) {
          localStorage.setItem('partnerName', _.get(res, 'partnerName'));
        }
        if (_.get(res, 'partnerCode')) {
          localStorage.setItem('partnerCode', _.get(res, 'partnerCode'));
        }
        if (_.get(res, 'typeFS')) {
          localStorage.setItem('typeFS', _.get(res, 'typeFS'));
        }
        const changePass = _.get(res, 'changePassword', false);
        Object.keys(localStorage).forEach(key => {
          localStorage.setItem(key, localStorage.getItem(key));
        });
        if (!changePass) {
          if (
            [
              ROLES.ROLE_TS_ADMIN_CHANNEL,
              ROLES.ROLE_TS_SALE,
              ROLES.ROLE_TS_TEAMLEAD,
            ].includes(localStorage.role)
          ) {
            history.push(ROUTE.listApplication);
          } else {
            history.push(ROUTE.listApplication);
          }
        } else {
          // props.history.push(
          //   `/adminManagement/change-password/${values.username.toLowerCase()}?needChangePass=true`
          // );
        }
      })
      .finally(() => setloading(false));
  };
  return {
    Login,
    loading,
  };
}
