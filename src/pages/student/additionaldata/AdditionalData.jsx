import React from 'react'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import './style.css'

const AdditionalData = () => {
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
                <label htmlFor="" className='labels'>Country of Birth: <br />
                <select name="" id="" className='inputs_select'>
                  <option value="select" className=''>Select</option>
                  </select>
                  </label>

                <label htmlFor="" className='labels'> <br />Native Language: <br />
                <select name="" id="" className='inputs_select'>
                  <option value="select" className=''>Select</option>
                  </select>
                  </label>
              </div>


              <div className='right_side'>
              <label htmlFor="" className='labels'>Country of Citizenship: <br />
              <select name="" id="" className='inputs_select'>
                <option value="select">Select</option>
                </select>
                </label>
              <div className='submit_section'>
                <a href="/student/username-password" className='next_big'>Next</a>

        
      </div>
              </div>
            </form>
          </div>
         </div>
        </div>
      
      </div>
      <BlackFooter/>
    </div>
  )
}

export default AdditionalData
