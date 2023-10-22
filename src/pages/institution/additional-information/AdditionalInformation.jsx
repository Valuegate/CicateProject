import React from 'react'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import greenSubtract from '../../../assets/greenSubtract.svg'
import './style.css'




const AdditionalInformation = () => {
  return (
    <div>
        <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
          <RegCarousel/>
          <div className='bluk_big'>
         <form action="" className='form_class1'>
          <div className='fall1'>
          <label htmlFor="" className='labels'>Institution Details: <br /><input type="text" className='inputs' placeholder='Name'/></label> <br />
         <label htmlFor="" className='labels'> <br />Acronym: <br /><input type="text" className='inputs' placeholder='Acronym' /></label> <br />
          <label htmlFor="" className='labels'> <br />Biography: Max 500 words: <br />
          <textarea name="" id="" cols="70" rows="10" className='inputs1' placeholder=''></textarea></label>
          </div>

          <div className='right_side1'>
            <label htmlFor="" className='labels'>Type of University: <br />
           <input type="text" className='inputs' />
              </label> <br />
              <label htmlFor="" className='labels'> <br />Location: <br /><input type="text" placeholder='' className='inputs'/></label> <br />
              <label htmlFor="" className='labels'> <br />Linkedin: <br /><input type="text" placeholder='' className='inputs' /></label> <br />
              <label htmlFor="" className='labels'> <br />Facebook: <br /><input type="text" placeholder='' className='inputs'/></label> <br />
              <label htmlFor="" className='labels'> <br />Instagram: <br /><input type="text" placeholder='' className='inputs' /></label> <br />
              <label htmlFor="" className='labels'> <br />Twitter: <br /><input type="text" placeholder='' className='inputs'/></label> <br />

              <div className='submit_section'>
        <button type='submit' className='next_big'>Next</button>
        <img src={greenSubtract} alt="img" className='subtract_img'/>
      </div>
          </div>
         
         </form>
          </div>

<BlackFooter/>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInformation
