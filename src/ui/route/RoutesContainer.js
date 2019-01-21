import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';

export const mapDispatchToProps = dispatch => ({
  notifyChangeRoute: (newloc) => {
    dispatch({
      type: 'router/notify-change',
      payload: {
        location: { ...newloc },
        route: { name: newloc.pathname.slice(1) },
        params: {},
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
