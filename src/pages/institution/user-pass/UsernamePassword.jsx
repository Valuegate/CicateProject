import React from 'react'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'
import {useNavigate} from 'react-router-dom'
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

const UsernamePassword = () => {

  const {
    validUserr,
    validCfmPwd,
    validPwd,
    user,
    SetCfmPassword,
    pwd,
    setPwd,
    setUser,
    cfmPwd} = useRegisterContext()
  
  const Navigate = useNavigate()
  
  const handleSubmit = (e) => {
      e.preventDefault()
      Navigate('/student/review')
  }
  


  return (
    <div>
    <UnsignedNav/>
   <div className='black_page'>
     <div className='div'>
       <RegCarousel/>
       <div className='justify_bluk'>
       <div className='bluk'>
         <BackButton/>
         <form action="" className='form_class'>

           <div className='fall01'>
             <label htmlFor="pwd" className='labels'>Password:
             <span className={validPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
             <span className={validPwd || !pwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
              <br /><input
              type="password"
              id='pwd'
              className={validPwd ? "input_valid" : !pwd ? "inputs" : "input_invalid"}
               placeholder='password'
               autoComplete='off'
               onChange={(e) => setPwd(e.target.value)}
               aria-describedby='pwd_note'


               /></label>
                <p id='pwd_note' className={pwd && !validPwd ? "instructions": "offscreen"}>
   <FontAwesomeIcon icon={faInfoCircle}/>
8 to 24 characters . <br />
must include uppercase and lowercase letters, numbers ad special characters,
   </p> <br />
             <label htmlFor="confirm" className='labels'>Confirm Password:
             <span className={validCfmPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
             <span className={validCfmPwd || !cfmPwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
             
              <br /><input type="password"
              className={validCfmPwd ? "input_valid" : !cfmPwd ? "inputs" : "input_invalid"}
                placeholder='confirm password'
                id='confirm'
                autoComplete='off'
                onChange={(e)=> SetCfmPassword(e.target.value)}
                aria-describedby='cfm_password'
                
                /></label>

<p id='cfm_password' className={cfmPwd && pwd !== cfmPwd ? "instructions": "offscreen"}>
   <FontAwesomeIcon icon={faInfoCircle}/>
Confirm passwords must match <br />

   </p>
           </div>


           <div className='right_side2'>
           <label htmlFor="user" className='labels'>Username:
           <span className={validUserr ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
           <span className={validUserr || !user ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
           
            <br /><input type="text" 
            className={validUserr ? "input_valid" : !user ? "inputs" : "input_invalid"}
             placeholder='Username'
             id='user'
             onChange={(e)=> setUser(e.target.value)}
             aria-describedby='user_note'
             /></label>
              <p className={user && !validUserr ? "instructions" : "offscreen"}  id='user_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
     must begin with a letter. <br />
     letters, numbers, underscores, hyphens  are not allowed </p>

           <div className='submit_section'>
   <button
   onClick={handleSubmit}
   disabled={!validUserr || !validPwd || !validCfmPwd ? true : false} 
   className={!validUserr || !validPwd || !validCfmPwd  ? "inactive_next_big" : "next_big"}>Next</button>
    
   </div>
           </div>

         </form>
       </div>
</div>
<BlackFooter/>
     </div>
   </div>
 </div>
  )
}

export default UsernamePassword
