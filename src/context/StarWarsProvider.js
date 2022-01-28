import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import bobaFetch from '../services/servicesAPI';

function StarWarsProvider({ children }) {
  const [originalData, setOriginalData] = useState([]);
  const [planets, setPlanets] = useState('');

  function handleOnChange({ target }) {
    const { value } = target;
    setPlanets(value);
  }

  const contextValues = {
    originalData,
    setOriginalData,
    planets,
    setPlanets,
    handleOnChange,
  };

  useEffect(() => {
    const bobaFunction = async () => {
      const response = await bobaFetch();
      setOriginalData(response);
    };
    bobaFunction();
  }, []);

  return (
    <StarWarsContext.Provider value={ contextValues }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
