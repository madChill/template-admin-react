import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    // backgroundColor: 'blue',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      minHeight: '61.5vh',
    },
    [theme.breakpoints.up('md')]: {
      width: '800px',
      minHeight: '55.5vh',
    },
    [theme.breakpoints.up('lg')]: {
      width: '800px',
      minHeight: '55.5vh',
    },
  },
  layoutNext: {
    textAlign: 'center',
    width: '100%',
    margin: '24px auto 0',
    [theme.breakpoints.up('md')]: {
      // backgroundColor: 'red',
      width: '45%',
      margin: '40px auto 0',
    },
  },
  buttonClassname: {
    margin: '0 auto',
    width: '100%',
    background: 'linear-gradient(90deg, #1D4289 0%, #00B74F 100%)',
    borderRadius: '8px',
    height: '48px',
    [theme.breakpoints.up('md')]: {
      // backgroundColor: 'red',
    },
  },
  buttonClassnamelabel: {
    fontFamily: 'SVN-Gilroy',
    // fontStyle: 'normal',
    fontWeight: 600,
    // fontSize: '14px',
    // lineHeight: '15px',
    textAlign: 'center',
    textTransform: 'none',
  },
  loginForm: {
    width: '100%',
  },
  loginContainer: {
    [theme.breakpoints.down('md')]: {
      // height:'1500px',
    },
    width: '100%',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: '800px',
      margin: '0 auto',
    },
  },
  title: {
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    [theme.breakpoints.up('md')]: {
      // width: '800px',
      margin: '32px auto 0',
      fontSize: '24px',
      lineHeight: '32px',
    },
  },
  titlep: {
    // background: 'linear-gradient(90deg, #1D4289 0%, #00B74F 76.56%)',
  },
  formLayout: {
    margin: '24px auto 0',
    background: 'rgba(177, 228, 227, 0.16)',
    borderRadius: '16px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      margin: '40px auto 0',
    },
  },
  formLayoutWeb: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '340px',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '82.75%',
      margin: '0 auto',
      padding: '64px 0',
    },
  },
  titleName: {
    fontSize: '10px',
    lineHeight: '16px',
    color: '#333333',
    fontFamily: 'SVN-Gilroy',
  },
  formControl: {
    margin: '24px 16px 0',
    width: '90.5%',
  },
  iconLayout: {
    position: 'absolute',
    top: 0,
    right: '16px',
    [theme.breakpoints.up('md')]: {
      minWidth: '23%',
      top: '-7%',
      right: '6%',
    },
    [theme.breakpoints.down('md')]: {
      top: '48px',
    },
  },
  iconLayoutImg: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
      // margin: '0 auto',
    },
    [theme.breakpoints.down('md')]: {
      width: '94px',
      // margin: '0 auto',
    },
  },
  addMoreButtonEnterLayout: {
    margin: '24px auto 0',
    width: '90.5%',
    [theme.breakpoints.up('md')]: {
      margin: '24px 0 0 0',
    },
  },
  addMoreButton: {
    width: '100%',
    border: `1px solid ${theme.color.greenBank}`,
    borderRadius: '16px',
    display: 'flex',
    height: '40px',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: '51%',
      margin: '0 0 0',
    },
  },
  addMoreButtonImg: {
    width: '18px',
    height: '18px',
  },
  marginBottom: {
    margin: '16px auto',
    height: '1px',
    display: 'block',
  },
  addMoreButtonText: {
    fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    // lineHeight: '15px',
    textAlign: 'center',
    color: theme.color.greenBank,
    margin: '0 auto',
  },
  layoutAddMore: {
    display: 'flex',
    width: '50%',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      // margin: '64'
    },
  },
  col: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // margin: '64'
    },
  },
  colFirst: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // margin: '64'
    },
  },
  layoutGT: {
    [theme.breakpoints.down('sm')]: { width: '100%', margin: '12px 0' },
    [theme.breakpoints.up('lg')]: {
      width: '48%',
    },
    [theme.breakpoints.up('md')]: {
      width: '48%',
    },
  },
  layoutGTA: {
    [theme.breakpoints.down('sm')]: { width: '100%', margin: '12px 0' },
    [theme.breakpoints.up('lg')]: {
      width: '48%',
      marginTop: '16px',
    },
    [theme.breakpoints.up('md')]: {
      width: '48%',
      marginTop: '16px',
    },
  },
  dateDoB: {
    margin: '24px 16px 0',
    width: '90.5%',
    [theme.breakpoints.up('md')]: {
      width: '48%',
      margin: '0 16px 0 0',
    },
  },
  dateCCCD: {
    margin: '24px 16px 0',
    width: '90.5%',
    [theme.breakpoints.up('md')]: {
      width: '48%',
      margin: '32px auto 0',
    },
  },
  dateCCCD2: {
    margin: '24px 16px 0',
    width: '90.5%',
    [theme.breakpoints.up('md')]: {
      width: '48%',
      margin: '32px 0 0',
    },
  },
  containBreakpoints: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignContent: 'space-between',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignContent: 'space-between',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  },
  textTransform: {
    '& input': {
      textTransform: 'capitalize',
    },
  },
  nationalityCustom: {
    [theme.breakpoints.up('md')]: {
      marginTop: '16px',
    },
  },
}));
