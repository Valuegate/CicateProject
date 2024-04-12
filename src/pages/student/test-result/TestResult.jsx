import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Client } from '../../../api/axios'
import './style.css'


const resultUrl ='https://ciccate2.onrender.com/api/api/result/list/'






const TestResult = () => {

  const [preview, setPreviews] = useState([])
  const data = localStorage.getItem('user')
  const userData = JSON.parse(data)
 const currentUser = userData.email
  const resultChecker = () =>{


    Client.get(resultUrl,{
      headers: { 
      Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
     },
    }).then((response)=>{
    const {result} = response.data;
    setPreviews(result);
   console.log(preview);

   
    const userResult = result.find(item => item.user === currentUser);
    if(userResult){
      alert(userResult.user + ' ' + 'Success your score is' + ' ' + userResult.score);
    } else{
      console.log('no result');
    }
      
    }).catch((error) =>{
      if(error){
        console.log(error)
      }
    });
    }

  return (
    <div>
  <div className='test-container'>
  <div className='black-test'>
       <div className='info-test'>
        <h1 className='h12'>Result</h1>
      <br />
        <div className='hhhh'>
        Congratulations on beign Succesfully Tested in Gate test, You can View and download your result below 👇

        </div>
      
       </div>
       
       

      <div className='below-nav2'>
   <button onClick={()=> resultChecker()}>View the results 👁</button>
   <button onClick={()=> resultChecker()}>Download ↓</button>
  

 </div>
      </div>
      
  </div>
     
    </div>
  )
}

export default TestResult
