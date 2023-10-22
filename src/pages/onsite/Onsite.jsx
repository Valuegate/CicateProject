import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import './style.css'
import wifi from '../../assets/wifi.svg'
import physical from '../../assets/physical.svg'
import Footer from '../../components/containers/footer/footer'

const Onsite = () => {
  return (
    <div>
    <div>
  <div>
    <Navbar/>
  </div>
    <div className="green_box">
      <div className='ellipse'></div>
      <div className='ellipse1'></div>
</div>

<div className="prep_header">How to Prepare <br /> Effectively!</div>
<div>
<p className="sub_header">Click to see the steps!</p>
</div>
<ul className='mode'>
<li> <img src={wifi} alt="img" className='online_img'/><a href="/online" className='online1'>Online</a></li>
<li ><img src={physical} alt="img" className='onsite_img'/><a href="/onsite" className='onsite1'>Onsite</a></li>
</ul>
<div className='icns'>
<div className='numbers'>1</div>
<div className='numbers'>2</div>
</div>

<div className='icns2'>
<p className='bolds1'>Introduction and preparation </p>
<p className='bolds'>Assesment
Overview </p>
</div>
<div className='icns2'>
<p className='info'>The CICATE motivation congruency test is a computer-based test
 consisting of multiple-choice questions. The test is timed and has a set number of
  questions. It is important to familiarize
 yourself with the test format beforehand, so you can manage your time effectively
  and have a better chance of doing well. </p>
<p className='info'>
The CICATE motivation congruency test is a computer-based 
test consisting of multiple-choice questions. The test is 
timed and has a set number of questions. It is important to familiarize
 yourself with the test format beforehand, so you can manage your time 
 effectively and have a better chance of doing well.
 </p>
</div>
<div className='icns'>
<div className='numbers'>3</div>
<div className='numbers'>4</div>
</div>
<div className='icns2'>
<p className='bolds1'>Study Materials for better results </p>
<p className='bolds'>Study Strategies</p>
</div>

<div className='icns2'>
<p className='info'>The CICATE motivation congruency test is a computer-based test
 consisting of multiple-choice questions. The test is timed and has a set number 
 of questions. It is important to familiarize yourself with the test format beforehand, 
so you can manage your time effectively and have a better chance of doing well. </p>
<p className='info'>The CICATE motivation congruency test is 
a computer-based test consisting of multiple-choice questions. 
The test is timed and has a set number of questions. It is important to familiarize yourself 
with the test format beforehand, so you can manage your
 time effectively and have a better chance of doing well. </p>
</div>


<div className='icns3'>
<p className='bolds1'>Conclusion</p>
</div>
<div className='icns3'>
<p className='info'>In conclusion, onsite preparation is the foundation of success 
in CICATE assessments. By utilizing the resources and guidance provided,
 you'll be well-equipped to showcase your true potential. We encourage you
  to make the most of these resources to ensure a confident and 
successful assessment experience. Your journey to academic 
and career excellence begins with thorough preparation. </p>
</div>
<div className="green_box">
      <div className='ellipse'></div>
      <div className='ellipse1'></div>
</div>
</div>
<Footer/>
  </div>
  )
}

export default Onsite
