import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import withTheme from 'ui/withTheme';
import LoginFormContainer from 'ui/components/LoginFormContainer';

import style from './Home.style';

class Home extends Component {
  renderUinfo() {
    const { logged } = this.props;
    if (!logged) return <LoginFormContainer />;

    const { profile, handleLogout } = this.props;
    return (
      <div>
        <Typography variant="body1" gutterBottom>Hey there, {profile.firstname}!</Typography>
        <Button variant="contained" color="primary" onClick={() => handleLogout()}>Logout</Button>
      </div>
    );
  }
  render() {
    const { classes } = this.props;
    // eslint-disable-next-line
    const out = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 

Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;
    return (
      <Grid container spacing={16}>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>Welcome to Starter Kit!</Typography>
            {out}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            {this.renderUinfo()}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  handleLogout: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTheme(withStyles(style)(Home));
