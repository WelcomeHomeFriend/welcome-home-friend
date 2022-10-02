import React from 'react';
import kobe from '../images/kobe.jpg';
import jinx from '../images/jinx.jpg';

const FeaturedPets = () => {
  return (
    <div className="featured-pets">
      {/* Create a div for 2 pets showing PetDetails */}
      <div className="featured-pet-title">
      <h1>Featured Pets</h1>
      </div>
      <div className="featured-pet-details">
        <div className="pet-image">
        <img src={kobe} alt="Kobe" width="100px" />
        </div>
        <div className="featured-pet-info">
          <h2>Kobe</h2>
        </div>
      </div>
      <div className="featured-pet-details">
        <div className="featured-pet-image">
        <img src={jinx} alt="Jinx" width="100px" />
        </div>
        <div className="featured-pet-info">
          <h2>Jinx</h2>
          <p>Jinx likes treats and sleeping</p>
          </div>
    </div>
    </div> 
  );
};

export default FeaturedPets;