import React from 'react'
import Footer from '../../../components/containers/footer/footer'
import SignedNav from '../../../components/containers/signed/SignedNav'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import './style.css'

const PaymentPage = () => {
  return (
    <div>
      <div><SignedNav/></div>
      <div className='try'>
        <div className='second_block'>
          <TestCarousel/>

          <div>
            <form action="" className='review_flex'>
              <div className=''>
                <label htmlFor="" className='all_info'>Card Number: <br /><input type="text" className='inputs'placeholder='4153 6544 7888 9877'/></label>
                <br /><label htmlFor="" className='all_info'>Date: <br /><input type="date" className='inputs' value="2017-06-01"/></label>
               <br /> <label htmlFor="" className='all_info'>Card Type: <br />
                <select name="" id="" className='inputs'>
                <option value="visa" className=''>Visa</option>
                <option value="mastercard" className=''>Mastercard</option>
                <option value="stripe" className=''>Stripe</option></select></label>
              </div>
              <div className=''>
              <label htmlFor="" className='all_info'>Name & Surname: <br /><input type="text" className='inputs' placeholder='JOHN OLIVER'/></label>
              <br /><label htmlFor="" className='all_info'>E-mail: <br /><input type="text" className='inputs' placeholder='Johnathan@info.com'/></label>
              </div>
            </form>
            <div className='button_position'>
              <button className='next_big'>Next</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PaymentPage
