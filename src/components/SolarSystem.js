import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((planet) => (<PlanetCard
            key={ planets.name }
            planetName={ planet.name }
            planetImage={ planet.image }
            alternativeText="Planeta {planetName}"
          />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
