/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

import actions from './actions';
// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  alertProperty: [], // severity="success", text:"hello", key: 1
  success: 0,
  successProvinces: 0,
  successCountries: 0,
  errorProvinces: null,
  errorCountries: null,
  provinces: [],
  selection: [],
  loadingProvinces: false,
  loadingCountries: false,
  loadingPhoneAllow: false,
  countries: [],
  phoneAllow: [],
  currentHousing: [],
  subProduct: [],
  row: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      // housing
      case actions.getCurrentHousing.REQUEST:
        draft.loading = true;
        break;
      case actions.getCurrentHousing.SUCCESS:
        draft.success = state.success + 1;
        draft.currentHousing = action.payload;
        break;
      case actions.getCurrentHousing.FAILURE:
        draft.error = action.payload;
        break;
      case actions.getCurrentHousing.FULFILL:
        draft.loading = false;
        break;
      case actions.getProvinces.REQUEST:
        draft.loadingProvinces = true;
        break;
      case actions.getProvinces.SUCCESS:
        draft.successProvinces = state.success + 1;
        draft.provinces = [...action.payload];
        break;
      case actions.getProvinces.FAILURE:
        draft.errorProvinces = action.payload;
        break;
      case actions.getProvinces.FULFILL:
        draft.loading = false;
        break;
      case actions.getCountries.REQUEST:
        draft.loadingCountries = true;
        break;
      case actions.getCountries.SUCCESS:
        draft.successCountries = state.success + 1;
        draft.countries = [...action.payload];
        break;
      case actions.getCountries.FAILURE:
        draft.errorCountries = action.payload;
        break;
      case actions.getCountries.FULFILL:
        draft.loading = false;
        break;
      //
      case actions.getSelections.REQUEST:
        draft.loadingCountries = true;
        break;
      case actions.getSelections.SUCCESS:
        draft.success = state.success + 1;
        draft.selection = [...action.payload];
        break;
      case actions.getSelections.FAILURE:
        // draft.errorCountries = action.payload;
        break;
      case actions.getSelections.FULFILL:
        draft.loading = false;
        break;
      // Phone allow
      case actions.getPhoneAllow.REQUEST:
        draft.loadingPhoneAllow = true;
        break;
      case actions.getPhoneAllow.SUCCESS:
        // draft.successCountries = state.success + 1;
        draft.phoneAllow = [...action.payload];
        break;
      case actions.getPhoneAllow.FAILURE:
        // draft.errorCountries = action.payload;
        break;
      case actions.getPhoneAllow.FULFILL:
        draft.loading = false;
        break;
      // sub product
      case actions.getSubProduct.REQUEST:
        break;
      case actions.getSubProduct.SUCCESS:
        // draft.successCountries = state.success + 1;
        draft.subProduct = [...action.payload];
        break;
      case actions.getSubProduct.FAILURE:
        // draft.errorCountries = action.payload;
        break;
      case actions.getSubProduct.FULFILL:
        draft.loading = false;
        break;
      default:
        draft.loading = false;
    }
  });

export default appReducer;
