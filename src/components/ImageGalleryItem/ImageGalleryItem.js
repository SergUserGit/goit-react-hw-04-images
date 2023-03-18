import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imgSrc, imgAlt, imgAltBig }) => {
  const [imageOpen, SetImageOpen] = useState(false);

  const onClickImage = () => {
    SetImageOpen(state => true);
  };

  const onClickListImage = () => {
    if (imageOpen) {
      SetImageOpen(state => false);
    }
  };

  return (
    <li onClick={onClickListImage} className={css.imageGalleryItem}>
      <img
        onClick={onClickImage}
        className={css.imgItem}
        src={imgSrc}
        alt={imgAlt}
      />
      {imageOpen && <Modal srcModal={imgAltBig} altModal={imgAlt} />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgAltBig: PropTypes.string,
};

export default ImageGalleryItem;
