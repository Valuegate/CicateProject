import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import cup from '../../../assets/cup.png'
import './style.css'


const TestSubmitPop = ({isOpen, onClose}) => {

  const Navigate = useNavigate()
  const Results = ()=>{
   Navigate('/student/testresult')
  }
  
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className='modal-content'>
      <div className='modal-header'>
       
        <button className='close-button' onClick={onClose}>Close</button>
      </div>
      <div className='modal-body'>
        <img src={cup} alt="cup" className='cupss'/>
        <h1 className='hhhh'>Succesfully Submitted</h1>
        <p>Easily find out about artists, showtimes, and how to purchase tickets.</p>
        <button className='button-view' onClick={()=> Results()}>View the results</button>
      </div>
    </div>
  </div>
  )
}

export default TestSubmitPop
