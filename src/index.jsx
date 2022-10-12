/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import history from 'utils/history';
import { hot } from 'react-hot-loader/root';
import { ToastContainer } from 'react-toast';
import { RecoilRoot } from 'recoil';
import 'sanitize.css/sanitize.css';
// Import root app
import App from './containers/App';

// Import Language Provider
import LanguageProvider from './containers/LanguageProvider';
import ThemeProvider from './utils/theme';
import { LayoutProvider } from './context/LayoutContext';
import { UserProvider } from './context/UserContext';

// Load the favicon
// import '!file-loader?name=[name].[ext]!./images/favicon.ico';

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});
// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});
// Create redux store with history
const initialState = {};
export const mainStore = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const BaseApp = messages => {
  return (
    <Provider store={mainStore}>
      <RecoilRoot>
        <LanguageProvider messages={messages}>
          <ConnectedRouter history={history}>
            <ThemeProvider>
              <LayoutProvider>
                <UserProvider>
                  <>
                    <App />
                    <ToastContainer delay={3000} position="bottom-center" />
                  </>
                </UserProvider>
              </LayoutProvider>
            </ThemeProvider>
          </ConnectedRouter>
        </LanguageProvider>
      </RecoilRoot>
    </Provider>
  );
};
const HotBaseApp = hot(BaseApp);
const render = messages => {
  ReactDOM.render(<HotBaseApp messages={messages} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// // Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/vi.js'),
      ])
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
