import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

  const headerTitles = [
    'Name', 'Rotation Period',
    'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain',
    'Surface Water', 'Population',
    'Films', 'Created', 'Edited', 'URL'];

  return (
    <table border={ 1 }>
      <thead>
        <tr>
          {
            headerTitles.map((head, index) => (
              <th key={ head[index] }>{ head }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((info, index) => (
            <tr key={ info[index] }>
              <td>{ info.name }</td>
              <td>{ info.rotation_period }</td>
              <td>{ info.orbital_period }</td>
              <td>{ info.diameter }</td>
              <td>{ info.climate }</td>
              <td>{ info.gravity }</td>
              <td>{ info.terrain }</td>
              <td>{ info.surface_water }</td>
              <td>{ info.population }</td>
              <td>{ info.films }</td>
              <td>{ info.created }</td>
              <td>{ info.edited }</td>
              <td>{ info.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
