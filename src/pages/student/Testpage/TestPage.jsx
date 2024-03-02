import React, { useState, useEffect, useContext } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { useAuthLogin } from '../../../auth/login'
import { Client } from '../../../api/axios'
import './style.css'

const QuestionUrl = 'https://ciccate2-production.up.railway.app/api/api/exam/start/'

const TestPage = () => {
const {submitTest} = useAuthLogin()
const [timer, setTimer] = useState(0);
const [currentQuestions, setCurrentQuestions] = useState(-1)
const [questions, setQuestions] = useState([])



  const startExams = () => {
  
    Client.get(QuestionUrl,{
      headers: { 
      Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
     },
    }).then((resp) => {
      const {questions} = resp.data;
      setQuestions(questions);
      setCurrentQuestions(0)
      console.log(questions);
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

  const testTimer = (seconds)=>{
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600)/60);
    const secs = seconds % 60;

    return `${hrs < 10 ? '0' + hrs : hrs}: ${mins < 10 ? '0' + mins : mins} ${secs < 10 ? '0' + secs : secs}`
  }

useEffect(() => {
  const interval = setInterval(() => {
    setTimer((prev)=> prev + 1)}, 1000);

    return ()=> clearInterval(interval);
  },[]);

 


 useEffect(() => {
 if(questions.length === 0){
startExams()
 }
 },[])

  return (
    <div>
      <div className='timer'>
       <h1>{testTimer(timer)}</h1>
      </div>
  <div className='test-container'>
  <div className='black-test'>
      {currentQuestions > -1 && questions.length > 0 && (  <h1>{currentQuestions + 1}/{questions.length}</h1>)}
      <br />
     
  
       {currentQuestions > -1 && questions[currentQuestions].question && ( <p className='pick'>{questions[currentQuestions].question}<br /></p>)}
       
      
      <form className='test-questions'>
        <div>
        <input type="radio" id='checkbox1' name='answer'/>  <label htmlFor="checkbox1">agree</label>
        </div>

        <div>
        <input type="radio" id='checkbox2' name='answer'/> <label htmlFor='checkbox2'>Disagree</label>
        </div>
        <div>
        <input type="radio" id='checkbox3' name='answer'/> <label htmlFor='checkbox3'>partially agree</label>
        </div>
        <div>
        <input type="radio" id='checkbox4' name='answer'/> <label htmlFor='checkbox4'>partially disagree</label>
        </div>
   
      </form>

      <div className='below-nav'>
       <button onClick={()=>{if(currentQuestions !== 0){ setCurrentQuestions(currentQuestions -1)}}}>Back</button>
      { currentQuestions < 7 ? (<button onClick={()=>{if(currentQuestions !== questions.length -1){ setCurrentQuestions(currentQuestions+1)}}}>Next</button>): currentQuestions === 7 && (<button onClick={()=>{submitTest()}}>Submit</button>)}
      </div>
      </div>
  </div>
     
    </div>
  )
}

export default TestPage
