import React from 'react'
import Footer from '../../../components/containers/footer/footer'
import SignedNav from '../../../components/containers/signed/SignedNav'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import wifi from '../../../assets/wiifii.svg'
import houser from '../../../assets/houser.svg'

import './style.css'

const OnlineOfline = () => {
  return (
    <div>
       <div>
        <SignedNav/>
       </div>
       <div className='try'>
       <div className='second_block'>
      <div>
        <TestCarousel/>
      </div>

      <div>
        <div className='questions'>Which format of the <br /> test you prefer?</div>
        </div>

        <div className='onsie'>
          <a href="/" className='onsite-online'><img src={wifi} alt="img" className='images__style' />Onsite</a>
          <a href="/" className='onsite-online1'><img src={houser} alt="img" className='images__style'/>Online</a>
        </div>
        <div className='button_shift'>
        <button className='next_big'>Next</button>
        </div>
      
       </div>

    </div>
    <Footer/>
    </div>
  )
}

export default OnlineOfline
