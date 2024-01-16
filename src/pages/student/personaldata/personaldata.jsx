import React from 'react';
import './style.css'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useRegisterContext } from '../../../auth/Register';
import {useNavigate } from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton';



    const PersonalData = () => {
     
  const {validUser, 
    userDegree,
    user,
    location,
    instName,
    linkedin,
    address,
    unitype,
    validAddress,
    validUnitype,
    validLinkedin,
    validInstName,
    validLocation,
      setAddress,
      setLocation,
      setInstName,
      setLinkedin,
      setUnitype,
    setValidAddress,
    setValidLinkedin,
    setValidInstName,
    setValidLocation,
    setValidUnitype, 
    setUser,
    setValidUserr,
    validUserr,
    userAccount, 
    userName,
    setUserAccount,
    setUserName,
    setUserSurname, 
    validUserAccount,
    validUserEmail,
    validUserSurname,
    validUserDegree,
    userSurname,
    setUserDegree,
    userEmail,
    setUserEmail,
    birthDay,
    setBirthDay,
    setValidBirthDay,
    validBirthDay,
           } = useRegisterContext()

           const Navigate = useNavigate()

           const handleSubmit = (e) => {
               e.preventDefault()
               Navigate('/student/additionaldata')
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


    <br /><label htmlFor="student_degree" className='labels'>Degree:
    
    <span className={validUserDegree ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
    <span className={validUserDegree || !userDegree ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> 
     <br />
      <input 
      type="text" 
      placeholder=' enter position'
       className={validUserDegree ? 'input_valid' : !userDegree ? "inputs" : 'input_invalid'}
       id='student_degree'
       onChange={(e) =>setUserDegree(e.target.value)}
       aria-describedby='user_note'
       />
      
    </label>

  
    <p className={userDegree && !validUserDegree ? "instructions" : "offscreen"}  id='user_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
        must begin with a letter. <br />
        letters, numbers, underscores, hyphens  are not allowed </p>

        <br /><label htmlFor="student_degree" className='labels'>Address:
    
    <span className={validAddress ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
    <span className={validAddress || !address ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> 
     <br />
      <input 
      type="text" 
      placeholder=' enter address'
       className={validAddress ? 'input_valid' : !address ? "inputs" : 'input_invalid'}
       id='student_degree'
       onChange={(e) =>setAddress(e.target.value)}
       aria-describedby='user_note'
       />
      
    </label>

  
    <p className={userDegree && !validUserDegree ? "instructions" : "offscreen"}  id='user_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
        must begin with a letter. <br />
        letters, numbers, underscores, hyphens  are not allowed </p>
     </div>

     


     <div className='right_side'>

     <label htmlFor="user" className='labels'>Username:
      
      <span className={validUserr ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
      <span className={validUserr || !user ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> 
         <br />
          <input
           type="text" 
           placeholder='Enter Username'
           className={validUserr ? 'input_valid' : !user ? "inputs" : 'input_invalid'}
            id='user'
            onChange={(e)=> setUser(e.target.value)}
            aria-describedby='user_note'
            />
        </label>
        <p className={user && !validUserr ? "instructions" : "offscreen"}  id='user_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
          Only email format required </p>
  
  
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
      <label htmlFor="student_eml" className='labels'>Date of Birth:
      
    <span className={validBirthDay ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
    <span className={validBirthDay || !birthDay ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> 
       <br />
        <input
         type="date" 
         placeholder="yyyy-mm-dd"
         className={validBirthDay ? 'input_valid' : !birthDay ? "inputs" : 'input_invalid'}
          id='student_eml'
          onChange={(e)=> setBirthDay(e.target.value)}
          aria-describedby='email_note'
          />
      </label>
      <p className={birthDay && !validBirthDay ? "instructions" : "offscreen"}  id='email_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
        Only email format required </p>


        <br /><label htmlFor="student_degree" className='labels'>Location:
    
    <span className={validLocation ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
    <span className={validLocation || !location ? "hide" : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span> 
     <br />
      <input 
      type="text" 
      placeholder=' enter location'
       className={validLocation ? 'input_valid' : !location ? "inputs" : 'input_invalid'}
       id='student_degree'
       onChange={(e) =>setLocation(e.target.value)}
       aria-describedby='user_note'
       />
      
    </label>

  
    <p className={userDegree && !validUserDegree ? "instructions" : "offscreen"}  id='user_note'><FontAwesomeIcon icon={faInfoCircle}/>  4 to 24 characters. <br />
        must begin with a letter. <br />
        letters, numbers, underscores, hyphens  are not allowed </p>

      <div className='submit_section'>
        <button
         className={!validUserEmail || !validUserSurname || !validUser || !validUserr  || !validUserDegree || !validBirthDay || !validAddress || !validLocation ? "inactive_next_big" : "next_big"}
        disabled={!validUserEmail || !validUserSurname || !validUser  || !validUserDegree || !validUserr|| !validBirthDay || !validAddress || !validLocation? true : false}
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

export default PersonalData
