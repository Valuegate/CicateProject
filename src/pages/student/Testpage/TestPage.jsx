import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'

const TestPage = () => {


  return (
    <div>
      <div className='timer'>
       <h1>00:00:00</h1>
      </div>
  <div className='test-container'>
  <div className='black-test'>
        <h1>1/30</h1>
        <p>The user, Kelly, is a jazz music lover living in Paris. They attend a jazz concert most weeks. Kelly wants an easy way to find out about new artists and purchase tickets to their shows on Kelly’s free weeknights. Currently, Kelly uses multiple different products to find artists and buy tickets and it can be a lot to manage. Kelly wants to be able to easily find out about new, exciting artists and buy tickets to their shows at various music venues all in one product.
            <br />
            <br />
            <br />
            Which part of the problem statement above represents the when in the 5 “w” questions?</p>
      
      <form className='test-questions'>
        <div>
        <input type="checkbox" id='checkbox1'/>  <label htmlFor="checkbox1">On weeknights Kelly is free</label>
        </div>

        <div>
        <input type="checkbox" id='checkbox2' /> <label htmlFor='checkbox2'>Tickets to jazz artist shows</label>
        </div>
        <div>
        <input type="checkbox" id='checkbox3'/> <label htmlFor='checkbox3'>Easily find out about artists, showtimes, and how to purchase tickets, even for shows on the same day</label>
        </div>
        <div>
        <input type="checkbox" id='checkbox4'/> <label htmlFor='checkbox4'>App user Kelly, a jazz music lover</label>
        </div>
   
      </form>

      <div className='below-nav'>
       <button>Back</button>
       <button>Next</button>
      </div>
      </div>
  </div>
     
    </div>
  )
}

export default TestPage
