import React, {useState, useEffect, createContext, useContext} from "react";
import {useNavigate} from 'react-router-dom'
import RegCarousel from "../components/containers/reg-carousel/RegCarousel";


const Date_Regex = /^\d{4}-\d{2}-\d{2}$/;
const Lang_regex = /^[a-zA-Z\s+][a-zA-Z0-9-_,\\.]{2,23}$/;
const User_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const Email_Regex = /^([a-zA-Z0-9.-_+])+(@[a-zA-Z0-9-]+).[a-zA-Z]{2,}$/;
const Surname_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
const Degree_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{7,23}$/;
const PWD_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Context = createContext();

export const RegisterContext = ({children}) => {

  const Navigate = useNavigate();

 


 
  const [activeState, setActiveState] = useState(false);
  const [userName, setUserName ] = useState("")
  const [validUser, setValidUser] = useState(false)
  

  const [position, setPosition] = useState("")
  const [validPosition, setValidPosition] = useState(false)


  const [birthDay, setBirthDay] = useState("")
  const [validBirthDay, setValidBirthDay] = useState(false)
  
  const [userSurname, setUserSurname] = useState("")
  const [validUserSurname, setValidUserSurname] = useState(false)
  
  const[userDegree, setUserDegree] = useState("")
  const [validUserDegree, setValidUserDegree] = useState(false) 
  
  const [userAccount, setUserAccount] = useState("")
  const [validUserAccount, setValidUserAccount] = useState(false)
  
  const [userEmail, setUserEmail] = useState("")
  const [validUserEmail, setValidUserEmail] = useState(false)


  const [birthCountry, setBirthCountry] = useState("");
const [validBirthCountry, setValidBirthCountry] = useState(false);

const [nativeLang, setNativeLang] = useState("");
const [validNativeLang, setValidNativeLang] = useState(false)

const [citizenship, setCitizenship] = useState("");
const [validCitizenhip, setValidCitizenhip] = useState(false)

const [pwd, setPwd] = useState("")

const [validPwd, setValidPwd] = useState(false)

const [cfmPwd, SetCfmPassword] = useState("")
const [validCfmPwd, SetValidCfmPassword] = useState(false)

const [user, setUser] = useState("")
const [validUserr, SetValidUser] = useState(false)



useEffect(() =>{
const validate = User_regex.test(position)
console.log(validate)
console.log(position)
setValidPosition(validate)

},[position])

useEffect(() => {
  const validate = Lang_regex.test(birthCountry)
  console.log(validate);
  console.log(birthCountry);
  setValidBirthCountry(validate);
  },[birthCountry]);
  
  
  useEffect(() =>{
  const validate = Lang_regex.test(nativeLang)
  console.log(validate);
  console.log(nativeLang);
  setValidNativeLang(validate);
  },[nativeLang]);
  
  useEffect(() =>{
  const validate = Lang_regex.test(citizenship)
  console.log(validate);
  console.log(citizenship)
  setValidCitizenhip(validate);
  },[citizenship]);


  useEffect(() =>{
const validate = Date_Regex.test(birthDay)
console.log(validate);
console.log(birthDay)
setValidBirthDay(validate);
  },[birthDay]);
  
  
  
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




useEffect(() => {
 const validate = PWD_Regex.test(pwd)
 console.log(validate)
 console.log(pwd)
 setValidPwd(validate)
 const match = pwd === cfmPwd && pwd ? true : false
SetValidCfmPassword(match)
}, [pwd, cfmPwd])


useEffect(()=>{
const validate = User_regex.test(user)
console.log(validate)
console.log(user)
SetValidUser(validate)
},[user]);


  const handleSubmit = (e) => {
      e.preventDefault()
      handleClick();
      Navigate('/student/additionaldata')
  }


  const handleClick = ()=> {

    setActiveState(!activeState)
  }
   
  


  return (
<>
    <div>
    <Context.Provider 
 value={{
 userAccount,
 userDegree,
 userEmail,
 userName,
 position,
 validPosition,
 setPosition,
 userSurname,
 User_regex,
 setUserAccount,
 setUserDegree,
 setUserName,
 setValidUser,
 setValidUserAccount,
 setValidUserDegree,
 setValidUserSurname,
 validUser,
 validUserDegree,
 validUserSurname,
 validUserEmail,
 validUserAccount,
 handleSubmit,
 setUserSurname,
 setUserEmail,
 validBirthCountry,
birthCountry,
 setBirthCountry,
 birthDay,
 setBirthDay,
 setValidBirthDay,
 validBirthDay,
 validNativeLang, 
   validCitizenhip,
    nativeLang,
     setNativeLang,
      citizenship, 
      setCitizenship,
      pwd,
      setPwd,
      validPwd,
      validCfmPwd,
      setUser,
      validUserr,
      SetCfmPassword,
      activeState,
      setActiveState,
      }}>

      {children}
      

    </Context.Provider>

    </div>
    </>
  );
};

export const useRegisterContext = () => useContext(Context)
