import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import {useNavigate} from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton'


const ReviewSubmit = () => {
  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
Navigate('/student/paymentpage')
  }




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
            <div className='dun_flex'> 
          
            <div className='terms'>Reviewed all the Terms and Conditions <br /> 
            <span className='checkbox'>
              <input type="checkbox"/>
              </span>Agreeing with Privacy Conditions
              </div>

              <div className='push_button'>
              <button className='next_big' onClick={handleSubmit}>Next</button>
              <BackButton/>
            </div>
          
            </div>

            </div>
          
            </div>
           
   

      <Footer/>
    </div>
  )
}

export default ReviewSubmit
