import { connect } from 'react-redux';
import { getUsername } from '@entando/apimanager';

import { menuItems } from 'ui/route/Routes';
import { fetchLoggedUser } from 'state/logged-user/actions';

import App from './App';

export const mapStateToProps = state => ({
  username: getUsername(state),
  menuItems,
});

export const mapDispatchToProps = dispatch => ({
  onWillMount: () => {
    dispatch(fetchLoggedUser());
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
