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
import Loader from '../../../loader'






const Exam_Register = 'https://ciccate2.onrender.com/api/api/ExamRegister/'

const ReviewSubmit = () => {
const [Loading, setIsLoading] = useState(false)


  const {  img,setImg,
    time, setTime,
    month, setMonth} = useRegisterContext()
 
  const Navigate = useNavigate()
  const [alertMessage, setAlertMessage] = useState(null)
const { id, setId} = useAuth()
  
const handleSubmit = () => {
setIsLoading(true)
    

const formData = new FormData(); // Assuming img is a File object
formData.append('uploaded_images', img); // Assuming img is a File object
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
   setIsLoading(false)
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
            {Loading ? (
                <div
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <div>
                    <h3>
                        please wait 
                    </h3>
                </div>
            )}
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

                   <br /> 



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
                 onChange={()=>setId(id)}
                  
                  /></label>

                <br />
                
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
