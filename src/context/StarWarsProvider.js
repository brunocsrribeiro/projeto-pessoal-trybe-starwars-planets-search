import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import bobaFetch from '../services/servicesAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const bobaFunction = async () => {
      const response = await bobaFetch();
      setData(response);
    };
    bobaFunction();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, setData } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
