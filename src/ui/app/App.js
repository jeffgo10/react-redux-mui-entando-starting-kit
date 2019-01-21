import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import SearchIcon from '@material-ui/icons/Search';

import RoutesContainer from 'ui/route/RoutesContainer';
import withTheme from 'ui/withTheme';

import style from './App.style';

class App extends Component {
  state = {
    mobileOpen: false,
  };

  componentWillMount() {
    this.props.onWillMount();
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const {
      classes,
      menuItems,
    } = this.props;

    const drawer = (
      <div>
        <List>
          {menuItems.map(item => (
            <ListItem component={Link} to={item.url} button key={item.label}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.headToolbar}>
              <IconButton
                className={classes.lefthead}
                color="inherit"
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <PhotoFilterIcon className={classes.logoicon} />
              <Typography variant="h6" className={classes.midhead}>Starter Kit</Typography>
              <IconButton className={classes.righthead} color="inherit">
                <SearchIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                anchor="left"
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <div className={classes.maincont}>
            <div className={classes.toolbar} />
            <RoutesContainer />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  menuItems: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  onWillMount: PropTypes.func.isRequired,
};

export default withTheme(withStyles(style)(App));
