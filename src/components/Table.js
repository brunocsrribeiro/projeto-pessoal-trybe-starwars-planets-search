import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TbodyPlanetName from './TbodyPlanetName';

function Table() {
  const { originalData } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          {
            // Ref.: Utilizei esse trecho de código do colega EglanyJr
            originalData.length !== 0 ? Object.keys(originalData[0])
              .map((column) => (
                <th key={ column }>{ column }</th>
              ))
              : null
          }
        </tr>
      </thead>
      <TbodyPlanetName />
    </table>
  );
}

export default Table;
