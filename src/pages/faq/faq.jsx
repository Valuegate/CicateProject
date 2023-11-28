import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import './style.css'
import tick from '../../assets/tick.svg'
import Footer from '../../components/containers/footer/footer'
const Faq = () => {
  return (
    <div>
      <Navbar/>
      <div className='faq_up'>
        <div className='faq'>FAQ</div>
      </div>
      <div className='display_faq'>
        <p className='faq_sub'>Questions that might have an answer for you!</p>
      </div>
    
    </div>
  )
}

export default Faq
