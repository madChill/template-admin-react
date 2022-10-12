/* eslint-disable prettier/prettier */
import vi from 'react-intl/locale-data/vi';
import en from 'react-intl/locale-data/en';
import enTranslationMessages from './i18n/en.json';
import vnTranslationMessages from './i18n/vi.json';

import { addLocaleData } from 'react-intl'; //eslint-disable-line

addLocaleData([...en, ...vi]);

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
    'en',
    'vi',
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  vi: formatTranslationMessages('vi', vnTranslationMessages),
};

export {
  appLocales,
  formatTranslationMessages,
  translationMessages,
  DEFAULT_LOCALE,
};
