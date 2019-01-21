import { connect } from 'react-redux';
import { logoutUser } from '@entando/apimanager';

import { resetLoggedUser } from 'state/logged-user/actions';
import { isItLogged, getLoggedUser } from 'state/logged-user/selectors';

import Home from './Home';

export const mapStateToProps = state => ({
  logged: isItLogged(state),
  profile: getLoggedUser(state),
});

export const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logoutUser());
    dispatch(resetLoggedUser());
    window.location.href = window.location.href.slice();
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
