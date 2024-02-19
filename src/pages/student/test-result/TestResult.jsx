import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'

const TestResult = () => {


  return (
    <div>
  <div className='test-container'>
  <div className='black-test'>
       <div className='info-test'>
        <h1 className='h12'>Result</h1>
        <p>
        The user, Kelly, is a jazz music lover living in Paris. 
        They attend a jazz concert most weeks.
         Kelly wants an easy way to find out about new artists and purchase
          tickets to their shows on Kelly’s free weeknights. 
        </p>
       </div>
       
       

      <div className='below-nav2'>
   
   <button>Download Result</button>
  

 </div>
      </div>
      
  </div>
     
    </div>
  )
}

export default TestResult
