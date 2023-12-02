import React from 'react'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Payment = () => {
  return (
    <div>
<div>
    <SignedNav/>
    </div>
    <div className='just'>
        <IdSlide/>
        <div className='pay_div'>
        <div className='pay_bold'>Payment</div> 
        </div>
<div className='justify_black'>
        <div className='black_pay'>
            <form action="" className='payment_fle'>
               <div className=''>
                <label htmlFor="" className='labels'>Card Number: <br />
                    <input type="text" className='inputs' placeholder='1234 764 9043 234' />
                </label>

                <br /><br /><label htmlFor="" className='labels'>Date: <br />
                    <input type="date" className='inputs'/>
                    </label>
               <br /> <br /><label htmlFor="" className='labels'>Card Type: <br />
                    <select name="" id="" className='inputs'>
                    <option value="" className='inputs'>Visa</option>
                    <option value="" className='inputs'>MasterCard</option>
                    <option value="" className='inputs'>Stripe</option>
                    </select>
                    </label>
               </div>


               <div className=''>
                <label htmlFor="" className='labels'> Email: <br />
                    <input type="email" className='inputs' placeholder='enter valid email' />
                </label>
               </div>
            </form>
        </div>
        </div>
       <div className='justify_black'>
            <div className='payment_fle5'>
            <div><button className='button_pay'>Pay</button></div>
            <div className='total_pay'>Total: <span className='green_money2'>950$</span></div>
            </div>
           
       
       </div>

       <div className='payment_fle3'>
        <div className='john_oliver'>JOHN OLIVER</div>
       </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Payment
