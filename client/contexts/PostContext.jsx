import React, {useContext, useState} from 'react';

const PetContext = React.createContext();
const PetUpdateContext = React.createContext();

export function usePetContext() {
  return useContext(PetContext);
}

export function usePetUpdateContext() {
  return useContext(PetUpdateContext);
}

const defualtPetData = [
  {
    owner: 'Bruce Wayne',
    address: 'Gotham Manor',
    phone_number: '1800-Gotham-Bros',
    pet_name: 'Ace',
    eye_color: 'White',
    gender: 'Male',
    fur_color: "Gray",
    last_found: "Fighting the Joker",
    comments: "He's a good boy. Likes bat shaped treats.",
  },
  {
    owner: 'Jack',
    address: 'Nunya Bizness',
    phone_number: '123-123-123',
    pet_name: 'UNDERDOG',
    eye_color: 'Brown',
    gender: 'Male',
    fur_color: "White/Brown",
    last_found: "Flying through the Skies!",
    comments: "He has super-powers. Handle with care",
  }
]

export function PetDataProvider({children}) {
  const [petData, setPetData] = useState(defualtPetData);

  function addPetData(newPetObj) {
    setPetData(oldState => {
      return [...oldState, newPetObj]
    })
  }

  return (
    <PetContext.Provider value={petData}>
      <PetUpdateContext.Provider value={addPetData}>
        {children}
      </PetUpdateContext.Provider>
    </PetContext.Provider>
  )
}