import { connect } from 'react-redux';

import { doLogin, setShowPassword } from 'state/login-form/actions';
import { getLoginErrorMessage, getShowPassword } from 'state/login-form/selectors';

import LoginForm from './LoginForm';

export const mapStateToProps = state => ({
  loginErrorMessage: getLoginErrorMessage(state),
  showPassword: getShowPassword(state),
});

// map the props
export const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(doLogin(values.username, values.password)),
  showPasswordClicked: showPassword => dispatch(setShowPassword(showPassword)),
});

// connect the component
const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// export connected component (Container)
export default LoginFormContainer;
