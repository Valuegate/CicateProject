import React from 'react'
import { useState } from 'react';
import RegCarousel from '../components/containers/reg-carousel/RegCarousel';

const RegLogic = () => {

    const [activeState, setActiveState] = useState(false);

    const handleButtonClick = () => {
  if (activeState) {
    setActiveState(false);
  }
  else {
    setActiveState(true);
  }
        
      }



  return (
    <div>
      <RegCarousel
      dataChange={handleButtonClick}
      activeState={activeState}
      setActiveState={setActiveState}
    />
    </div>
  )
}

export default RegLogic
