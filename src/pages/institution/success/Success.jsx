import React from 'react'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import trophyy from  '../../../assets/trophyy.svg'

const Success = () => {
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
<RegCarousel/>
<div className='justify_bluk'>
<div className='bluk4'>


  <div className='done'>
    
 <div className='congrats_below'>cicate</div>
<div className='congrats_below'><img src={trophyy} alt="img" className='img_size' /></div>
<div className='congrats'>Congratulations!</div>
<div className='congrats_below'>Go Straight to the <br /> Dashboard and start using <br />it now</div>

<div className='bottom_wg'>
  <div className='wid'><a href="/" className='white_flex'>Dashboard Tutorial</a></div>
  <div className='wid'><a href="/student/student-dashboard" className='green_flex'>My Dashboard</a></div>
</div>
</div>
</div>
</div>

<BlackFooter/>
        </div>
      </div>
    </div>
  )
}

export default Success
