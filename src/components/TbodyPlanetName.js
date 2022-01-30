import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TbodyPlanetName() {
  const { renderFilter } = useContext(StarWarsContext);
  return (
    <tbody>
      {
        // Ref.: https://stackoverflow.com/questions/50142525/how-to-render-the-elements-before-to-filter-elements-with-reactjs
        renderFilter.map((data) => (
          <tr key={ data.name }>
            <td>{ data.name }</td>
            <td>{ data.rotation_period }</td>
            <td>{ data.orbital_period }</td>
            <td>{ data.diameter }</td>
            <td>{ data.climate }</td>
            <td>{ data.gravity }</td>
            <td>{ data.terrain }</td>
            <td>{ data.surface_water }</td>
            <td>{ data.population }</td>
            <td>{ data.films }</td>
            <td>{ data.created }</td>
            <td>{ data.edited }</td>
            <td>{ data.url }</td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default TbodyPlanetName;
