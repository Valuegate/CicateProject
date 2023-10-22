import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import imgupload from '../../../assets/imgupload.svg'
import './style.css'

const PhotoValidation = () => {
  return (
    <div>
<div>
  <SignedNav/>
</div>
<div className='try'>
<div className='second_block'>
  <TestCarousel/>

  <div className='flex_idd'>
    <div className='photo_box'>
    <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file" className='photo_tex'>
        <img src={imgupload} alt="img" />
        <br />
        Photo <br />Validation
      </label>
    </div>

    <div className='downsize'>
      <span className='please_wrapper'>Please upload your <br /> recent photo</span>
      <br />
      <br />
      <br />
    <span className='so_wrapper'>This is for us to know how <br />you look before we meet <br /> you</span>
    </div>
  </div>
  <div className='button_position'> <button className='next_big'>Next</button></div>
</div>
</div>
<Footer/>
    </div>
  )
}

export default PhotoValidation
