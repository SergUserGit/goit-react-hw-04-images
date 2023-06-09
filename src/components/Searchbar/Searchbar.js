import React, { useState } from 'react';
import css from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [imageName, SetImageName] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    SetImageName(state => value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ imageName });
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button className={css.searchFormButton} type="submit">
          <AiOutlineSearch className={css.icon} size={16} />
          <span className={css.buttonLabel}>Search</span>
        </button>
        <input
          className={css.searchFormInput}
          value={imageName}
          onChange={handleChange}
          type="text"
          name="imageName"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
