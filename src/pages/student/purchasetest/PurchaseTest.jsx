import React from 'react'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import './style.css'

const PurchaseTest = () => {
  return (
    <div>
       <div>
        <SignedNav/>
       </div>
      <div className='just'>
      <IdSlide/>
      <div className='cart_flex'>


        <div className='cart_box'>
            <span className='span_test'>GATE</span> <br />
            <button className='cart_btn'>Add to cart</button>
        </div>

        <div className='cart_box'>
            <span className='span_test'>POCAS</span> <br />
            <div className='pocas_flex1'>
                <div className='added_in'>Added</div>
                <div className='plus_one'>+1</div>
                <div className='minus_one'>-1</div>
            </div>
           
        </div>
        <div className='cart_box'>
            <span className='span_test'>LISA</span> <br />
            <button className='cart_btn'>Add to Cart</button>
        </div>


      </div>
<div className='back_to_flex'> 
    <a href="/student/student-dashboard" className='back_dash'> Back To Dashboard</a>
    </div>
    <Footer/>
      </div>
    
    </div>
  )
}

export default PurchaseTest
