/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const key = 'applicationForm';
export const keyApp = 'AppContain';
export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
// @constants
export const GET_SHOWCASES = 'app/Header/GET_SHOWCASES';
export const GET_PROVINCES = 'app/Application/GET_PROVINCES';
export const GET_COUNTRIES = 'app/Application/GET_COUNTRIES';
export const GET_SELECTIONS = 'app/Application/GET_SELECTIONS';
export const GET_PHONE_ALLOW = 'app/Application/GET_PHONE_ALLOW';
export const GET_CURRENT_HOUSING = 'app/Application/GET_CURRENT_HOUSING';
export const GET_SUB_PRODUCT = 'app/Application/GET_SUB_PRODUCT';
export const GET_SELECTION_NEW = 'app/Application/GET_SELECTION_NEW';
