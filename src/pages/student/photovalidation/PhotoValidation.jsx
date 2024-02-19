import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import imgupload from '../../../assets/imgupload.svg'
import './style.css'
import {useNavigate} from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'



const PhotoValidation = () => {
  const {  img,setImg, setValidImg, validImg,
    time, setTime,validTime, setValidTime,
    test, setTest,validTest, setValidTest,
    day, setDay, validDay, setValidDay,
    month, setMonth, validMonth, setValidMonth} = useRegisterContext()

  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
Navigate('/student/reviewsubmit')
  }

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
    <input 
      accept="image/*"
      id="icon-button-file"
        type="file" 
        style={{ display: 'none' }}
        onChange={(e)=>setImg(e.target.files[0])}
        />
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
     
    <span className='so_wrapper'>This is for us to know how <br />you look before we meet <br /> you</span>
    
 
  

    </div>
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

export default PhotoValidation
