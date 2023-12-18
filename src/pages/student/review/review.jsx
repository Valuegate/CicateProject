import React, { useEffect, useState } from 'react'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'
import {useNavigate} from 'react-router-dom'

import { Client } from '../../../api/axios'



const Url = 'https://cicate-production.up.railway.app/user/register/';

const Review =  () =>

    {

  const Navigate = useNavigate();


  const {
  setUserEmail,
  setUserName,
  setUserSurname,
  userDegree,
  userEmail,
  setUserPwd,
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
  setBirthDay,
  setSuccess,
  setErrMsg
 
  } = useRegisterContext()

  
  const submitForm =  async (e) => {
    e.preventDefault();

  
    try {
      const response =  await Client.post(
      Url,JSON.stringify({
        name:userName,
        surname:userSurname,
        Password:pwd,
        degree: userDegree,
         country_of_birth:birthCountry,
         country_of_citizenship:citizenship,
          native_language:nativeLang,
        date_of_birth:birthDay,
        email:userEmail,
      }),
      
     {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        
      });
      Navigate('student/dash-board')
      console.log(response);
    } catch (e) {
      console.log('error submitting form',e);
    }
}

const [post, setPost] = useState(null)


/*
useEffect=(()=>{

  Client.post(
    Url,{
      name:{userName},
      surname:{userSurname},
      Password:{pwd},
      degree: {userDegree},
       country_of_birth:{birthCountry},
       country_of_citizenship:{citizenship},
        native_language:{nativeLang},
      date_of_birth:{birthDay},
      email:{userEmail},
    }
  )
  .then(res=> console.log(res))
  .catch(err => console.error(err))
},[])

*/
  
  


    
     


  return (
    <div>
       <UnsignedNav/>
      
      <div className='black_page'>
        <div className='div'>
      
         <RegCarousel/>
          <div className='bluk_review'>
         
         <form>   
        
              <div>
               <span className='personal_unselected'>Confirm your Information </span><br />
                <span className='information_unselected'>Information</span></div> <br />
                <BackButton/>
               <label  className='labels'>First name: <br />
                <input type="text"
                className='inputs0'
                value={userName}
                onChange={(e)=>setUserName(e.target.userName)}
                />
              </label> <br />
              <label
                className='labels'> Surname: <br />
                <input
                 type="text"
                  className='inputs0'
                  value={userSurname}
                  onChange={(e)=>setUserSurname(e.target.userSurname)}
                   />
              </label> <br />


              <label  className='labels'>User Degree: <br />
              <input
                 type="text"
                  className='inputs0'
                  value={userDegree}
                  onChange={(e)=>setUserDegree(e.target.userDegree)}
                   />
              </label> <br />





              <div className='add_margin'><img src="" alt="" /> 
              <span className='personal_unselected'></span> <br /> 
              <span className='information_unselected'>Information</span></div> <br />
             
              <label className='labels'>Country of Birth: <br />
                <input type="text"
                 className='inputs0'
                 value={birthCountry}
                 onChange={(e)=> setBirthCountry(e.target.birthCountry)}
                 />
              </label> <br />
             
              <label  className='labels'>Country of Citizenship: <br />
               <input type="text"
                className='inputs0'
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.citizenship)}
                />
              </label> <br />

              <label  className='labels'>Native Language: <br />
               <input type="text"
                className='inputs0'
                value={nativeLang}
                onChange={(e) => setNativeLang(e.target.nativeLang)}
                />
              </label> <br />
            
            
              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'></span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label  className='labels'> Password <br />
                <input type="text"
                 className='inputs0'
                 value={pwd}
                 onChange={(e) => setUserPwd(e.target.pwd)}
                 />
              </label> <br />
             

              <div>
              <div className='email_margin'>
              <label  className='labels'> Date Of Birth: <br />
                <input type="date"
                 className='inputs0'
                 value={birthDay}
                 onChange={(e)=> setBirthDay(e.target.birthDay)}
                
                 />
              </label> <br />
              <label className='labels'>Email: <br />
                <input type="email"
                 className='inputs0' 
                 value={userEmail}
                 onChange={()=> setUserEmail(userEmail)}
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
                <button className='next_big' onClick={submitForm}>Create</button> 
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
