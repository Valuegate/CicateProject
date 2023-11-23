import React from 'react'
import './style.css'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import iconsgreen from '../../../assets/iconsgreen.svg'
import greenskey from '../../../assets/greenskey.svg'
import mail_black from '../../../assets/mail_black.png'


const UniversityLogin = () => {

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
  <div> <img src={mail_black} alt="img" className='icon_immg'/><input type="email" className='email' placeholder='Email'/> <br /> </div>
 <div> <img src={greenskey} alt="img" className='icon_immg'/> <input type="password" className='pwd' placeholder='Password'/> <br /> </div> 
  <button type='submit' className='green_login'>Login</button> <br />
  <a href="/" className='forgot_password'>Forgot Password</a> 
 
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
