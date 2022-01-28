import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, value, onChange, dataTestid }) {
  return (
    <input
      type={ type }
      value={ value }
      onChange={ onChange }
      data-testid={ dataTestid }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataTestid: PropTypes.string,
}.isRequired;

export default Input;
