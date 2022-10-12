import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

import { validateString, validatePhone } from 'utils/helpers';

export const validate = values => {
  const errors = {};
  //   fullName, phone, email

  // else {
  //   delete errors.fullName;
  // }
  errors.fullName = validateString(
    values.fullName,
    'Không chứa kí tự đặc biệt và số',
    false,
    true
  );
  errors.phone = validatePhone(
    values.phone,
    'Không chứa kí tự đặc biệt và số',
    false,
    true
  );
  errors.phone = errors?.phone?.phoneNumber;
  // if (!values.phone) {
  //   errors.phone = 'Bạn chưa nhập trường này';
  // } else {
  //   delete errors.phone;
  // }
  if (!values.email) {
    errors.email = 'Bạn chưa nhập trường này';
  }
  if (!values.nationality) {
    errors.nationality = 'Bạn chưa nhập trường này';
  }
  return pickBy(errors, identity);
};
