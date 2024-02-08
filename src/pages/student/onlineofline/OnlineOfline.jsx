import React from 'react'
import Footer from '../../../components/containers/footer/footer'
import SignedNav from '../../../components/containers/signed/SignedNav'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import wifi from '../../../assets/wiifii.svg'
import houser from '../../../assets/houser.svg'
import {useNavigate} from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton'
import './style.css'

const OnlineOfline = () => {
const Navigate = useNavigate()


const handleSubmit = (e) => {
e.preventDefault();
Navigate('/student/timedate')

};
  
  return (
    <div>
       <div>
        <SignedNav/>
       </div>
       <div className='try'>
       <div className='second_block'>
    
        <TestCarousel/>
      
    
        <div className='questions'>Which format of the <br /> test you prefer?</div>
        

        <div className='onsie'>
          <a href="#" className='onsite-online'><img src={wifi} alt="img" className='images__style' />Onsite</a>
          <a href="#" className='onsite-online1'><img src={houser} alt="img" className='images__style'/>Online</a>
        </div>
        <div className='con'>
      <BackButton/>
          <button className='next_big' onClick={handleSubmit}>Next</button>

      </div>
     
       </div>

    </div>
    <Footer/>
    </div>
  )
}

export default OnlineOfline
