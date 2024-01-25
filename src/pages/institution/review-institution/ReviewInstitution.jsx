import React,{useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'
import Alert from '../../../components/alert/Alert'

import {Client} from '../../../api/axios'
const Url = 'https://ciccate2-production.up.railway.app/api/api/instituetion/'

const ReviewInstitution = () =>

    {
  
  const {
  linkedin,
  unitype,
  userEmail,
  setUserEmail,
  name,
  biography,
  setName,
  location,
  userSurname,
  setUserSurname,
  facebook,
  twitter,
  pwd,
  userName,
  setUserName,
  setPwd,
  instagram,
  acronym,
  setLinkedin,
  setLocation,
  setPosition,
  setFacebook,
  setInstagram,
  setTwitter,
  position,
  setAcronym,
  setUnitype,
  setBiography,
  setSuccess,
  setErrMsg,
  

  } = useRegisterContext()

const Navigate = useNavigate()
const [alertMessage, setAlertMessage] = useState(null)

const submitForm =  (e) => {
e.preventDefault()
 Client.post(Url,JSON.stringify({
email:userEmail,
position:position,
instagram:instagram,
linkedin:linkedin,
facebook:facebook,
twitter:twitter,
username:name,
institutiontype:unitype,
location:location,
password:pwd,
biography:biography,
}),{
  headers:{
    'Content-Type': 'application/json',
  
  }
}).then((response) => {
  
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


              <label  className='labels'>Type of account: <br />
              <input
                 type="text"
                  className='inputs0'
                  value={unitype}
                  onChange={(e)=>setUnitype(e.target.value)}
                   />
              </label> <br />





              <div className='add_margin'><img src="" alt="" /> 
              <span className='personal_unselected'></span> <br /> 
              <span className='information_unselected'>Information</span></div> <br />
             
              <label className='labels'>Name: <br />
                <input type="text"
                 className='inputs0'
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
                 />
              </label> <br />
             
              <label  className='labels'>Acronym: <br />
               <input type="text"
                className='inputs0'
                value={acronym}
                onChange={(e) => setAcronym(e.target.value)}
                />
              </label> <br />

              <label  className='labels'>Position: <br />
               <input type="text"
                className='inputs0'
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                />
              </label> <br />

              <label  className='labels'>biography: <br />
              <textarea 
          onChange={(e)=> setBiography(e.target.value)}
          name="" 
          id="" 
          cols="20" 
          rows="10"
          value={biography}
          className='inputs'>
            </textarea>
         
              </label> <br />
            
            
              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'></span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label  className='labels'> Password: <br />
                <input 
                type="text"
                 className='inputs0'
                 value={pwd}
                 onChange={(e) => setPwd(e.target.value)}
                 />
              </label> <br />

              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'></span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label  className='labels'> Instagram: <br />
                <input 
                type="text"
                 className='inputs0'
                 value={instagram}
                 onChange={(e) => setInstagram(e.target.value)}
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
              <label  className='labels'> Twitter: <br />
                <input type="text"
                 className='inputs0'
                 value={twitter}
                 onChange={(e)=> setTwitter(e.target.value)}
                
                 />

                 
              </label> <br />



              <label  className='labels'> facebook: <br />
                <input type="text"
                 className='inputs0'
                 value={facebook}
                 onChange={(e)=> setFacebook(e.target.value)}
                
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
                <button className='next_big'  type='submit' onClick={submitForm}>Create</button> 
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

export default ReviewInstitution
