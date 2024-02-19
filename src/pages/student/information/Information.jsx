import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'

const Information = () => {


  return (
    <div>
  <div className='test-container'>
  <div className='black-test1'>
       <div className='info-test'>
        <h1 className='h11'>Information</h1>
        <p>
        The user, Kelly, is a jazz music lover living in Paris. 
        They attend a jazz concert most weeks.
         Kelly wants an easy way to find out about new artists and purchase
          tickets to their shows on Kelly’s free weeknights. 
        </p>
       </div>
       
       <div className='timer1'>
   <div className='duration'>Duration</div>
        <div className='timerh'>01:30:00</div>
      
      </div>

      <div className='below-nav1'>
   
   <button>Next</button>
  

 </div>
      </div>
      
  </div>
     
    </div>
  )
}

export default Information
