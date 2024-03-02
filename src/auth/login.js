import React, {useContext, useState, createContext} from "react";
import { Client } from "../api/axios";
import {useNavigate, useHistory} from 'react-router-dom'
import { useRegisterContext } from "./Register";
import { useAuth } from "./AuthProvider";
import TestPage from "../pages/student/Testpage/TestPage";


const Context = createContext({});
const url = 'https://ciccate2-production.up.railway.app/api/api/'
const QuestionUrl = 'https://ciccate2-production.up.railway.app/api/api/exam/start/'


export const AuthLogin = ({children}) => {

  const {setAuth,setAuthData, setAuthId} = useAuth();
  const [alertMessage, setAlertMessage] = useState(null)
  const [questions, setQuestions] = useState([]);
  const Navigate = useNavigate()
  
  const [success, setSuccess] = useState(false)
  
  const Url = 'https://ciccate2-production.up.railway.app/api/api/login/'
  
  const {
    userEmail,
    pwd,
  } = useRegisterContext()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const handleLogin = async (e) => {
     e.preventDefault();

     try{
  const response = await Client.post(
    Url, JSON.stringify({
      email:userEmail,
      password:pwd,
    }),
    {
      headers: { 'Content-Type': 'application/json',
     Authorization: 'Bearer ' + localStorage.getItem('access') 
    },
    }
  );
  //console.log(JSON.stringify(response?.data));
  
  
  const access = response?.data?.access;
  const id = response?.data?.id;
  const token = response?.data?.token;
  const refresh = response?.data?.refresh;
  
  localStorage.setItem('accesstoken', access)
  localStorage.setItem('refresh', refresh);
  localStorage.setItem('id', id)

  if (response?.data?.access) {
    localStorage.setItem('user', JSON.stringify(response?.data))
  }

  
  setAuth({userEmail,pwd,access,id,token,refresh});
  
  setAuthData(userEmail)
  setAuthId(id);
  
  setAlertMessage({
    type: 'success',
    message: `Welcome ${userEmail}`,
  })

  setSuccess(true);
  
  
  setTimeout(() => {
    Navigate('/')
  }, 2000);
  console.log(success)
  }


  catch(err){
    if (!navigator.onLine) {
      setAlertMessage({
        type: 'error',
        message: 'No internet connection. Please check your device.'
      });
    } else 
    if(err.response){
    const responseData = (err.response.data);
  if( responseData && responseData.detail){
  const errorMessages = Object.values(responseData.detail).flat()
  console.log(errorMessages)
    setAlertMessage({
      type: 'error',
      message: `${errorMessages.join('')} create an account`
    })
  }
  else if(!err.response?.data){
    setAlertMessage({ 
      type:'error',
    message: 'no response from server check your internent'});
  }
  else if(err.response?.status === 401){
  setAlertMessage({
    type:'error',
    message:'user not exist invalid credentials'})

  }
  else {
   setAlertMessage({
    type: 'error',
    message: 'failed to login properly: '
  
   })

  }
  
  }
  
  }
  
  }

 

  const handleLogout = (err) => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.removeItem('user')
   
    setAlertMessage({
      type:'success',
      message: 'Successfully logged out',
  });

  setTimeout(() => {
    Navigate('/login')
},2000);

  };
  const endAlert = () => {
    setAlertMessage(null);
  };



  const getUser = () => {
return JSON.parse(localStorage.getItem('user'));
  }
 

  const GetExams = (e) => {
  Client.get(url).then((resp) => {
    console.log(resp.data);
    const {message} = resp.data;
    alert(message);
  }).catch((err) => {
    if (err){
      console.log(err);
    }
  });
  };


  const startExams = (e) => {
    Client.get(QuestionUrl,{
      headers: { 
      Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
     },
    }).then((resp) => {
      const {questions} = resp.data;
      setQuestions(questions);
      console.log(questions);
      Navigate('/student/information')
     questions.forEach(({id, question, que_type}) => {
        console.log(question);
      })
      
    }).then(()=>{
console.log('success');

    }).catch((err) => {
      if (err){
        console.log(err);
      }
    });
  }

  const submitTest = () => {
    const response = async (req, res) => {
      Client.post(url,{
     
      }).then(response.data)
      .catch((err) => {
        console.log(err);
      });
    };
  }

    
  return (
   
    <div>
  
      <Context.Provider value={{
        handleLogin,
        handleLogout,
        setAlertMessage,
        alertMessage,
        GetExams,
        startExams,
        submitTest,
        getUser,
        endAlert}}>
        {children}
      </Context.Provider>
     
    </div>
  )
}

export const useAuthLogin = () => useContext(Context)
