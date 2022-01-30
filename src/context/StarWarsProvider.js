/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import bobaFetch from '../services/servicesAPI';

function StarWarsProvider({ children }) {
  const [originalData, setOriginalData] = useState([]); // Estado da API
  const [renderFilter, setRenderFilter] = useState([]); // Estado renderiza tabela
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [inputNumber, setInputNumber] = useState(0); // Estado numérico
  const [filtered, setFiltered] = useState([]); // Estado do filtro dos input/selects
  const [planets, setPlanets] = useState(''); // Recebe o Estado como string

  // FUNÇÂO DE FILTRAR
  function handleOnFiltereds() {
    if (filtered.length > 0) {
      (filtered.forEach((item) => {
        const { column, comparison, value } = item;
        const MAIOR_QUE = 'maior que';
        const MENOR_QUE = 'menor que';
        const filteredTable = originalData.filter((itemData) => {
          switch (comparison) {
          case MAIOR_QUE:
            return itemData[column] > Number(value);
          case MENOR_QUE:
            return itemData[column] < Number(value);
          default:
            return itemData[column] === value;
          }
        });
        setRenderFilter(filteredTable);
      }));
    }
  }

  function removeInputColumn() {
    filtered.forEach((item) => {
      const { column } = item;
      const removed = options.filter((option) => option !== column);
      setOptions(removed);
    });
  }

  //  FUNÇÃO QUE FILTRA OS PLANETAS PELO NOME
  function handleOnPlanetName() {
    if (planets !== '') {
      const filteredPlanet = originalData.filter(
        (data) => data.name.toLowerCase()
          .includes(planets),
      );
      setRenderFilter(filteredPlanet);
    }
  }

  function handleOnChangeSelect() {
    const columnFilter = document.getElementById('column-filter').value;
    const comparisonFilter = document.getElementById('comparison-filter').value;
    const valueFilter = document.getElementById('value-filter').value;
    setFiltered(
      [
        ...filtered,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    );
  }

  function handleOnChange({ target: { value } }) {
    setPlanets([value]);
  }

  function handleOnChangeNumber({ target }) {
    const { value } = target;
    setInputNumber(value);
  }

  const contextValues = {
    options,
    planets,
    filtered,
    inputNumber,
    renderFilter,
    originalData,
    handleOnChange,
    handleOnChangeNumber,
    handleOnChangeSelect,
  };

  // FUNÇÃO PARA RENDERZAR OS DADOS NA TABELA
  useEffect(() => {
    const bobaFunction = async () => {
      const response = await bobaFetch();
      setOriginalData(response);
      setRenderFilter(response);
    };
    bobaFunction();
  }, []);

  // FILTRA O QUE É DIGITADO NO CAMPO DE INPUT
  useEffect(() => {
    handleOnPlanetName();
  }, [planets]);

  // FILTRO DE COLUNA, COMPARAÇÃO E VALOR
  useEffect(() => {
    handleOnFiltereds();
    removeInputColumn();
  }, [filtered]);

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
