export const basename = process.env.PUBLIC_PATH || '/';
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const TOKEN_KEY = 'token';
export const ROLE_KEY = 'role';
export const USERNAME_KEY = 'username';
export const LOGIN_KEY = 'login';

export const ROOT_URI = process.env.ROOT_URI;
export const URL = process.env.URL;

export const ROUTE = {
  home: '/',
  login: '/login',
};
// theme constant
export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;
