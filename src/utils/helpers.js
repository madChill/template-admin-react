import queryString from 'query-string';
import _, { compact, isEmpty } from 'lodash';
import moment from 'moment';
import { mainStore } from 'index';
import { TOKEN_KEY, ROLES, ROLE_KEY, ROOT_URI } from './constants';
// import { func } from 'prop-types';

export const person = {
  set phoneNum(phone) {
    return phone && localStorage.setItem('phoneNum', phone);
  },
  get phoneNum() {
    return localStorage.getItem('phoneNum');
  },
  set fullName(phone) {
    return phone && localStorage.setItem('fullName', phone);
  },
  get fullName() {
    return localStorage.getItem('fullName');
  },
  set email(phone) {
    localStorage.setItem('email', phone);
  },
  get email() {
    return localStorage.getItem('email');
  },
  set citizenship(phone) {
    localStorage.setItem('citizenship', phone);
  },
  get citizenship() {
    return localStorage.getItem('citizenship');
  },
  set applicationId(phone) {
    return phone && localStorage.setItem('appId', phone);
  },
  get applicationId() {
    return localStorage.getItem('appId');
  },
  set finalApprovedLimit(phone) {
    return phone && localStorage.setItem('finalApprovedLimit', phone);
  },
  get finalApprovedLimit() {
    return localStorage.getItem('finalApprovedLimit');
  },
  set token(val) {
    if (val) {
      localStorage.setItem(TOKEN_KEY, val);
    }
  },
  get token() {
    return localStorage.getItem(TOKEN_KEY);
  },
  set appId(appId) {
    return appId && localStorage.setItem('appId', JSON.stringify(appId));
  },
  get appId() {
    return localStorage.getItem('appId');
  },
};

export const queryParse = string => {
  return queryString.parse(string, { arrayFormat: 'comma' });
};
export const stringParse = query => {
  return queryString.stringify(query, {
    arrayFormat: 'comma',
    skipNull: true,
    skipEmptyString: true,
  });
};
export const trimAllWhiteSpaces = string => {
  if (string) {
    const replaceWhiteSpacesInsideString = string.replace(/\s+/g, ' ');
    return replaceWhiteSpacesInsideString.trim();
  }
  return null;
};

export const checkEnableCompleteDocs = ({
  requiredDocs,
  currentIsPermanent,
  state, // list of docs
  permanentAddress,
  // dispatchState,
}) => {
  const idProofLength = state.idProof?.length;
  const residenceProofLength = state.residenceProof?.length;
  const additionalResidenceProofLength = state.additionalResidenceProof?.length;
  const employmentProofLength = state.employmentProof?.length;
  const financialProofLength = state.financialProof?.length;
  const appFormLength = state.appForm?.length;
  const signatureLength = state.signature?.length;
  let checkAddProof = true;
  if (
    permanentAddress &&
    permanentAddress.district &&
    permanentAddress.allowed === '1'
  ) {
    checkAddProof = false;
  }
  let showCompleteDOcs = true;
  let msg = '';
  if (
    requiredDocs &&
    requiredDocs.indexOf('IdProff') > -1 &&
    idProofLength <= 0
  ) {
    showCompleteDOcs = false;
    msg = 'idProof';
  }
  if (
    requiredDocs &&
    requiredDocs.indexOf('ResidenceProof') > -1 &&
    residenceProofLength <= 0
  ) {
    showCompleteDOcs = false;
    msg = 'residenceProof';
  }
  if (
    requiredDocs &&
    requiredDocs.indexOf('AdditionalResidenceProof') > -1 &&
    !currentIsPermanent &&
    checkAddProof &&
    additionalResidenceProofLength <= 0
  ) {
    msg = 'additionalResidenceProof';
    showCompleteDOcs = false;
  }
  if (
    requiredDocs &&
    requiredDocs.indexOf('EmploymentProof') > -1 &&
    employmentProofLength <= 0
  ) {
    msg = 'employmentProof';

    showCompleteDOcs = false;
  }
  if (
    requiredDocs &&
    requiredDocs.indexOf('FinancialProof') > -1 &&
    financialProofLength <= 0
  ) {
    msg = 'financialProof';

    showCompleteDOcs = false;
  }

  if (
    requiredDocs &&
    requiredDocs.indexOf('PropertyStorage') > -1 &&
    state.PropertyStorage?.length <= 0
  ) {
    msg = 'propertyStorage';
    showCompleteDOcs = false;
  }
  if (
    requiredDocs &&
    requiredDocs.indexOf('KYCresult') > -1 &&
    state.KYCresult?.length <= 0
  ) {
    msg = 'KYCresult';
    showCompleteDOcs = false;
  }
  if (
    requiredDocs &&
    requiredDocs.indexOf('KYC') > -1 &&
    state.KYC?.length <= 0
  ) {
    msg = 'KYC';

    showCompleteDOcs = false;
  }
  if (
    requiredDocs &&
    requiredDocs.indexOf('Businessproof') > -1 &&
    state.Businessproof?.length <= 0
  ) {
    msg = 'Businessproof';

    showCompleteDOcs = false;
  }
  if (
    requiredDocs &&
    requiredDocs.indexOf('Incomeproof') > -1 &&
    state.Incomeproof?.length <= 0
  ) {
    msg = 'Incomeproof';

    showCompleteDOcs = false;
  }

  // if (localStorage.channelId !== '0' && appFormLength <= 0) {
  //   showCompleteDOcs = false;
  // }
  // if (localStorage.channelId !== '0' && signatureLength <= 0) {
  //   showCompleteDOcs = false;
  // }

  // props.change('checkEnableCompleteDocs', showCompleteDOcs);
  // dispatchState({
  //   type: 'changeState',
  //   stateData: {
  //     showCompleteDOcs,
  //   },
  // });

  return showCompleteDOcs;
};

export const filterMenuWithRole = (ROUTER_TREE = []) => {
  const role = localStorage.getItem(ROLE_KEY);
  const RoleIndex = [
    ROLES.ROLE_TS_ADMIN_CHANNEL,
    ROLES.ROLE_TS_TEAMLEAD,
    ROLES.ROLE_TS_SALE,
  ];
  const getIndexRole = RoleIndex.findIndex(i => i === role);
  if (!getIndexRole && getIndexRole !== 0) return [];
  return compact(
    ROUTER_TREE.map(item => {
      if (Number(item.role[getIndexRole])) return item;
      return null;
    })
  );
};

export const validateName = val => {
  if (val) {
    const listMatch = String(val || '').match(
      /([A-Za-z\s??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????])/g
    );
    if (String(val || '').length !== listMatch.length) {
      return 'Kh??ng ch???a k?? t??? ?????c bi???t v?? s???';
    }
    return null;
  }
  return 'Kh??ng ch???a k?? t??? ?????c bi???t v?? s???';
};

export function validateString(
  value,
  errorMessage = 'error',
  alphaNumericOnly = false,
  specialCharacterNumer = false
) {
  value = value || '';
  if (value) {
    value = value.toString().trim();
  }
  let errors;
  const reg = /[0-9`~@!#$^%&*()_+=\\\-[\]';,./{}|"":<>?]/g;
  if (!value) {
    errors = errorMessage;
  } else if (alphaNumericOnly && !/^[a-zA-Z0-9]+$/i.test(value)) {
    errors = errorMessage;
  } else if (specialCharacterNumer && reg.test(value)) {
    errors = errorMessage;
  }

  return errors;
}

export function addError(error, key, value) {
  if (value) {
    if (!error) {
      error = {};
    }
    error[key] = value;
  }

  return error;
}

export function validatePhone(
  phone,
  errorMessage = 'error',
  withExt = false,
  mobile = true
) {
  let errors;
  let phoneNumber = _.isObject(phone)
    ? phone?.phoneNumber?.toString()
    : phone
    ? phone.toString()
    : '';
  const pattext = /^[0-9]*$/i;
  const patt = /^[0-9]*$/i;
  if (!phone) {
    errors = {
      countryCode: errorMessage,
      phoneNumber: errorMessage,
    };
    if (withExt) {
      errors.ext = errorMessage;
    }
    return errors;
  }

  if (!phoneNumber || patt.test(phoneNumber) === false) {
    errors = addError(errors, 'phoneNumber', errorMessage);
  }

  if (!phoneNumber || phoneNumber.substring(0, 2) === '00') {
    errors = addError(
      errors,
      'phoneNumber',
      'Xin l???i qu?? kh??ch, ph???n ??i???n s??? ??i???n tho???i qu?? kh??ch v???a ??i???n kh??ng h???p l???'
    );
  }
  if (mobile) {
    if (
      !phoneNumber ||
      (phoneNumber.substring(0, 1) === '0' && phoneNumber.length !== 10)
    ) {
      errors = addError(
        errors,
        'phoneNumber',
        'Xin l???i qu?? kh??ch, ph???n ??i???n s??? ??i???n tho???i qu?? kh??ch v???a ??i???n kh??ng h???p l???'
      );
    } else if (
      !phoneNumber ||
      (phoneNumber.substring(0, 1) !== '0' && phoneNumber.length !== 9)
    ) {
      errors = addError(
        errors,
        'phoneNumber',
        'Xin l???i qu?? kh??ch, ph???n ??i???n s??? ??i???n tho???i qu?? kh??ch v???a ??i???n kh??ng h???p l???'
      );
    }
  } else if (
    !phoneNumber ||
    ((phoneNumber.substring(0, 2) === '02' ||
      phoneNumber.substring(0, 2) === '01') &&
      phoneNumber.length !== 11)
  ) {
    errors = addError(
      errors,
      'phoneNumber',
      'Xin l???i qu?? kh??ch, ph???n ??i???n s??? ??i???n tho???i qu?? kh??ch v???a ??i???n kh??ng h???p l???'
    );
  } else if (
    !phoneNumber ||
    ((phoneNumber.substring(0, 1) === '2' ||
      (phoneNumber.substring(0, 1) === '0' &&
        phoneNumber.substring(0, 2) !== '02' &&
        phoneNumber.substring(0, 2) !== '01')) &&
      phoneNumber.length !== 10)
  ) {
    errors = addError(
      errors,
      'phoneNumber',
      'Xin l???i qu?? kh??ch, ph???n ??i???n s??? ??i???n tho???i qu?? kh??ch v???a ??i???n kh??ng h???p l???'
    );
  } else if (
    !phoneNumber ||
    (phoneNumber.substring(0, 1) !== '2' &&
      phoneNumber.substring(0, 1) !== '0' &&
      phoneNumber.substring(0, 2) !== '02' &&
      phoneNumber.substring(0, 2) !== '01' &&
      (phoneNumber.length < 7 || phoneNumber.length > 9))
  ) {
    errors = addError(
      errors,
      'phoneNumber',
      'Xin l???i qu?? kh??ch, ph???n ??i???n s??? ??i???n tho???i qu?? kh??ch v???a ??i???n kh??ng h???p l???'
    );
  }

  const phoneAllows = mainStore.getState()?.AppContain?.phoneAllow;

  if (
    phoneAllows &&
    phoneAllows.length > 0 &&
    mobile &&
    (phone?.phoneNumber || phone)
  ) {
    if (
      phoneNumber &&
      phoneNumber.substring(1, 0) !== '0' &&
      phoneNumber.length < 15
    ) {
      phoneNumber = `0${phoneNumber}`;
    }
    const exist = phoneAllows.filter(
      p => p.phoneNumber === phoneNumber.substring(0, 3)
    );
    if (exist && exist.length <= 0) {
      errors = addError(
        errors,
        'phoneNumber',
        'Xin l???i qu?? kh??ch, ph???n ??i???n s??? ??i???n tho???i qu?? kh??ch v???a ??i???n kh??ng h???p l???'
      );
    }
  }

  if (withExt) {
    if (phone && phone?.ext && pattext.test(phone?.ext) === false) {
      errors = addError(errors, 'ext', errorMessage);
    }
  }

  return errors;
}

export function validateEmail(email, errEmpty, errInvalid) {
  let errors;
  if (!email) {
    errors = errEmpty;
  } else if (
    !/^[a-zA-Z0-9!#$%&???*+/=?^_{|}~-]+(?:\.[a-zA-Z0-9!#$%&???*+/=?^_{|}~-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/i.test(
      email
    )
  ) {
    // eslint-disable-line
    errors = errInvalid;
  }

  return errors;
}

export function validatePassportCard({
  num = '',
  allowedType = [8, 9, 12],
  require = false,
  military = false,
}) {
  // allowedType
  // 7: passport, 8, 9, 12, 13: cccd, cmnd
  if (!num && require) {
    return 'B???n ch??a nh???p tr?????ng n??y';
  }
  const length = num?.length;
  if (!allowedType.includes(length)) {
    // return `????? d??i ch??? cho ph??p ${allowedType.toString()}`;
    return `?????nh d???ng ch??a ch??nh x??c, vui l??ng ki???m tra l???i`;
  }
  if ([9].includes(length) && !/[0-9]{12}|[0-9]{9}/.test(num)) {
    return `CCCD, CMND ch??? cho ph??p nh???p ch??? s???`;
  }
  if (military) {
    if ([12].includes(length) && !/[0-9]{12}/.test(num)) {
      return `CCCD, CMND ch??? cho ph??p nh???p ch??? s??? ho???c ch??? s???`;
    }
  } else if ([12].includes(length) && !/[0-9a-zA-Z]{12}/.test(num)) {
    return `CCCD, CMND ch??? cho ph??p nh???p ch??? s??? ho???c ch??? s???`;
  }

  // if ([7].includes(length) && !/[0-9A-Za-z]{7}/.test(num)) {
  //   return `H??? chi???u ch??? cho ph??p ch??? s??? ho???c ch??? c??i`;
  // }
  if ([8].includes(length) && !/[A-Za-z0-9][0-9]{7}/.test(num)) {
    return `CCCD, CMND qu??n ?????i, h??? chi???u ch??? cho ph??p nh???p ch??? s??? ho???c ch??? c??i`;
  }
  return null;
}

export function validateTimeToServer(time) {
  return moment(time).format('YYYY-MM-DDThh:mm:ss');
}

export function getImageCard(id) {
  return `${ROOT_URI}/images/${id}`;
}

export function currencyFromNum(num) {
  if (num / 1000000 > 1000) {
    return `${num / 1000000000} t??? ?????ng`;
  }
  return `${num / 1000000} tri???u ?????ng`; /* $2,500.00 */
}

// export function setPhoneStorage(phone){
//   localStorage.setItem('phoneNum', phone);
// }
export function iOS() {
  const isIOS =
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document) ||
    navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  return isIOS;
}
export const checkSafari = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return isSafari;
};
export const checkChromeOrFireFox = () => {
  const isChrome = !!window.chrome;
  const isFirefox = typeof InstallTrigger !== 'undefined';
  return isChrome || isFirefox;
};
// Opera 8.0+
// const isOpera =
//   (!!window.opr && !!opr.addons) ||
//   !!window.opera ||
//   navigator.userAgent.indexOf(' OPR/') >= 0;

// // Firefox 1.0+
// const isFirefox = typeof InstallTrigger !== 'undefined';

// // Safari 3.0+ "[object HTMLElementConstructor]"
// const isSafari =
//   /constructor/i.test(window.HTMLElement) ||
//   (function (p) {
//     return p.toString() === '[object SafariRemoteNotification]';
//   })(
//     !window['safari'] ||
//       (typeof safari !== 'undefined' && window['safari'].pushNotification)
//   );

// // Internet Explorer 6-11
// const isIE = /*@cc_on!@*/ false || !!document.documentMode;

// // Edge 20+
// const isEdge = !isIE && !!window.StyleMedia;

// // Chrome 1 - 79
// const isChrome =
//   !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// // Edge (based on chromium) detection
// const isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') != -1;

// // Blink engine detection
// const isBlink = (isChrome || isOpera) && !!window.CSS;
function waitFor(millSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millSeconds);
  });
}

export async function retryPromiseWithDelay(promise, nthTry, delayTime) {
  try {
    const res = await promise;
    return res;
  } catch (e) {
    if (nthTry === 0) {
      return Promise.reject(e);
    }
    await waitFor(delayTime);
    return retryPromiseWithDelay(promise, nthTry - 1, delayTime);
  }
}

export function getNameFromFullName(name) {
  if (name) {
    return name
      .match(/\s\w/g)
      .reverse()
      .slice(0, 2)
      .join('')
      .replace(/\s/g, '');
  }
  return '';
}
export function nonAccentVietnamese(str) {
  str = str.toLowerCase();
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a');
  str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e');
  str = str.replace(/??|??|???|???|??/g, 'i');
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o');
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u');
  str = str.replace(/???|??|???|???|???/g, 'y');
  str = str.replace(/??/g, 'd');
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huy???n s???c h???i ng?? n???ng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ??, ??, ??, ??, ??
  return str;
}
