import React from 'react'
import Footer from '../../../components/containers/footer/footer'
import SignedNav from '../../../components/containers/signed/SignedNav'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton'


const PaymentPage = () => {

  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
Navigate('/student/paymentcompletion')
  }


  return (
    <div>
      <div><SignedNav/></div>
      <div className='try'>
        <div className='second_block'>
     
          <TestCarousel/>

          
            <form action="" className='card_pay'>
              <div className=''>
                <label htmlFor="" className='labels'>Card Number: <br />
                <input type="text" className='inputs'placeholder='4153 6544 7888 9877'/></label>
                <br />
                
                <label htmlFor="" className='labels'>Date: <br />
                <input type="date" className='inputs' value="2017-06-01"/></label>
               <br />
               
                <label htmlFor="" className='labels'>Card Type: <br />
                <select name="" id="" className='inputs'>
                <option value="visa" className=''>Visa</option>
                <option value="mastercard" className=''>Mastercard</option>
                <option value="stripe" className=''>Stripe</option></select></label>
              </div>


              <div className='card_pay_left'>
              <label htmlFor="" className='labels'>Name & Surname: <br />
              <input type="text" className='inputs' placeholder='JOHN OLIVER'/></label>
              <br />
              
              <label htmlFor="" className='labels'>E-mail: <br />
              <input type="text" className='inputs' placeholder='Johnathan@info.com'/>
              </label>
             
              </div>
              
            </form>
            <div className='con'>
      <BackButton/>
          <button className='next_big' onClick={handleSubmit}>Next</button>

      </div>
          </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default PaymentPage
