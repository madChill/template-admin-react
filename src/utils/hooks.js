import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { ROUTE, ROLES, LOGIN_KEY, screenStatus } from 'utils/constants';
import { person, validateTimeToServer } from 'utils/helpers';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectionAppDetail, selectionRouteMatrix } from 'atoms/global';
import * as Api from 'utils/api';
import { toast } from 'react-toast';

export function useLogicRedirect() {
  const history = useHistory();
  const redirectNext = appDetail => {
    const jarvisCustomerStep = appDetail?.customerInfo?.jarvisCustomerStep;
    // const vkyc_link = appDetail?.customerInfo?.vkyc_link;
    if (jarvisCustomerStep === screenStatus.wf1) {
      return history.replace(ROUTE.form1);
    }
    if (jarvisCustomerStep === screenStatus.wf3) {
      return history.replace(ROUTE.form3);
    }
    if (jarvisCustomerStep === screenStatus.need_update_cif) {
      return history.replace(ROUTE.reject);
    }
    if (
      [
        screenStatus.reject_wf2,
        screenStatus.reject_ocr,
        screenStatus.reject_vkyc,
        screenStatus.reject_liveness,
      ].includes(jarvisCustomerStep)
    ) {
      return history.replace(ROUTE.reject);
    }
    if (jarvisCustomerStep === screenStatus.liveness_guide) {
      return history.replace(ROUTE.LivenessGuideline);
    }
    if (jarvisCustomerStep === screenStatus.wf2) {
      return history.replace(ROUTE.workFlowTwo);
    }
    if (jarvisCustomerStep === screenStatus.waiting_for_ressult) {
      return history.replace(ROUTE.waitForResult);
    }
    // if (jarvisCustomerStep === screenStatus.vkyc_connection) {
    //   if (!vkyc_link) {
    //     toast.error('VKYC link không tồn tại!');
    //   } else {
    //     return history.replace(vkyc_link);
    //   }
    // }
    if (
      [
        screenStatus.sale_support_liveness,
        screenStatus.sale_support_ocr,
        screenStatus.sale_support_wf1,
        screenStatus.sale_support_wf2,
      ].includes(jarvisCustomerStep)
    ) {
      return history.replace(ROUTE.sales);
    }
    if (
      [
        screenStatus.complete_etb_vkyc,
        screenStatus.complete_pkyc,
        screenStatus.complete_pkyc_vpo,
      ].includes(jarvisCustomerStep)
    ) {
      return history.replace(ROUTE.completeScreen);
    }
    if (jarvisCustomerStep === screenStatus.ocr_guide) {
      return history.replace(ROUTE.OCRGuideline);
    }
    if (jarvisCustomerStep === screenStatus.offer_limit) {
      return history.replace(ROUTE.offerLimit);
    }
    if (jarvisCustomerStep === screenStatus.confirm_econtract) {
      return history.replace(ROUTE.ConfirmationEContract);
    }
    if (jarvisCustomerStep === screenStatus.vkyc_guide) {
      return history.replace(ROUTE.VKYCGuideline);
    }
    if (jarvisCustomerStep === screenStatus.vkyc_connection) {
      return history.replace(ROUTE.vkycConnection);
    }
    if (
      [screenStatus.complete_pkyc, screenStatus.complete_pkyc_vpo].includes(
        jarvisCustomerStep
      )
    ) {
      return history.replace(ROUTE.completeScreen);
    }
    return history.replace(ROUTE.form1);
  };
  return {
    redirectNext,
  };
}

export function useAppDetail(init = { forceUpdate: 0 }) {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [error1, seterror1] = useState(false);
  const [appDetail, setappDetail] = useState({});

  const [DetailApp, setDetailAppGlobal] = useRecoilState(selectionAppDetail);
  useEffect(() => {
    // && isEmpty(DetailApp)
    if (person?.appId) {
      setloading(true);
      Api.appDetail({ appId: person?.appId })
        .then(data => {
          setappDetail(data);
          setDetailAppGlobal({ ...DetailApp, ...data });
        })
        .catch(error => {
          seterror1(error.response?.data?.description);
        })
        .finally(() => setloading(false));
    }
  }, []);
  return {
    loading,
    appDetail,
  };
}

export function useLogicNextScreen(status) {
  const history = useHistory();
  const appDetail = useRecoilValue(selectionAppDetail);
  const routeMatrix = useRecoilValue(selectionRouteMatrix);
  const isAllowEdit = useMemo(
    () =>
      routeMatrix[status]?.find(
        i => i === appDetail?.jarvisCustomerDto?.jarvisCustomerStep
      ),
    [routeMatrix, appDetail?.jarvisCustomerDto?.jarvisCustomerStep]
  );
  const isWrongPath =
    status !== appDetail?.jarvisCustomerDto?.jarvisCustomerStep;
  // if (routeMatrix[status] && appDetail?.jarvisCustomerDto?.jarvisCustomerStep) {
  //   isAllowEdit = routeMatrix[status].find(
  //     i => i === appDetail?.jarvisCustomerDto?.jarvisCustomerStep
  //   );
  // }

  const redirectNext = jarvisCustomerStep => {
    // const jarvisCustomerStep = appDetail?.jarvisCustomerDto?.jarvisCustomerStep;
    if (jarvisCustomerStep === screenStatus.wf1) {
      return history.push(ROUTE.form1);
    }
    if (jarvisCustomerStep === screenStatus.wf3) {
      return history.push(ROUTE.form3);
    }
    if (jarvisCustomerStep === screenStatus.need_update_cif) {
      return history.replace(ROUTE.reject);
    }
    if (
      [
        screenStatus.reject_wf2,
        screenStatus.reject_ocr,
        screenStatus.reject_vkyc,
        screenStatus.reject_liveness,
      ].includes(jarvisCustomerStep)
    ) {
      return history.push(ROUTE.reject);
    }
    if (jarvisCustomerStep === screenStatus.liveness_guide) {
      return history.push(ROUTE.LivenessGuideline);
    }
    if (jarvisCustomerStep === screenStatus.wf2) {
      return history.push(ROUTE.workFlowTwo);
    }
    if (jarvisCustomerStep === screenStatus.waiting_for_ressult) {
      return history.push(ROUTE.waitForResult);
    }
    if (
      [
        screenStatus.sale_support_liveness,
        screenStatus.sale_support_ocr,
        screenStatus.sale_support_wf1,
        screenStatus.sale_support_wf2,
      ].includes(jarvisCustomerStep)
    ) {
      return history.push(ROUTE.sales);
    }
    if (
      [
        screenStatus.complete_etb_vkyc,
        screenStatus.complete_pkyc,
        screenStatus.complete_pkyc_vpo,
      ].includes(jarvisCustomerStep)
    ) {
      return history.push(ROUTE.completeScreen);
    }
    if (jarvisCustomerStep === screenStatus.ocr_guide) {
      return history.push(ROUTE.OCRGuideline);
    }
    if (jarvisCustomerStep === screenStatus.offer_limit) {
      return history.push(ROUTE.offerLimit);
    }
    if (jarvisCustomerStep === screenStatus.confirm_econtract) {
      return history.push(ROUTE.ConfirmationEContract);
    }
    if (jarvisCustomerStep === screenStatus.vkyc_connection) {
      return history.replace(ROUTE.vkycConnection);
    }
    if (jarvisCustomerStep === screenStatus.vkyc_guide) {
      return history.push(ROUTE.VKYCGuideline);
    }
    if (
      [screenStatus.complete_pkyc, screenStatus.complete_pkyc_vpo].includes(
        jarvisCustomerStep
      )
    ) {
      return history.push(ROUTE.completeScreen);
    }
    return history.push(ROUTE.form1);
  };

  const nextScreen = (cb = () => {}) => {
    if (isAllowEdit) return cb();
    return Api.getStep(person.appId)
      .then(res => {
        if (status !== res?.jarvisCustomerStep) {
          // wrong path
          return redirectNext(res?.jarvisCustomerStep);
        }
        return cb();
      })
      .catch((err) => {
        return redirectNext();
      });
    // return cb();
  };
  return { isWrongPath, isAllowEdit, nextScreen };
}

export function useLogicLang() {
  return {
    lang: 'vi',
  };
}
