import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoader from 'ui/components/loader/PageLoader';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/SpeakerNotes';
import GalleryIcon from '@material-ui/icons/Collections';

const PageHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */'ui/pages/HomeContainer'),
  loading: PageLoader,
});

const PageAbout = Loadable({
  loader: () => import(/* webpackChunkName: "about" */'ui/pages/About'),
  loading: PageLoader,
});

const PageGallery = Loadable({
  loader: () => import(/* webpackChunkName: "gallery" */'ui/pages/ImageGridContainer'),
  loading: PageLoader,
});

export const menuItems = [
  { label: 'Home', url: '/', icon: <HomeIcon /> },
  { label: 'About', url: '/about', icon: <AboutIcon /> },
  { label: 'Gallery', url: '/gallery', icon: <GalleryIcon /> },
];

class Routes extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.onRouteChanged(this.props.location, prevProps.location);
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/about" component={PageAbout} />
        <Route exact path="/gallery" component={PageGallery} />
      </Switch>
    );
  }
}

Routes.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
  onRouteChanged: PropTypes.func.isRequired,
};

export default withRouter(Routes);
