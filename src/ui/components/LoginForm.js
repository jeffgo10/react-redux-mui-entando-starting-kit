import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { renderTextField, renderCheckbox } from 'ui/components/form/FieldRender';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import withTheme from 'ui/withTheme';

import style from './LoginForm.style';

class LoginFormBody extends Component {
  render() {
    const {
      classes,
      handleSubmit,
      loginErrorMessage,
      showPassword,
      showPasswordClicked,
    } = this.props;
    return (
      <form onSubmit={handleSubmit} className={classes.formcont}>
        {loginErrorMessage ? <Paper className={classes.notif}>{loginErrorMessage}</Paper> : ''}
        <Field
          name="username"
          component={renderTextField}
          label="Username"
          type="text"
          classes={classes}
        />
        <Field
          name="password"
          component={renderTextField}
          label="Password"
          type="password"
          showPassword={{ val: showPassword, passClicked: v => showPasswordClicked(v) }}
          classes={classes}
        />
        <Field
          name="rememberpass"
          component={renderCheckbox}
          label="Remember Me"
          classes={classes}
        />
        <Button variant="contained" type="submit" className={classes.loginButton}>
          Login
        </Button>
      </form>
    );
  }
}

LoginFormBody.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  handleSubmit: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  loginErrorMessage: PropTypes.string.isRequired,
  showPasswordClicked: PropTypes.func.isRequired,
};

const LoginForm = reduxForm({
  form: 'loginForm',
})(withTheme(withStyles(style)(LoginFormBody)));

export default LoginForm;
