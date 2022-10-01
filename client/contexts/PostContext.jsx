import React, {useContext, useState} from 'react';

const PetContext = React.createContext();
const PetUpdateContext = React.createContext();

export function usePetContext() {
  return useContext(PetContext);
}

export function usePetUpdateContext() {
  return useContext(PetUpdateContext);
}

export function PetDataProvider({children}) {
  const [petData, setPetData] = useState([]);

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