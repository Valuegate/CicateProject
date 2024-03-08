import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Client } from '../../../api/axios'
import './style.css'


const resultUrl ='https://ciccate2-production.up.railway.app/api/api/question/list/'

const resultChecker = () =>{
Client.get(resultUrl,{
  headers: { 
  Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
 },
}).then((response)=>{
  console.log(response.data)
  const results = response.data;
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
        <p>
        The user, Kelly, is a jazz music lover living in Paris. 
        They attend a jazz concert most weeks.
         Kelly wants an easy way to find out about new artists and purchase
          tickets to their shows on Kelly’s free weeknights. 
        </p>
       </div>
       
       

      <div className='below-nav2'>
   <button onClick={()=> resultChecker()}>View the results</button>
   <button onClick={()=> resultChecker()}>Download</button>
  

 </div>
      </div>
      
  </div>
     
    </div>
  )
}

export default TestResult
