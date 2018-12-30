import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import withTheme from 'ui/withTheme';

import style from './App.style';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.headToolbar}>
            <IconButton className={classes.lefthead} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.midhead}>Starter Kit</Typography>
            <IconButton className={classes.righthead} color="inherit">
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTheme(withStyles(style)(App));
