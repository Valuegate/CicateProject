import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import './style.css'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'


const TimeDate = () => {
  
  const {  img,setImg, setValidImg, validImg,
    time, setTime,validTime, setValidTime,
    test, setTest,validTest, setValidTest,
    day, setDay, validDay, setValidDay,
    month, setMonth, validMonth, setValidMonth} = useRegisterContext()
  
  const Navigate = useNavigate()


const handleSubmit = (e) => {
e.preventDefault();
Navigate('/student/photovalidation')

};
  
  
  
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

          <div className='choose2'>
            <label htmlFor="" className='labels'> <span className='numbers_green'>1</span>Choose Month: <br />
            <input 
            type="month"
            className='inputs'
            placeholder="yyyy-mm-dd"
            onChange={(e)=>setMonth(e.target.value)}/>
            </label> <br /> 
            <label htmlFor="" className='labels'><span className='numbers_green'>2</span>Select Day: <br />
            <input 
            type="date" 
            className='inputs'
            placeholder="yyyy-mm-dd"
            onChange={(e)=>setDay(e.target.value)}
            /></label>
          </div>

          <div className='choose1'>
            <label htmlFor="" className='labels'> <span className='numbers_green'>3</span>Choose Available Time:
           <br />
           
           <input
           type="time"
           className='inputs'
          placeholder="hh-mm-ss"
          onChange={(e)=>setTime(e.target.value)}
          /></label>
            <br />
     
            <div className='push_button'>
              <button className='next_big' onClick={handleSubmit}>Next</button>
</div>
          </div>
          
        </div>
      <BackButton/>
          </div>
         
        </div>
   
        <Footer />
      </div>
    </div>
  )
}

export default TimeDate
