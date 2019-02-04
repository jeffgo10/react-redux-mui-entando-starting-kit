import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { matchRoute, routes, ROUTE_404 } from 'app-init/routedir';

import Routes from './Routes';

export const mapDispatchToProps = dispatch => ({
  notifyChangeRoute: (newloc) => {
    const match = matchRoute(routes, newloc.pathname);
    dispatch({
      type: 'router/notify-change',
      payload: {
        location: { ...newloc },
        route: { name: match.route.name || ROUTE_404 },
        params: match.params || {},
        searchParams: {},
      },
    });
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onRouteChanged: (newloc) => {
    dispatchProps.notifyChangeRoute(newloc);
  },
});

const RoutesContainer = connect(
  null,
  mapDispatchToProps,
  mergeProps,
)(Routes);

export default withRouter(RoutesContainer);
