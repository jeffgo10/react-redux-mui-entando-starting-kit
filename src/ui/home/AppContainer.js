import { connect } from 'react-redux';
// import { getUsername } from '@entando/apimanager';

import App from './App';

// export const mapStateToProps = state => ({
//   username: getUsername(state),
// });

const AppContainer = connect(null, null)(App);

export default AppContainer;
