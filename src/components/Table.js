import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { originalData, planets } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          {
            // Ref.: Utilizei esse trechode código do colega EglanyJr
            originalData.length !== 0 ? Object.keys(originalData[0])
              .map((column) => (
                <th key={ column }>{ column }</th>
              ))
              : null
          }
        </tr>
      </thead>
      <tbody>
        {
          // Ref.: https://stackoverflow.com/questions/50142525/how-to-render-the-elements-before-to-filter-elements-with-reactjs
          originalData.filter((data) => data.name.toLowerCase()
            .includes(planets.toLowerCase()))
            .map((info) => (
              <tr key={ info.name }>
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
