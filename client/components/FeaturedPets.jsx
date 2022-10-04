import React from 'react';
import kobe from '../images/kobe.jpg';
import jinx from '../images/jinx.jpg';

const FeaturedPets = () => {

  function foundDiv(name, imgSrc, description = '', owner = '') {
    return (
        <div className="featured-pet-details">
          <h2 className="featured-pet-name"><b>Welcome home, {name.toUpperCase()}!</b></h2>
          <div style={{height:'100', width:'80%'}}>
            <img className="petPic" src={imgSrc}/>
          </div>
          <p className='featured-pet-description'>{description}</p>
          <p><i>- {owner}</i></p>
        </div>
    )
  }

  return (
    <div className="featured-pets">
      <h1 className="featured-pet-title">Found Friends</h1>
      {foundDiv('Kobe', 'https://i.ibb.co/YTt3tqW/275649418-659368725316199-7217861032276615800-n-1.jpgibb.co/CsnznTt', 'He was found under the swing. Thank you Welcome Home Friend!', 'Akash')}
      {foundDiv('Jinx', 'https://i.ibb.co/MDW5kzJ/Jinx-Krisette.jpg', 'OMG! Thank you, Welcome Home Friend! I was able to find my baby jinx!', 'Krisette')}
      {foundDiv('Butter', 'https://i.ibb.co/V2qfYnQ/Butter-Tim-Cousin.jpg', 'Booter', 'Tim')}
      {foundDiv('Django', 'https://i.ibb.co/7GgtNmH/Capture.png', 'Honestly I\'ll probably end up making another post. He disappears every other day', 'Hannah')}
    </div>
  );
};

export default FeaturedPets;