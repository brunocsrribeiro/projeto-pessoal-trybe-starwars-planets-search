import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from './Input';

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
    </header>
  );
}

export default Header;
