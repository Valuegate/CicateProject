import React,{useState} from 'react'
import time from '../../../assets/Vector.png'
import './style.css'



const TimeUp = ({isOpen, onClose}) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className='modal-content'>
      <div className='modal-header'>
       
        <button className='close-button' onClick={onClose}>Close</button>
      </div>
      <div className='modal-body'>
        <img src={time} alt="cup" className='cupss'/>
        <p>Easily find out about artists, showtimes, and how to purchase tickets</p>
        <h1 className='hhhh'>Time Up</h1>
     <button className='button-view'>Okay, Thanks</button>
      </div>
    </div>
  </div>
  )
}

export default TimeUp
