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
          <div className='bluk2'>
            <form action="" className='form_class2'>

              <div className='fall4'>
                <label htmlFor="" className='labels'>Password: <br /><input type="text" className='inputs' placeholder='password'/></label> <br />
                <label htmlFor="" className='labels'>Confirm Password: <br /><input type="text" className='inputs' placeholder='confirm password'/></label>
              </div>


              <div className='right_sidde4'>
              <label htmlFor="" className='labels'>Username: <br /><input type="text" className='inputs' placeholder='Username'/></label>
              <div className='submit_section'>
                <a href="/student/review" className='next_big'> Next</a>
       
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

export default UserPass
