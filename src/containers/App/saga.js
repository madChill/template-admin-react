import { takeLatest, put, call } from 'redux-saga/effects';
import { get } from 'lodash';
import {
  addHHBApplicationForm,
  getProvinces,
  getCountries,
  getSelections,
  checkLOSHHBApplicationForm,
  getListPhoneAllow,
  getApplication,
  getListHousing,
  saveToBARequest,
  getListAllSubProduct,
  selectionNew,
  // @saga4
} from 'utils/api';
import actions from './actions';

// saga CRUD application.

export function* getCurrentHousingRequest() {
  try {
    yield put(actions.getCurrentHousing.request());
    const housingData = yield call(getListHousing);
    const mapdataHousing = housingData.map(entry => {
      return {
        vi: entry.values.vi,
        en: entry.values.en,
        id: entry.id,
      };
    });
    yield put(actions.getCurrentHousing.success(mapdataHousing));
  } catch (err) {
    const errs = get(err, 'response.data.errorDescription');
    yield put(actions.getCurrentHousing.failure(errs));
  } finally {
    yield put(actions.getCurrentHousing.fulfill());
  }
}

export function* getApplicationRequest(payload) {
  const { id, onSuccess, onError } = payload.payload;
  try {
    yield put(actions.getApplicationDetail.request());
    const applicationDetailData = yield call(getApplication, id);
    onSuccess(applicationDetailData);
  } catch (err) {
    const errs = get(err, 'response.data.errorDescription');
    onError(errs);
  }
}
export function* getSaveApplicationRequest(payload) {
  const { dataForm, onSuccess, onError } = payload.payload;
  try {
    yield put(actions.addApplication.request());
    const applicationData = yield call(addHHBApplicationForm, dataForm);
    onSuccess(applicationData);
    yield put(actions.addApplication.success(applicationData));
  } catch (err) {
    const errs = get(err, 'response.data.errorDescription');
    onError(errs);
    yield put(actions.addApplication.failure(err));
  } finally {
    yield put(actions.addApplication.fulfill());
  }
}
export function* getListPhoneAllowRequest(payload) {
  try {
    yield put(actions.getPhoneAllow.request());
    const listPhone = yield call(getListPhoneAllow, payload);
    yield put(actions.getPhoneAllow.success(listPhone));
  } catch (err) {
    yield put(actions.getPhoneAllow.failure(err));
  } finally {
    yield put(actions.getPhoneAllow.fulfill());
  }
}
export function* checkLOSApplicationRequest(payload) {
  try {
    yield put(actions.checkLOSApplication.request());
    const checkLOSS = yield call(checkLOSHHBApplicationForm, payload);
    yield put(actions.checkLOSApplication.success(checkLOSS));
  } catch (err) {
    yield put(actions.checkLOSApplication.failure(err));
  } finally {
    yield put(actions.checkLOSApplication.fulfill());
  }
}
export function* getProvincesRequest(payload) {
  try {
    yield put(actions.getProvinces.request());
    const provincesData = yield call(getProvinces, payload);
    yield put(actions.getProvinces.success(provincesData));
  } catch (err) {
    yield put(actions.getProvinces.failure(err));
  } finally {
    yield put(actions.getProvinces.fulfill());
  }
}
// @saga2
export function* getCountriesRequest(payload) {
  try {
    yield put(actions.getCountries.request());
    const provincesData = yield call(getCountries, payload);
    yield put(actions.getCountries.success(provincesData));
  } catch (err) {
    yield put(actions.getCountries.failure(err));
  } finally {
    yield put(actions.getCountries.fulfill());
  }
}

export function* getSelectionsRequest(payload) {
  const { data, onSuccess, onError } = payload.payload;
  try {
    const list = yield call(getSelections, data);
    onSuccess(list);
  } catch (err) {
    onError(err);
  }
}
export function* saveToBAReq(payload) {
  const { data, onSuccess, onError } = payload.payload;
  try {
    const applicationDetailData = yield call(saveToBARequest, data);
    onSuccess(applicationDetailData);
  } catch (err) {
    const errs = get(err, 'response.data.errorDescription');
    onError(errs);
  }
}
export function* getSubProductRequest() {
  try {
    yield put(actions.getSubProduct.request());
    const subProductData = yield call(getListAllSubProduct);
    yield put(actions.getSubProduct.success(subProductData));
    // yield put(actions.msgQueue.show({ severity: 'success', text: 'Thao tác thành công' }));
  } catch (err) {
    yield put(actions.getSubProduct.failure(err));
  } finally {
    yield put(actions.getSubProduct.fulfill());
  }
}
export function* getSelectionsNewRequest(payload) {
  const { onSuccess, onError } = payload.payload;
  try {
    const list = yield call(selectionNew);
    onSuccess(list);
  } catch (err) {
    onError(err);
  }
}

export default function* dataShowcases() {
  yield takeLatest(actions.getProvinces.TRIGGER, getProvincesRequest);
  yield takeLatest(actions.getSelections.TRIGGER, getSelectionsRequest);
  // @saga3
}
