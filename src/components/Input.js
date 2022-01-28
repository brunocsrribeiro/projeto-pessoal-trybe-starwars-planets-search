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
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  dataTestid: PropTypes.string,
}.isRequired;

export default Input;
