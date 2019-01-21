import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withTheme from 'ui/withTheme';

const styles = {
  gridList: {
    width: '100%',
    height: 450,
  },
};

const ImageGridList = ({ classes, imgs }) => (
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

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  imgs: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTheme(withStyles(styles)(ImageGridList));
