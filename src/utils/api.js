import _ from 'lodash';
import { get, post, deleteData, put, download } from './request1';

import {
  GET_TODO_LIST,
  GET_DASHBOARD_STATISTIC,
  TOKEN_KEY,
  ROOT_URI,
} from './constants';

export const URL = ROOT_URI;

const storage = process.browser && localStorage;
export const apiList = {
  [GET_TODO_LIST]: 'todo1/',
  [GET_DASHBOARD_STATISTIC]: 'statistic',
  LIST_USERS: '/users',
  getCountries: '/countries',
  cards: '/credit-cards',
  addUser: '/register',
  roles: '/users/roles',
  units: '/users/units',
  user: id => `/users/${id}`,
  putUser: `/users/`,
  login: '/applications/adminlogin',
  listHousing: '/HHB/listCurrentHousing',
  submitBA: '/HHB/HHB-Application/',
  changeStatusApplication: '/HHB/csr-tracking/saveHHB',
  listAllSubProduct: '/HHB/sub-product-HHB',
  saveToTopUp: '/HHB/HHB-Applications/',
  updateNonePAOrPA: '/HHB/HHB-Application/',
  saveToBAReq: '/HHB/HHBApplication/',

  juicyScore: '/juicy-score/get-score/',
};

export function getEndPoint(endpoint) {
  return URL + apiList[endpoint];
}

export const getToken = () => {
  return storage.getItem(TOKEN_KEY);
};

export const updateStatusDetails = payload => {
  return post({
    url: apiList.updateStatusDetails,
    data: payload,
    apiName: 'updateStatusDetails',
  });
};

export const assignSaleUserToGroup = payload => {
  return post({
    url: apiList.assignSaleUserToGroup,
    // data: payload,
    params: payload,
    apiName: 'assignSaleUserToGroup',
  });
};

export const allocateAplications = payload => {
  return post({
    url: apiList.allocateAplications,
    data: payload,
    apiName: 'allocateAplications',
  });
};

export const getListUsers = payload => {
  return get({
    url: apiList.getListUsers,
    params: payload,
    apiName: 'getListUsers',
  });
};

export const getListTodos = () => {
  return get({
    url: apiList.GET_TODO_LIST,
    params: {},
    apiName: 'todoList',
  });
};

export const getDashBoardStatisticData = () => {
  return get({
    url: apiList.GET_DASHBOARD_STATISTIC,
    params: {},
    apiName: 'dashboardStatistic',
  });
};

export const getUsers = () => {
  return get({
    url: apiList.LIST_USERS,
    params: {},
    apiName: 'listUsers',
  });
};

export const addUser = () => {
  return post({
    url: apiList.addUser,
    data: {},
    apiName: 'addUser',
  });
};

export const getRolesaddUser = () => {
  return get({
    url: apiList.roles,
    data: {},
    apiName: 'getRolesaddUser',
  });
};

export const getUnitssaddUser = () => {
  return get({
    url: apiList.units,
    data: {},
    apiName: 'getUnitssaddUser',
  });
};
export const getListPhoneAllow = () => {
  return get({
    url: apiList.listPhoneAllow,
    data: {},
    apiName: 'getListPhoneAllow',
  });
};
export const getCategories = () => {
  return get({
    url: apiList.GET_CATEGORIES,
    params: {},
    apiName: 'listUsers',
  });
};

export const addPostApi = () => {
  return post({
    url: apiList.ADD_POST,
    data: {},
    apiName: 'addPostApi',
  });
};

export function saveNotes(appId, data) {
  // API update lý do cancel:
  return post({
    url: `${apiList.saveNotes(appId)}`,
    data,
    apiName: 'getListNotes',
  });
}

export const juicyGetScore = params => {
  return get({
    url: apiList.juicyScore,
    params,
  });
};
