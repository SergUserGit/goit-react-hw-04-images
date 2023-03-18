import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = function ({ srcModal, altModal }) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={srcModal} alt={altModal} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  srcModal: PropTypes.string,
  altModal: PropTypes.string,
};

export default Modal;
