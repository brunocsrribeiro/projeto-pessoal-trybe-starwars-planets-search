import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from './Input';
import SelectOption from './SelectOption';

function Header() {
  const { handleOnChange } = useContext(StarWarsContext);
  return (
    <header>
      <h1>Star Wars - Search Planets</h1>
      <Input
        type="text"
        onChange={ handleOnChange }
        dataTestid="name-filter"
      />
      <SelectOption
        dataTestid="column-filter"
      />
      <SelectOption
        dataTestid="comparison-filter"
      />
      <Input
        type="number"
        dataTestid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </header>
  );
}

export default Header;
