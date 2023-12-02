import React, {useState, useEffect, useRef} from "react";
import PersonalData from "../pages/student/personaldata/personaldata";

const User_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Email_Regex = /^([a-zA-Z0-9.-_+])+(@[a-zA-Z0-9-]+).[a-zA-Z]{2,}$/;




const Register = () => {;

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
    const validate = User_regex.test(userDegree)
    console.log(validate)
    console.log(userDegree)
    setValidUserDegree(validate)
},[userDegree])

useEffect(() => {
const validate = User_regex.test(userSurname)
console.log(validate)
console.log(userSurname)
setValidUserSurname(validate)
},[userSurname])

useEffect(() => {
    const validate = User_regex.test(userAccount) 
    console.log(validate)
    console.log(userAccount)
    setValidUser(validate)
    },[userAccount])
    
useEffect(() => {
    const validate = Email_Regex.test(userEmail)
    console.log(validate)
    console.log(userEmail)
    setValidUserEmail(validate)
},[userEmail])

useEffect(() => {

},[])


useEffect(() => {

},[])


useEffect(() => {

},[])


  return (

    <div>
      <input
      type="text"
      value={userName}
      onChange={(event) => setUserName(event.target.value)}
      />
{validUser ? (
    <span>valid username</span>
)  : (<span>invalid username</span>
)}



    </div>
  );
};

export default Register
