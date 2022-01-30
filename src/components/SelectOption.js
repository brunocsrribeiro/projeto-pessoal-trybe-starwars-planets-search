import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function SelectOption({ id, name, value, onChange, dataTestid }) {
  const { options } = useContext(StarWarsContext);

  const valueBelt = [
    'maior que',
    'menor que',
    'igual a',
  ];

  // filtered.forEach((item) => {
  //   const { column } = item;
  //   const removed = options.filter((option) => option !== column);
  //   console.log(removed);
  // });

  return (
    <select
      id={ id }
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
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataTestid: PropTypes.string,
}.isRequired;

export default SelectOption;
