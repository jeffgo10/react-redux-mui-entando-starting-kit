const drawerWidth = 240;

const style = theme => ({
  ...theme.classes.shell,
  root: {
    ...theme.classes.shell.root,
    background: `${theme.palette.secondary.dark}`,
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  logoicon: {
    marginRight: theme.spacing.unit,
  },
  midhead: {
    ...theme.classes.flex,
    color: `${theme.palette.primary.contrastText}`,
  },
  lefthead: {
    marginRight: theme.spacing.unit,
    marginLeft: -theme.spacing.unit,
    width: 48,
    height: 48,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  righthead: {
    marginLeft: theme.spacing.unit,
    marginRight: -theme.spacing.unit,
  },
  barTitle: {
    ...theme.mixins.gutters(),
  },
  maincont: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    padding: theme.spacing.unit * 3,
  },
});

export default style;
