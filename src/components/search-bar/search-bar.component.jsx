import React from 'react';
import './search-bar.styles.css';

export const SearchBar = ({ placeholderText, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholderText}
    onChange={handleChange}
  />
);
