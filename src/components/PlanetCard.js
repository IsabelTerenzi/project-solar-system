import PropTypes from 'prop-types';
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, alternativeText } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ alternativeText } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired,
};

export default PlanetCard;
