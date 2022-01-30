import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from './Input';
import SelectOption from './SelectOption';

function Header() {
  const {
    handleOnChange,
    inputNumber,
    handleOnChangeNumber,
    handleOnChangeSelect } = useContext(StarWarsContext);

  return (
    <header>
      <h1>Star Wars - Search Planets</h1>
      <Input
        id="name-filter"
        type="text"
        onChange={ handleOnChange }
        dataTestid="name-filter"
      />
      <SelectOption
        id="column-filter"
        dataTestid="column-filter"
      />
      <SelectOption
        id="comparison-filter"
        dataTestid="comparison-filter"
      />
      <Input
        id="value-filter"
        type="number"
        value={ inputNumber }
        onChange={ handleOnChangeNumber }
        dataTestid="value-filter"
      />
      <button
        type="button"
        onClick={ handleOnChangeSelect }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </header>
  );
}

export default Header;
