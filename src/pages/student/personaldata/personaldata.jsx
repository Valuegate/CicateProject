import React,{useEffect, useState, usereq} from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const User_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const Email_Regex = /^([a-zA-Z0-9.-_+])+(@[a-zA-Z0-9-]+).[a-zA-Z]{2,}$/;
const Surname_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
const Degree_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{7,23}$/;


const PersonalData = () => {

const Navigate = useNavigate();


  const [userName, setUserName ] = useState("")
  const [validUser, setValidUser] = useState(false)
  
  const [userSurname, setUserSurname] = useState("")
  const [validUserSurname, setValidUserSurname] = useState(false)
  
  const[userDegree, setUserDegree] = useState("")
  const [validUserDegree, setValidUserDegree] = useState(false) 
  
  const [userAccount, setUserAccount] = useState("")
  const [validUserAccount, setValidUserAccount] = useState(false)
  
  const [userEmail, setUserEmail] = useState("")
  const [validUserEmail, setValidUserEmail] = useState(false)
  
  
  
  useEffect(() => {
  const validate = User_regex.test(userName) 
  console.log(validate)
  console.log(userName)
  setValidUser(validate)
  },[userName])
  
  useEffect(() => {
      const validate = Degree_Regex.test(userDegree)
      console.log(validate)
      console.log(userDegree)
      setValidUserDegree(validate)
  },[userDegree])
  
  useEffect(() => {
  const validate = Surname_Regex.test(userSurname)
  console.log(validate)
  console.log(userSurname)
  setValidUserSurname(validate)
  },[userSurname])
  
  useEffect(() => {
      const validate = User_regex.test(userAccount) 
      console.log(validate)
      console.log(userAccount)
      setValidUserAccount(validate)
      },[userAccount])
      
  useEffect(() => {
      const validate = Email_Regex.test(userEmail)
      console.log(validate)
      console.log(userEmail)
      setValidUserEmail(validate)
  },[userEmail])


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
       onChange={(e)=> setUserName(e.target.value)}
       required
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
     </div>


     <div className='right_side'>
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
        <option value="Student">New Student</option>
        <option value="Registered-Student">Registered student</option>
       </select>
      </label>

      <br /><label htmlFor="student_eml" className='labels'>E-mail:
      
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

      <div className='submit_section'>
        <button
         className={!validUserEmail || !validUserSurname || !validUser  || !validUserAccount || !validUserDegree ? "inactive_next_big" : "next_big"}
        disabled={!validUserEmail || !validUserSurname || !validUser  || !validUserAccount || !validUserDegree ? true : false}
        onClick={handleSubmit}>Next</button>

       
       
        <span className=''><a href="/institution/university-login" className='already_register'>Already Registered?</a></span>
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
