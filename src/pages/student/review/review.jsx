import React, { useEffect, useState } from 'react'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'
import {useNavigate} from 'react-router-dom'
import { Client } from '../../../api/axios'
import Alert from '../../../components/alert/Alert'


const Url = 'https://ciccate2-production.up.railway.app/api/api/candidate/';

const Review =  () => {


const Navigate = useNavigate()

const [alertMessage, setAlertMessage] = useState(null)
  
  const {
  setUserEmail,
  setUserName,
  setUserSurname,
  userDegree,
  userEmail,
  setPwd,
  userName,
  pwd,
  setUserDegree,
  userSurname,
  birthCountry,
  setBirthCountry,
  nativeLang,
  setNativeLang,
  citizenship,
  setCitizenship,
  birthDay,
  linkedin,
  unitype,
  address,
  location,
  setLocation,
  setAddress,
  setUnitype,
  setLinkedin,
  setBirthDay,
  setSuccess,
  setErrMsg,
 
  } = useRegisterContext()



const submitForm = (e) => { 
e.preventDefault()

  Client.post(
    Url, JSON.stringify({
          email:userEmail,
          name:userName,
          surname:userSurname,
          date_of_birth:birthDay,
          degree: userDegree,
          country_of_birth:birthCountry,
          native_language:nativeLang,
          country_of_citizenship:citizenship,
          password:pwd,
          address:address,
          institution_name:'sweeter',
          type_of_univerity:unitype,
          location:location,
          linkedin:linkedin,
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      }
   ).then((response) => {
  
setAlertMessage({
  type: 'success',
  message:'Account Sucessfully created',
})
setTimeout(() => {
  Navigate('/login')
  console.log(response);
}, 2000)


}).catch((error) => {

  if(error.response){
    const responseData = error.response.data;
if(responseData && responseData.errors){
  const errorMessages = Object.values(responseData.errors).flat()

  console.log(errorMessages);
  
  setAlertMessage({
    type: 'error',
    message: `${errorMessages} Try again`
  })
}

}
else {
setAlertMessage({
  type: 'error',
  message: 'Network error. please try again'
})
}
  console.log('error', error);
});

}


const endAlert = () => {
  setAlertMessage(null);
};

  return (
    <div>
       <UnsignedNav/>
      
      <div className='black_page'>
        <div className='div'>
       
        <RegCarousel/>
          <div className='bluk_review'>
        
         <form onSubmit={submitForm}>   
        
              <div>
               <span className='personal_unselected'>Confirm your Information </span><br />
                <span className='information_unselected'>Information</span></div> <br />
                <BackButton/>
              { alertMessage && (<Alert
          type={alertMessage.type}
          message={alertMessage.message}
          onClose={endAlert}/>)}

               <label  className='labels'>First name: <br />
                <input type="text"
                className='inputs0'
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />
              </label> <br />
              <label
                className='labels'> Surname: <br />
                <input
                 type="text"
                  className='inputs0'
                  value={userSurname}
                  onChange={(e)=>setUserSurname(e.target.value)}
                   />
              </label> <br />


              <label  className='labels'>User Degree: <br />
              <input
                 type="text"
                  className='inputs0'
                  value={userDegree}
                  onChange={(e)=>setUserDegree(e.target.value)}
                   />
              </label> <br />





              <div className='add_margin'><img src="" alt="" /> 
              <span className='personal_unselected'></span> <br /> 
              <span className='information_unselected'>Information</span></div> <br />
             
              <label className='labels'>Country of Birth: <br />
                <input type="text"
                 className='inputs0'
                 value={birthCountry}
                 onChange={(e)=> setBirthCountry(e.target.value)}
                 />
              </label> <br />
             
              <label  className='labels'>Country of Citizenship: <br />
               <input type="text"
                className='inputs0'
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
                />
              </label> <br />

              <label  className='labels'>Native Language: <br />
               <input type="text"
                className='inputs0'
                value={nativeLang}
                onChange={(e) => setNativeLang(e.target.value)}
                />
              </label> <br />
            
            
              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'></span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label  className='labels'> Password <br />
                <input 
                type="text"
                 className='inputs0'
                 value={pwd}
                 onChange={(e) => setPwd(e.target.value)}
                 />
              </label> <br />

              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'></span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label  className='labels'> Address: <br />
                <input 
                type="text"
                 className='inputs0'
                 value={address}
                 onChange={(e) => setAddress(e.target.value)}
                 />
              </label> <br />

              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'></span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label  className='labels'> Location: <br />
                <input 
                type="text"
                 className='inputs0'
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
                 />
              </label> <br />

              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'></span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label  className='labels'> Linkedin: <br />
                <input 
                type="text"
                 className='inputs0'
                 value={linkedin}
                 onChange={(e) => setLinkedin(e.target.value)}
                 />
              </label> <br />
              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'></span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label  className='labels'> Institution Type: <br />
                <input 
                type="text"
                 className='inputs0'
                 value={unitype}
                 onChange={(e) => setUnitype(e.target.value)}
                 />
              </label> <br />

              

             

              <div>
              <div className='email_margin'>
              <label  className='labels'> Date Of Birth: <br />
                <input type="date"
                 className='inputs0'
                 value={birthDay}
                 onChange={(e)=> setBirthDay(e.target.value)}
                
                 />
              </label> <br />
              <label className='labels'>Email: <br />
                <input type="email"
                 className='inputs0' 
                 value={userEmail}
                 onChange={(e)=> setUserEmail(e.target.value)}
                 />
              </label> <br />
              </div>

              <div className=''>
             
              </div>
             
            </div>
               <div  className='form_review'>
               <div>
                <input type="checkbox"
                
                required
                /> <label  className="review_terms"> Reviewed all the terms and conditions</label>
                <div> <br />
                <input type="checkbox"
             
                 required
                 /> <label className="review_terms"> Agreeing with Privacy Conditions</label>
               </div>
               <br />
               <div className='nexty'>
                <button className='next_big'  type='submit'>Create</button> 
               </div>
              
             
               </div>
               </div>
               </form>
            </div>





           
          
          </div>
         </div>
     
     
    
      <BlackFooter/>
    </div>
  )
}
    

export default Review
