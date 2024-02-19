import React,{useState} from 'react'
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
import Alert from '../../../components/alert/Alert'






const Exam_Register = 'https://ciccate2-production.up.railway.app/api/api/ExamRegister/'
const ReviewSubmit = () => {



  const {  img,setImg, setValidImg, validImg,
    time, setTime,validTime, setValidTime,
    test, setTest,validTest, setValidTest,
    day, setDay, validDay, setValidDay,
    month, setMonth, validMonth, setValidMonth} = useRegisterContext()
 
  const Navigate = useNavigate()
  const [alertMessage, setAlertMessage] = useState(null)
const {userName, id, userEmail} = useAuth()
  
const handleSubmit = (e) => {

    e.preventDefault()

  const formData = new FormData();
formData.append('image', img); // Assuming img is a File object
formData.append('uploaded_images', img); // Assuming img is a File object
formData.append('name', test);
formData.append('time', time);
formData.append('user', id);
formData.append('date', month);


    Client.post(
      Exam_Register, formData,
      {
        headers: { 
       Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
      },
    }
    ).then((res)=>{
   
setAlertMessage({
  type: 'success',
  message:'Account Sucessfully created',
})
setTimeout(() => {
  Navigate('/student/student-dashboard')
  console.log(res);
}, 2000)

    }).catch((err)=>{
      console.log(err)
      setAlertMessage({
        type: 'error',
        message: `Failed to submit try again please`
      })
    })
  }


  const endAlert = () => {
    setAlertMessage(null);
  };

  return (
    <div>
      <div>
        <SignedNav/>
      </div>
      <div className='try'>
        <div className='second_block'>
        { alertMessage && (<Alert
          type={alertMessage.type}
          message={alertMessage.message}
          onClose={endAlert}/>)}

            <TestCarousel/>
            <div>
                <form action="" className='review_flex'>
                <div className=''>
                    <label htmlFor="" className='all_info'>Date
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

                   <br /> <label htmlFor="test" className='all_info'>Test 
                    <br />

                    <select 
                    name="test"
                     id="test" 
                     className='inputs'
                      placeholder='select test'
                      onChange={(e)=>setTest(e.target.value)}
                      >
                      <option value="gate">Gate</option>
                      <option value="pocas">Pocas</option>
                      <option value="gate">Lisa</option>
                    </select>
           </label>



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

             
          
            </div>
            <div className='con'>
      <BackButton/>
          <button className='next_big' onClick={handleSubmit}>Continue to payment</button>

      </div>
            </div>
          
            </div>
           
   

      <Footer/>
    </div>
  )
}

export default ReviewSubmit
