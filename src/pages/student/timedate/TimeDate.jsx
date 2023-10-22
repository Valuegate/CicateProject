import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import './style.css'

const TimeDate = () => {
  return (
    <div>
      <div>
       <SignedNav/>
      </div>
      <div>
        <div className='try'>
          <div className='second_block'>
          <TestCarousel/>
        <div className='review_flex1'>

          <div>
            <label htmlFor="" className='labels'> <span className='numbers_green'>1</span>Choose Month: <br /><input type="month" className='inputs'/></label> <br /> <br />
            <label htmlFor="" className='labels'><span className='numbers_green'>2</span>Select Day: <br /><input type="date" className='inputs' /></label>
          </div>

          <div className='choose1'><label htmlFor="" className='labels'> <span className='numbers_green'>3</span>Choose Available Time: <br /><input type="time" className='inputs'/></label></div>
        </div>
        <div className='button_position'><button className='next_big'>Next</button></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TimeDate
