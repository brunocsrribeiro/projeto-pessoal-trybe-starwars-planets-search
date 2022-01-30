import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, type, value, onChange, dataTestid }) {
  return (
    <input
      id={ id }
      type={ type }
      value={ value }
      onChange={ onChange }
      data-testid={ dataTestid }
    />
  );
}

Input.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  dataTestid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}.isRequired;

export default Input;
