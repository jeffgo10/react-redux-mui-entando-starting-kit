import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  progcont: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
});

const PageLoader = ({ classes }) => (
  <div className={classes.progcont}>
    <div className={classes.toolbar} />
    <CircularProgress size={80} thickness={2} color="primary" variant="indeterminate" />
  </div>
);

PageLoader.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(PageLoader);
