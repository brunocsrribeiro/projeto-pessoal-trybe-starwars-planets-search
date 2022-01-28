import React from 'react';
import PropTypes from 'prop-types';

function SelectOption({ name, value, onChange, dataTestid }) {
  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const valueBelt = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <select
      name={ name }
      value={ value }
      onChange={ onChange }
      data-testid={ dataTestid }
    >
      {
        (dataTestid === 'column-filter')
          ? options.map((data, index) => (
            <option
              value={ data }
              key={ index }
            >
              { data }
            </option>
          ))
          : valueBelt.map((values, index) => (
            <option
              value={ values }
              key={ index }
            >
              { values }
            </option>
          ))
      }

    </select>
  );
}

SelectOption.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataTestid: PropTypes.string,
}.isRequired;

export default SelectOption;
