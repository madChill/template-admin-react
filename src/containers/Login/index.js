/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useFormik } from 'formik';
// import TextField from '@material-ui/core/TextField';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Button } from '@material-ui/core';
import { TOKEN_KEY } from 'utils/constants';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import TextField from '@material-ui/core/TextField';
import TextField from 'components/TextField';
import SelectInput from 'components/SelectInput';

import Autocomplete from '@material-ui/lab/Autocomplete';
// import IconFamily from 'assets/login1/family.svg';
// import IconCheck from 'assets/login1/check.svg';
// import IconCheck from 'assets/login/check.svg';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import LoadingButton from 'components/LoadingButton';
import useStyles from './style';
import { useLogic } from './hooks';
import { validate } from './helper';
import actions from './actions';
import { key, keyApp } from './constants';
import saga from './saga';
import reducer from './reducer';

export function Login(props) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key: keyApp, reducer });
  const classes = useStyles();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const logic = useLogic();
  // function onSubmitForm(values) {
  //   useLogic.Login
  // }
  const [age, setAge] = React.useState('');
  const [addMore, setaddMore] = React.useState(1);

  const handleChange = event => {
    setAge(event.target.value);
  };

  React.useEffect(() => {
    // getRequetPushWaitActivityGL1();
    // props.getListPhoneAllowRequest();
    // props.getCountriesRequest();
  }, []);

  React.useEffect(() => {
  }, []);
  const formik = useFormik({
    validate,
    enableReinitialize: true,
    initialValues: {
      fullName: null,
      phone: null,
      email: null,
      dob: new Date('01/01/1990'),
      nationality: { value: '1', label: 'Việt Nam' },
    },
    // validate,
    onSubmit: logic.Login,
  });

  return (
    <div className={classes.root}>
      <div className={clsx(classes.loginContainer, 'loginInput')}>
        <div className={classes.title}>
          <p
            style={{
              background:
                '-webkit-linear-gradient(0deg, #1D4289 0%, #00B74F 30%)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}
          >
            Đăng ký ngay, nhận thẻ liền tay
          </p>{' '}
        </div>
        <div className={classes.title2}>
          <img alt="" className={classes.addMoreButtonImg} src={IconCheck} />{' '}
          Hạn mức thẻ lên đến 100 triệu
        </div>
        <div className={classes.title2}>
          <img alt="" className={classes.addMoreButtonImg} src={IconCheck} />{' '}
          Trả kết quả chỉ trong 5 phút
        </div>

        {/* <img src={logoImg} alt="vp bank logo" className={classes.logo} /> */}
        <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
          <div className={classes.formLayout}>
            <div className={classes.formLayoutWeb}>
              {/* <div className={classes.space}/> */}
              <TextField
                className={clsx(classes.layoutGT, classes.textTransform)}
                error={formik.touched.fullName && formik.errors.fullName}
                helperText={formik.touched.fullName && formik.errors.fullName}
                onChange={formik.handleChange}
                label="HỌ TÊN CỦA BẠN"
                name="fullName"
                placeholder="Nguyễn Văn A"
              />
              <TextField
                className={classes.layoutGT}
                error={formik.touched.phone && formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                onChange={formik.handleChange}
                type="number"
                name="phone"
                label="SỐ ĐIỆN THOẠI"
                placeholder="09028xxxxx"
              />
              <div className={classes.containBreakpoints}>
                <TextField
                  error={formik.touched.email && formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                  className={classes.layoutGTA}
                  onChange={formik.handleChange}
                  name="email"
                  label="ĐỊA CHỈ EMAIL"
                  placeholder="example@email.com"
                />
                <SelectInput
                  error={
                    formik.touched.marrialStatus && formik.errors.marrialStatus
                  }
                  helperText={
                    formik.touched.marrialStatus && formik.errors.marrialStatus
                  }
                  onChange={val => formik.setFieldValue('nationality', val)}
                  className={clsx(classes.layoutGT, classes.nationalityCustom)}
                  name="nationality"
                  options={[
                    { value: '1', label: 'Việt Nam' },
                    { value: '2', label: 'other' },
                  ]}
                  value={{ value: '1', label: 'Việt Nam' }}
                  getOptionLabel={option => option.label || ''}
                  renderInput={params => (
                    <TextField {...params} margin="normal" label="QUỐC TỊCH" />
                  )}
                  renderOption={option => option.label}
                />
              </div>
              {/* <div className={classes.addMoreButtonEnterLayout}>
                <div
                  className={classes.addMoreButton}
                  onClick={() => setaddMore(addMore + 1)}
                >
                  <div className={classes.layoutAddMore}>
                    <p className={classes.addMoreButtonText}>
                      Thêm giấy tờ tùy thân
                    </p>
                    <img
                      alt=""
                      className={classes.addMoreButtonImg}
                      src={IconPlus}
                    />
                  </div>
                </div>
              </div> */}

              {/* <Address /> */}
              <div className={classes.marginBottom}></div>
            </div>
          </div>
          <div className={classes.layoutNext}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.buttonClassname}
              classes={{
                label: classes.buttonClassnamelabel,
              }}
              // disabled={loading}
            >
              Tiếp tục
            </Button>
          </div>
        </form>

        <div className={classes.iconLayout}>
          <img className={classes.iconLayoutImg} src={IconFamily} alt="" />
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object,
  getListPhoneAllowRequest: PropTypes.func,
  getCountriesRequest: PropTypes.func,

  // stars: PropTypes.array,
  // @render3
};

const mapStateToProps = createStructuredSelector({

});
export function mapDispatchToProps(dispatch) {
  return {
    getProvincesRequest: payload => dispatch(actions.getProvinces(payload)),
    getSelectionsRequest: (data, onSuccess, onError) =>
      dispatch(actions.getSelections({ data, onSuccess, onError })),
    getCountriesRequest: payload => dispatch(actions.getCountries(payload)),
    getCurrentHousingRequest: payload =>
      dispatch(actions.getCurrentHousing(payload)),
    getListPhoneAllowRequest: payload =>
      dispatch(actions.getPhoneAllow(payload)),
    getSubProductReq: payload => dispatch(actions.getSubProduct(payload)),
    getSelectionNewReq: (onSuccess, onError) =>
      dispatch(actions.getSelectionNew({ onSuccess, onError })),
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Login);
