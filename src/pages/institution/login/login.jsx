import React from 'react'
import './style.css'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import iconsgreen from '../../../assets/iconsgreen.svg'
import greenskey from '../../../assets/greenskey.svg'
import mail_black from '../../../assets/mail_black.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UniversityLogin = () => {


  const [eml, setEml] = useState("")
  const [pwd, setPwd] = useState("")


const handleSubmit = async (e) => {
   e.preventDefault()
}

  return (
   <div className='darker' id='darker'>
    <UnsignedNav/>
    <div className='black_page'>
      <div className='div'>

  <div className='sign_flex'>
<div className=''>
<div><img src={iconsgreen} alt="img" className='grening'/></div>
<div className='sign_white'>Sign In</div>
<div className='sign_opac'>Sign in to schedule a test, view <br /> scores, update your profile and <br /> more.</div>
</div>


<div className='down_sign'>
 <form action="" className='inside_form'>
  <div> <img src={mail_black} alt="img" className='icon_immg'/>
  <input 
  type="email"
   className='email'
    placeholder='Email'
    id='email'
    onChange={(e)=>{setEml(e.target.value)}}
    value={eml}

    /> <br /> 
  </div>
 <div> <img src={greenskey} alt="img" className='icon_immg'/>
  <input
   type="password"
   className='pwd'
    placeholder='Password'
    id='pwd'
    onChange={(e)=>{setPwd(e.target.value)}}
    value ={pwd}
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

export default UniversityLogin
