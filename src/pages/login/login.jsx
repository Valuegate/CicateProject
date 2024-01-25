import React,{useContext, useState} from 'react'
import './style.css'
import BlackFooter from '../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../components/containers/unsignedNav/UnsignedNav'
import { useRegisterContext } from '../../auth/Register'
import iconsgreen from '../../assets/iconsgreen.svg'
import greenskey from '../../assets/greenskey.svg'
import mail_black from '../../assets/mail_black.png'
import Alert from '../../components/alert/Alert'
import { useAuthLogin } from '../../auth/login'

const Login = () => {
  
  const {handleLogin, endAlert,alertMessage} = useAuthLogin()



const {
  userEmail,
  setPwd,
  setUserEmail,
  pwd,
} = useRegisterContext()




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

 <form  className='inside_form' onSubmit={handleLogin}>
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
  <button type='submit' className='green_login'>Login</button>
    <br /> 
    <span ><a href="/choose" className='already_register'>Not yet registered?</a></span>
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
