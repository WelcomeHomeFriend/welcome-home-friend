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
      {foundDiv('Dancer', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Dendroaspis_polylepis_%2814%29.jpg/1200px-Dendroaspis_polylepis_%2814%29.jpg', 'He was found in the mall. Thank you Welcome Home Friend!', 'Tony')}
      {foundDiv('Monaco', 'https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_Il_Bungarus_fasciatus_e_velenosissimo_ma_in_compenso_poco_aggressivo_di_giorno_e_di_notte_uccide_i_cobra_c_Mazza.jpg', 'Thank you, Welcome Home Friend!', 'Alex Martinez')}
      {foundDiv('Russel', 'https://upload.wikimedia.org/wikipedia/commons/7/74/Daboia_russelii_A_Chawla01.jpg', 'Thank you, she is home safe!', 'Zi')}
      {foundDiv('Ratty', 'https://www.marylandzoo.org/wp-content/uploads/2017/10/black_rat_snake_web.jpg', 'Thank you for finding my beloved Ratty!', 'Mark')}
      {foundDiv('Jingles', 'https://www.cdc.gov/niosh/topics/snakes/images/rattlesnake.jpg?_=88099', 'Thank you Welcome Home Friend!', 'Richard')}
    
    </div>
  );
};

export default FeaturedPets;