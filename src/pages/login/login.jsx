import React,{useContext, useState, useEffect} from 'react'
import './style.css'
import BlackFooter from '../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../components/containers/unsignedNav/UnsignedNav'
import { useRegisterContext } from '../../auth/Register'
import iconsgreen from '../../assets/iconsgreen.svg'
import greenskey from '../../assets/greenskey.svg'
import mail_black from '../../assets/mail_black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../auth/AuthProvider'
import { Client } from '../../api/axios'
import Alert from '../../components/alert/Alert'


const Login = () => {

const {auth, setAuth} = useContext(AuthContext)
const [errMsg, setErrMsg] = useState('')
const [alertMessage, setAlertMessage] = useState(null)

const Navigate = useNavigate()
const [success, setSuccess] = useState(false)

const Url = 'https://ciccate2-production.up.railway.app/api/api/login/'

const {
  userEmail,
  setPwd,
  setUserEmail,
  pwd,
} = useRegisterContext()




const handleSubmit = async (e) => {
   e.preventDefault();

   try{
const response = await Client.post(
  Url, JSON.stringify({
    
    email:userEmail,
    password:pwd
  }),
  {
    headers: { 'Content-Type': 'application/json' },
  }
);
console.log(JSON.stringify(response?.data));


const access = response?.data?.access;
const id = response?.data?.id;
const token = response?.data?.token;

setAuth({userEmail,pwd,access,id,token});
setSuccess(true);
setAlertMessage({
  type: 'success',
  message: 'logged in successfully',
})
setTimeout(() => {
  Navigate('/student/student-dashboard')
}, 2000);
console.log(success)
}


catch(err){

  const responseData = (err.response.data);
if( responseData && responseData.detail){
const errorMessages = Object.values(responseData.detail).flat()
console.log(errorMessages)
  setAlertMessage({
    type: 'error',
    message: `${errorMessages.join('')} create an account`
  })
}

else if(err.response.status === 401){
setAlertMessage('user not exist invalid credentials')
console.log('User with account does not exist')
}
else{
 setAlertMessage({
  type: 'error',
  message: 'faild to login'

 })
}

}


}
const endAlert = () => {
  setAlertMessage(null);
};

  return (

    
   <div className='darker' id='darker'>
    <UnsignedNav/>
    <div className='black_page'>
      <div className='div'>
{ alertMessage && (<Alert 
type={alertMessage.type}
message={alertMessage.message}
onClose={endAlert}

/>)}
  <div className='sign_flex'>
<div className=''>
<div><img src={iconsgreen} alt="img" className='grening'/></div>
<div className='sign_white'>Sign In</div>
<div className='sign_opac'>Sign in to schedule a test, view <br /> scores, update your profile and <br /> more.</div>
</div>


<div className='down_sign'>

 <form  className='inside_form' onSubmit={handleSubmit}>
  <div> <img src={mail_black} alt="img" className='icon_immg'/>
  <input 
  type="email"
   className='email'
    placeholder='Email'
    id='email'
    value={userEmail}
    onChange={(e)=>setUserEmail(e.target.value)}
     required

    /> <br /> 
  </div>
 <div> <img src={greenskey} alt="img" className='icon_immg'/>
  <input
   type="password"
   className='pwd'
    placeholder='Password'
    id='pwd'
    value ={pwd}
    onChange={(e)=>setPwd(e.target.value)}
    required
    /> <br />
  
  
   </div> 
  <button type='submit'
  onClick={handleSubmit}
   className='green_login'
   >Login</button> <br /> <span ><a href="/choose" className='already_register'>Not yet registered?</a></span>
  <a href="/student/signup" className='forgot_password'>Forgot Password</a> 
 
 </form>
</div>

</div>
<div className='yui'></div>

  <BlackFooter/>
     </div>
   </div>
    </div>
  )
}

export default Login
