import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PageLoader from 'ui/components/loader/PageLoader';
import withTheme from 'ui/withTheme';

const styles = {
  gridList: {
    width: '100%',
    height: 450,
  },
};

class ImageGridList extends Component {
  componentWillMount() {
    this.props.onWillMount();
  }
  render() {
    const { classes, loading } = this.props;
    if (loading) {
      return (
        <div className={classes.root}>
          <PageLoader />
        </div>
      );
    }
    const { imgs } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={160} cols={3}>
          {imgs.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  imgs: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  loading: PropTypes.bool.isRequired,
  onWillMount: PropTypes.func.isRequired,
};

export default withTheme(withStyles(styles)(ImageGridList));
