import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import './style.css'

const ReviewSubmit = () => {
  return (
    <div>
      <div>
        <SignedNav/>
      </div>
      <div className='try'>
        <div className='second_block'>
            <TestCarousel/>
            <div>
                <form action="" className='review_flex'>
                <div className=''>
                    <label htmlFor="" className='all_info'>Info
                    <br /> 
                    <input type="text" className='inputs' placeholder='Select'/></label>

                    <br /><label htmlFor="" className='all_info'>Info 
                    <br />
                    <input type="text" className='inputs' placeholder='Select'/></label>

                   <br /> <label htmlFor="" className='all_info'>Info 
                    <br />
                    <input type="text" className='inputs' placeholder='Select'/></label>
                </div>


                <div className='mid_right'>
                <label htmlFor="" className='all_info'>Info
                <br /> <input type="text" className='inputs' placeholder='Select'/></label>

                <br /><label htmlFor="" className='all_info'>Info 
                <br /><input type="text" className='inputs' placeholder='Select'/></label>

                <br /><label htmlFor="" className='all_info'>Info 
                <br /><input type="text" className='inputs' placeholder='Select'/></label>
                </div>
                </form>
            </div>
            <div className='button_position'><button className='next_big'>Next</button></div>
            <div className='terms'>Reviewed all the Terms and Conditions</div>
            <div className='terms'> <span className='checkbox'><input type="checkbox"/></span>Agreeing with Privacy Conditions</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ReviewSubmit
