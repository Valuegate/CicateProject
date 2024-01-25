import React from 'react'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import { useRegisterContext } from '../../../auth/Register'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton'

import './style.css'

const PersonalInformation = () => {

const Navigate = useNavigate()
  const {validUser,
     userEmail, 
     setUserEmail,
        userAccount,
         setUserAccount,
           validUserEmail,
            userName,
            userSurname,
             setUserName, 
             setUserSurname,
              validUserSurname, 
              validUserAccount,
                validPosition,
                 setPosition,
                  position} = useRegisterContext()
 
  const handleSubmit = (e)=>{
    e.preventDefault();
  Navigate('/institution/additional-information')

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
   
     <div className='fall1'>

     <label htmlFor="student_name" className='labels'>First name:
    
     <span className={validUser ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
     <span className={validUser || !userName? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
      <br />
      <input 
      type="text" 
      placeholder='name'
      className={validUser ? "input_valid": !userName ? "inputs" :"input_invalid"}
       autoComplete='off'
       id='student_name'
       onChange={(e)=>setUserName(e.target.value)
    
      }
       requireds
       aria-describedby='user_note'
       />
      
      </label>
      <p className={userName && !validUser ? "instructions" : "offscreen"}  id='user_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
        must begin with a letter. <br />
        letters, numbers, underscores, hyphens  are not allowed </p>

    <br /><label htmlFor="student_surname" className='labels'>Surname:
    
    <span className={validUserSurname ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
    <span className={validUserSurname || !userSurname ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> <br />
      <input 
      type="text" 
       placeholder='enter surname'
        className={validUserSurname ? "input_valid" : !userSurname ? "inputs" : "input_invalid"}
        id='student_surname'
        onChange={(e)=> setUserSurname(e.target.value)}
        required
        aria-describedby='user_note'
        />
    </label>

    
    <p className={userSurname && !validUserSurname ? "instructions" : "offscreen"}  id='user_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
        must begin with a letter. <br />
        letters, numbers, underscores, hyphens are not allowed </p>


    <br />
    
    <label htmlFor="position_lecturer" className='labels'>Position:
    
    <span className={validPosition ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
    <span className={validPosition || !position ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> 
     <br />
      <input 
      type="text" 
      placeholder=' enter position'
       className={validPosition ? 'input_valid' : !position ? "inputs" : 'input_invalid'}
       id='position_lecturer'
       onChange={(e) =>setPosition(e.target.value)}
       aria-describedby='user_note'
       />
    </label>

    <p className={position && !validPosition ? "instructions" : "offscreen"}  id='user_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
        must begin with a letter. <br />
        letters, numbers, underscores, hyphens  are not allowed </p>
     </div>


     <div className='right_side1'>
      <label htmlFor="act_type" className='labels'>Type of Account: 
      
    <span className={validUserAccount ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
    <span className={validUserAccount || !userAccount ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> 
      <br />
       <select name="act_type"  
      className={validUserAccount ? 'valid_input_country' : !userAccount ? "inputs" : 'invalid_input_country'}
       autoComplete='off'
       onChange={(e)=>
         setUserAccount(e.target.value)}
         required
         id="act_type"
       >
        <option value="University-Member">University Member</option>
        <option value="Faculty-member">Faculty Member</option>
       </select>
      </label>

      <br />
      <label htmlFor="student_eml" className='labels'>E-mail:
      
    <span className={validUserEmail ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
    <span className={validUserEmail || !userEmail ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> 
       <br />
        <input
         type="text" 
         placeholder='enter email'
         className={validUserEmail ? 'input_valid' : !userEmail ? "inputs" : 'input_invalid'}
          id='student_eml'
          onChange={(e)=> setUserEmail(e.target.value)}
          aria-describedby='email_note'
          />
      </label>
      <p className={userEmail && !validUserEmail ? "instructions" : "offscreen"}  id='email_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
        Only email format required </p>


        <br />
      

      <div className='submit_section'>
        <button
         className={!validUserEmail || !validUserSurname || !validUser  || !validUserAccount || !validPosition? "inactive_next_big" : "next_big"}
        disabled={!validUserEmail || !validUserSurname || !validUser  || !validUserAccount  || !validPosition ? true : false}
        onClick={handleSubmit}>Next</button>

       
       
        <span><a href="/institution/university-login" className='already_register'>Already Registered?</a></span>
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

export default PersonalInformation
