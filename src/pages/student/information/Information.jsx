import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'

const Information = () => {

const Navigate = useNavigate()
  return (
    <div>
  <div className='test-container'>
  <div className='black-test1'>
       <div className='info-test'>
        <h1 className='h11'>Information</h1>
        <p>
        The test takes approximately the same amount of time
        you will use to have a good meal so i advice you to
        enjoy yourself while on the test and have a good look
        at all the questions promptly before you answer them
        </p>
       </div>
       
       <div className='timer1'>
   <div className='duration'>Duration</div>
        <div className='timerh'>01:30:00</div>
      
      </div>

      <div className='below-nav1'>
   
   <button onClick={()=>{Navigate('/student/test')}}>Start</button>
  

 </div>
      </div>
      
  </div>
     
    </div>
  )
}

export default Information
