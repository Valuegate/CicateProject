import React, {useState, useEffect} from "react";
import PersonalData from "../pages/student/personaldata/personaldata";
import {useNavigate} from 'react-router-dom'
import Review from "../pages/student/review/review";
const User_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const Email_Regex = /^([a-zA-Z0-9.-_+])+(@[a-zA-Z0-9-]+).[a-zA-Z]{2,}$/;
const Surname_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
const Degree_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{7,23}$/;


const Register = () => {

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
<>
    <div>
    <PersonalData
  userName ={userName}
  setUserName ={setUserName}
  userSurname ={userSurname}
  setUserSurname ={setUserSurname}
  userDegree ={userDegree}
  setUserDegree ={setUserDegree}
  userAccount = {userAccount}
  setUserAccount = {setUserAccount}
  userEmail = {userEmail}
  setUserEmail = {setUserEmail}
  validUser = {validUser}
  validUserAccount = {validUserAccount}
  validUserEmail = {validUserEmail}
  validUserSurname  = {validUserSurname}
  validUserDegree ={validUserDegree}
  handleSubmit = {handleSubmit}
/>


    </div>
    </>
  );
};

export default Register
