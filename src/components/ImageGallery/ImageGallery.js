import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = function ({ images }) {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ webformatURL, tags, id, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          imgSrc={webformatURL}
          imgAlt={tags}
          imgAltBig={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};

export default ImageGallery;
