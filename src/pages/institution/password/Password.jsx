import React from 'react'
import { useState, useEffect } from 'react'

import {useNavigate} from 'react-router-dom'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'


const Password = () => {

    const {
        validCfmPwd,
        setValidName,
        validLinkedin,
        validPwd,
        SetCfmPassword,
        pwd,
        name,
        validName,
        setPwd,
        cfmPwd} = useRegisterContext()
      
      const Navigate = useNavigate('/institution/review-institution')
      
      const handleSubmit = (e) => {
          e.preventDefault()
          
          Navigate('/institution/review-institution')
      }
      
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
          <RegCarousel/>
          <div className='justify_bluk'>
          <div className='bluk'>
          
            <form action="" className='form_class'>
          
              <div className='fall'>
                 <BackButton/>
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

                  <br />
                <label htmlFor="confirm" className='labels'>Username:
                <span className={validName ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
                <span className={validName || !name ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
                
                 <br /><input
                  type="text"
                 className={validName ? "input_valid" : !name ? "inputs" : "input_invalid"}
                   placeholder='enter username'
                   id='confirm'
                   autoComplete='on'
                   onChange={(e)=> setValidName(e.target.value)}
                   aria-describedby='cfm_password'
                   
                   /></label>

      <p id='cfm_password' className={cfmPwd && pwd !== cfmPwd ? "instructions": "offscreen"}>
      <FontAwesomeIcon icon={faInfoCircle}/>
  Confirm passwords must match <br />

      </p>     <div className='submit_section'>
      <button
      onClick={handleSubmit}
      disabled={ !validPwd || !validCfmPwd || !validLinkedin ? true : false} 
      className={ !validPwd || !validCfmPwd || !validLinkedin  ? "inactive_next_big" : "next_big"}>Next</button>
       
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

export default Password
