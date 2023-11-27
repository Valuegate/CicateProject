import React, { useState } from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import cartgreen from '../../../assets/cartgreen.svg'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import Footer from '../../../components/containers/footer/footer'
import './style.css'

const Cart = () => {

  const [add, setAdd] = useState(0)
 

  return (
    <div>
      <div>
        <SignedNav/>
        </div>
        <div className='just'>
         <IdSlide/>
        <div className='my_cart_div'>
          <div className='my_cart'><img src={cartgreen} alt="img" className='cart_img'/>My Cart</div>
        </div>
        </div>
        <div className='pay_flex'>
          <div className=''>
            <span className='gate_pay'>GATE</span> <span className='gate_pay2'>– 450$</span> <br />
            <span className='self_dev'>Self Development Test #1</span>
          </div>



          <div className='button_display'>
            <span className=''> <button onClick={()=> setAdd(add + 1)} className='add'>+</button></span> 
            <span className=''>{add}</span>
            <span className=''><button onClick={()=>setAdd(add - 1)} className='subtract'>-</button></span>
          </div>
   
        </div>
        <div className='justify_black1'>
            <div className='payment_fle2'>
           
            <div className='total_pay'>Total: <span className='green_money2'>950$</span></div>
            <div><button className='button_pay'>Check Out</button></div>
            </div>
           
        </div>
      
    
<div>
  <Footer/>
</div>
      </div>
    
  )
}

export default Cart
