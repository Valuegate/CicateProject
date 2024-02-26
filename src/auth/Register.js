import React, {useState, useEffect, createContext, useContext} from "react";
import {useNavigate} from 'react-router-dom'



const Date_Regex = /^\d{4}-\d{2}-\d{2}$/;
const Lang_regex = /^[a-zA-Z\s+][a-zA-Z0-9-_,\\.]{2,23}$/;
const User_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const Email_Regex = /^([a-zA-Z0-9.-_+])+(@[a-zA-Z0-9-]+).[a-zA-Z]{2,}$/;
const Surname_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
const Degree_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{7,23}$/;
const Url_regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
const Location_regex = /^[a-zA-Z0-9 ]+$/
const Text_area = /^(?=(\b\w+\b\s*){5,})([a-zA-Z\s]{1,500})$/
const Time_regex = /^(?:\d{1,2}|(?:1[0-2]|0?[1-9]))(?:-(?:\d{1,2}|(?:1[0-2]|0?[1-9])))?(?: [0-2]?[0-9]:[0-5][0-9](?::[0-5][0-9])?)?$/
const Img_regex = /^.+\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|ico|csv)$/





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
const [validUserr, setValidUserr] = useState(false)

const [location, setLocation] = useState("")
const [validLocation, setValidLocation] = useState(false)

const [address, setAddress] = useState("")
const [validAddress, setValidAddress] = useState(false);

const [instName, setInstName] = useState("")
const [validInstName, setValidInstName] = useState(false);

const [unitype, setUnitype] = useState("")
const [validUnitype, setValidUnitype] = useState(false)

const [linkedin, setLinkedin] = useState("");
const [validLinkedin, setValidLinkedin] = useState(false)

const [facebook, setFacebook] = useState("")
const [validFacebook, setValidFacebook] = useState(false)

const [twitter, setTwitter] = useState("")
const [validTwitter, setValidTwitter] = useState(false)

const [instagram, setInstagram] = useState("")
const [validInstagram, setValidInstagram] = useState(false)

const [acronym, setAcronym] = useState("")
const [validAcronym, setValidAcronym] = useState(false)

const [biography, setBiography] = useState("")
const [validBiography, setValidBiography] = useState(false)

 const [name, setName] = useState("")
 const [validName, setValidName] = useState(false)

 const [test, setTest] = useState("")
 const [validTest, setValidTest] = useState(false)

 const [time, setTime] = useState("")
 const [validTime, setValidTime] = useState(false)

 const [month, setMonth] = useState("")
 const [validMonth, setValidMonth] = useState(false)

 const [day, setDay] = useState("")
 const[validDay,setValidDay] = useState(false)

 const  [img, setImg] = useState("")
 const [validImg, setValidImg] = useState(false)
 
 const [question, setQuestion] = useState("")
 const [validQuestion, setValidQuestion] = useState(false)


 const [errMsg, setErrMsg] = useState('')

useEffect(() =>{
  const validate = Img_regex.test(question)
  console.log(validate)
  console.log(question)
  setValidQuestion(validate)
},[question])

 useEffect(()=>{
const validate = Img_regex.test(img)
console.log(validate)
console.log(img)
setValidImg(validate)
 },[img])

 useEffect(()=>{
const validate = Time_regex.test(time)
console.log(validate)
console.log(time)
setValidTime(validate)
 },[time])

 useEffect(() => {
  const validate = Time_regex.test(day)
  console.log(validate)
  console.log(day)
  setValidDay(validate)
 },[day])

 useEffect(()=>{
const validate = Time_regex.test(month)
console.log(validate)
console.log(month)
setValidMonth(validate)
 },[month])

 useEffect(() => {
  const validate = User_regex.test(test)
  console.log(validate)
  console.log(test)
  setValidTest(validate)
 },[test]);

 useEffect(() =>{
const validate = Url_regex.test(twitter)
console.log(validate)
console.log(twitter)
setValidTwitter(validate)
 },[twitter])

 useEffect(() =>{
  const validate = Url_regex.test(facebook)
  console.log(validate)
  console.log(facebook)
  setValidFacebook(validate)
   },[facebook])

useEffect(() =>{
    const validate = Url_regex.test(instagram)
    console.log(validate)
    console.log(instagram)
    setValidInstagram(validate)
     },[instagram])

useEffect(() =>{
      const validate = User_regex.test(acronym)
      console.log(validate)
      console.log(acronym)
      setValidAcronym(validate)
       },[acronym])

useEffect(() =>{
        const validate = Text_area.test(biography)
        console.log(validate)
        console.log(biography)
        setValidBiography(validate)
        },[biography])

         useEffect(() =>{
          const validate = User_regex.test(name)
          console.log(validate)
          console.log(name)
          setValidName(validate)
           },[name])

useEffect(()=>{
const validate = User_regex.test(unitype)
  console.log(validate)
  console.log(unitype)
  setValidUnitype(validate)
},[unitype])


useEffect(()=>{
const validate = User_regex.test(instName)
console.log(validate)
console.log(instName)
setValidInstName(validate)
},[instName])


useEffect(()=>{
  const validate = Location_regex.test(address)
  console.log(validate)
  console.log(address)
  setValidAddress(validate)
},[address]);

useEffect(()=>{
  const validate = Location_regex.test(location)
  console.log(validate)
  console.log(location)
  setValidLocation(validate)

},[location]);

useEffect(()=>{
  const validate = Url_regex.test(linkedin)
  console.log(validate)
  console.log(linkedin)
  setValidLinkedin(validate)
},[linkedin]);


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
    const validate = User_regex.test(user)
    console.log(validate)
    console.log(user)
    setValidUser(validate)
  },[user])

  useEffect(() => {
    const validate = PWD_Regex.test(cfmPwd)
    console.log(validate)
    console.log(cfmPwd)
    setValidUser(validate)
  },[cfmPwd])



useEffect(() => {
 const validate = PWD_Regex.test(pwd)
 console.log(validate)
 console.log(pwd)
 console.log(cfmPwd)
 setValidPwd(validate)
 const match = pwd === cfmPwd && pwd ? true : false
SetValidCfmPassword(match)
}, [pwd, cfmPwd])


useEffect(()=>{
const validate = User_regex.test(user)
console.log(validate)
console.log(user)
setValidUserr(validate)
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
 errMsg,
  setErrMsg,
 validPosition,
 setPosition,
 userSurname,
 User_regex,
 setUserAccount,
 setUserDegree,
 setUserName,
 setValidUser,
 question,
 setValidQuestion,
 setQuestion,
 validQuestion,
 user,
 setValidUserr,
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
      setValidAddress,
      setValidLinkedin,
      setValidInstName,
      setValidLocation,
      setValidUnitype,
      setAddress,
      setLocation,
      setInstName,
      setLinkedin,
      setUnitype,
      pwd,
      setPwd,
      validPwd,
      validCfmPwd,
      cfmPwd,
      setUser,
      validUserr,
      SetCfmPassword,
      activeState,
      setActiveState,
      facebook,
      twitter,
      instagram,
      name,
      biography,
      acronym,
      setFacebook,
      setTwitter,
      setInstagram,
      setName,
      setBiography,
      setAcronym,
      setValidName,
      validAcronym,
      validBiography,
      validFacebook,
      validTwitter,
      validName,
      validInstagram,
      img,setImg, setValidImg, validImg,
      time, setTime,validTime, setValidTime,
      test, setTest,validTest, setValidTest,
      day, setDay, validDay, setValidDay,
      month, setMonth, validMonth, setValidMonth,


      }}>

      {children}
      

    </Context.Provider>

    </div>
    </>
  );
};

export const useRegisterContext = () => useContext(Context)
