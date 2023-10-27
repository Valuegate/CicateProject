import React from 'react'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'

import './style.css'


const UserPass = () => {
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
          <RegCarousel/>
          <div className='justify_bluk'>
          <div className='bluk'>
            <form action="" className='form_class'>

              <div className='fall'>
                <label htmlFor="" className='labels'>Password: <br /><input type="text" className='inputs' placeholder='password'/></label> <br />
                <label htmlFor="" className='labels'>Confirm Password: <br /><input type="text" className='inputs' placeholder='confirm password'/></label>
              </div>


              <div className='right_side'>
              <label htmlFor="" className='labels'>Username: <br /><input type="text" className='inputs' placeholder='Username'/></label>
              <div className='submit_section'>
                <a href="/student/review" className='next_big'> Next</a>
       
      </div>
              </div>

            </form>
          </div>
</div>
<BlackFooter/>
        </div>
      </div>
    </div>
  )
}

export default UserPass
