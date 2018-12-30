const style = theme => ({
  ...theme.classes.shell,
  root: {
    ...theme.classes.shell.root,
    background: `${theme.palette.secondary.light}`,
    display: 'flex',
    flexDirection: 'column',
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
  },
  righthead: {
    marginLeft: theme.spacing.unit,
    marginRight: -theme.spacing.unit,
  },
  barTitle: {
    ...theme.mixins.gutters(),
  },
});

export default style;
