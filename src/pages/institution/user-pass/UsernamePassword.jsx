import React from 'react'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import greenSubtract from '../../../assets/greenSubtract.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const UsernamePassword = () => {
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
          <RegCarousel/>
          <div className='bluk'>
            <form action="" className='form_class2'>

              <div className='fall'>
                <label htmlFor="" className='labels'>Password: <br /><input type="text" className='inputs' placeholder='password'/></label>
                <br /><label htmlFor="" className='labels'>Confirm Password: <br /><input type="text" className='inputs' placeholder='confirm password'/></label>
              </div>


              <div className='right_side'>
              <label htmlFor="" className='labels'>Username: <br /><input type="text" className='inputs' placeholder='Username'/></label>
              <div className='submit_section'>
        <button type='submit' className='next_big'>Next</button>
       
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

export default UsernamePassword
