import css from './Button.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onSubmit }) => {
  const loadClick = () => {
    onSubmit();
  };

  return (
    <button onClick={loadClick} className={css.buttonLoadeMore}>
      Load more
    </button>
  );
};

//class Button extends Component {
//  loadClick = () => {
//    this.props.onSubmit();
//  };

//  render() {
//    return (
//      <button onClick={this.loadClick} className={css.buttonLoadeMore}>
//        Load more
//      </button>
//   );
// }
//}

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Button;
