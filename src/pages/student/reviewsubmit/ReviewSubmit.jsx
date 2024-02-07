import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import TestCarousel from '../../../components/containers/test-carousel/TestCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import {useNavigate} from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'
import { useAuth } from '../../../auth/AuthProvider'
import { Client } from '../../../api/axios'
const Exam_Register = 'https://ciccate2-production.up.railway.app/api/api/ExamRegister/'

const ReviewSubmit = () => {

  const {  img,setImg, setValidImg, validImg,
    time, setTime,validTime, setValidTime,
    test, setTest,validTest, setValidTest,
    day, setDay, validDay, setValidDay,
    month, setMonth, validMonth, setValidMonth} = useRegisterContext()
 
  const Navigate = useNavigate()
const {userName, id} = useAuth()
  const handleSubmit = (e) => {

    e.preventDefault()

    Client.post(
      Exam_Register,JSON.stringify({
        image:img,
        uploaded_images:img,
        name:test,
        time:time,
        product:'',
        user:''
      })
    )
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
                    <label htmlFor="" className='all_info'>Month
                    <br /> 
                    <input
                     type="text" 
                     className='inputs' 
                     placeholder='Select'
                     value={month}
                    onChange={(e)=>setMonth(e.target.value)}
                    /></label>

                    <br /><label htmlFor="" className='all_info'>Time 
                    <br />
                    <input type="text"
                    
                    className='inputs'
                     placeholder='Select'
                     value={time}
                     onChange={(e)=>setTime(e.target)}
                     /></label>

                   <br /> <label htmlFor="" className='all_info'>Day 
                    <br />
                    <input 
        
                    type="text"
                     className='inputs' 
                     placeholder='Select'
                     value={day}
                     onChange={(e)=>setDay(e.target)}
                     /></label>
                </div>


                <div className='mid_right'>
                <label htmlFor="" className='all_info'>Image
                <br /> <input
                 type="text"
                  className='inputs'
                   placeholder='Select'
                   value={img}
                   onChange={(e)=>setImg(e.target)}
                   /></label>

                <br /><label htmlFor="" className='all_info'>ID
                <br /><input
                
                type="text"
                 className='inputs'
                  placeholder='Select'
                  value={id}
                 
                  
                  /></label>

                <br /><label htmlFor="" className='all_info'>Username 
                <br />
                <input type="text"
                 className='inputs'
                  placeholder='Select'/>
                  </label>
                
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
