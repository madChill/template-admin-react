import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff' },
  root1: {
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      background: 'white',
    },
    [theme.breakpoints.up('md')]: {
      width: '800px',
      margin: '40px auto 0',
    },
  },
  headLeft: {
    [theme.breakpoints.down('md')]: {},
  },
  logo1: {
    [theme.breakpoints.down('md')]: {
      width: '80px',
      height: '20px',
    },
    [theme.breakpoints.up('md')]: {
      width: '138px',
      height: '32px',
    },
  },

  supportIcon: {
    width: '64px',
    height: '64px',
    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '80px',
    },
    [theme.breakpoints.up('md')]: {
      width: '100px',
      height: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100px',
      height: '100px',
    },
  },
  mainContain: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
    marginTop: '76px',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '48px',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '48px',
    },
  },
  fab: {
    position: 'fixed',
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(4),
      right: theme.spacing(4),
      zIndex: 999,
    },
  },
}));
