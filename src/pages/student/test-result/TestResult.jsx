import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Client } from '../../../api/axios'
import './style.css'


const resultUrl ='http://cicatebackend.cloud/api/api/result/list/'


const resultChecker = () =>{
Client.get(resultUrl,{
  headers: { 
  Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
 },
}).then((response)=>{
  console.log(response.data)
  const results = response.data;
  console.log(results)
}).catch((error) =>{
  if(error){
    console.log(error)
  }
});
}



const TestResult = () => {


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
