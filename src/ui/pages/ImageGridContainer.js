import { connect } from 'react-redux';

import { getGalleryImages } from 'state/gallery/selectors';
import { isItShowingLoad } from 'state/loading/selectors';
import { fetchGalleryImages } from 'state/gallery/actions';

import ImageGrid from './ImageGrid';

export const mapStateToProps = state => ({
  imgs: getGalleryImages(state),
  loading: isItShowingLoad(state),
});

export const mapDispatchToProps = dispatch => ({
  onWillMount: () => dispatch(fetchGalleryImages()),
});

// connect the component
const ImageGridContainer = connect(mapStateToProps, mapDispatchToProps)(ImageGrid);

// export connected component (Container)
export default ImageGridContainer;
