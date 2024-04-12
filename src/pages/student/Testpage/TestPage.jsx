import React, { useState, useEffect, useContext } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { Client } from '../../../api/axios'
import TestSubmitPop from '../testsubmit/TestSubmitPop'
import TimeUp from '../TimeUp/TimeUp'
import Alert from '../../../components/alert/Alert'
import './style.css'

const QuestionUrl = 'https://ciccate2.onrender.com/api/api/exam/start/'

const TestPage = () => {
const submitUrl = 'https://ciccate2.onrender.com/api/api/exam/submit/'
const [timer, setTimer] = useState(0);
const [currentQuestions, setCurrentQuestions] = useState(-1)
const [questions, setQuestions] = useState([])
const [answers, setAnswers] = useState({})
const [isModalOpen, setModalOpen] = useState(false)
const [timeUp, setTimeUp] = useState(false)
const [marks, setMarks] = useState({})
const [preview, setPreview] = useState({})
const [alertMessage, setAlertMessage] = useState(null)


useEffect(() => {
  console.log(preview);
  setAlertMessage({
    type: 'success',
    message: `Score ${JSON.stringify(preview)}` ,
  })
}, [preview]);

const Navigate =  useNavigate()

const handleModalClose = () => {
  setModalOpen(false)
}

const handleTimeUpClose = () => {
  setTimeUp(false)
}

  const startExams = () => {
  
    Client.get(QuestionUrl,{
      headers: { 
      Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
     },
    }).then((response) => {
      const {questions} = response.data;
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
  
  const submitTest =  async () => {
    try{
      const formData = questions.map((question, index) => {
        const {question: questionText, que_type} = question;
        const selected_option = answers[questionText];
        

        const queTypetirm = que_type ? que_type.trim():'';
        const selecteTrim = selected_option ? selected_option.trim() : ''
        return{
          question: questionText,
          que_type: queTypetirm,
          selected_option: selecteTrim
        };
      })
      
     
      const accessToken = localStorage.getItem('accesstoken');
  

    // Check if access token exists
    if (!accessToken) {
      throw new Error('Access token not found');
    }

      const response = await  
         Client.post(submitUrl, formData,{
          headers: { 
          Authorization: 'Bearer ' + accessToken 
         },
        })
        const {marks} = (response.data.score_card);
       
        setPreview(marks);
       
     
          setModalOpen(true)
          setTimeout(() => {
            Navigate('/student/testresult')
          },3000)
        
        }
      catch (err) {
        console.log(err);
      }
  };

 

  const testTimer = (seconds)=>{
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600)/60);
    const secs = seconds % 60;

    return `${hrs < 10 ? '0' + hrs : hrs}: ${mins < 10 ? '0' + mins : mins} ${secs < 10 ? '0' + secs : secs}`
  }

useEffect(() => {
  const interval = setInterval(() => {
    setTimer((prev)=> prev + 1)
    if(timer === 150){
      setTimeUp(true);
      setTimeout(() => {
        Navigate('/student/student-dashboard')
      },3000)
     
    
      clearInterval(interval);
    }
    }, 1000);

    return ()=> clearInterval(interval);
  },[timer]);

 


 useEffect(() => {
 if(questions.length === 0){
startExams()
 }
 },[])

 const handleAnswers = ({questionID, answer})=>{
  setAnswers(prev => ({
    ...prev,
    [questionID]: answer
  }))
};
/** 
useEffect(() => {
setAnswers(prev => ({
  ...prev,[questions[currentQuestions]?.question]:null
}))
},[currentQuestions, questions])
**/

  return (
    <div>
      <div className='timer'>
       <h1>{testTimer(timer)}</h1>
       <button onClick={()=>submitTest()}>submit</button>
       { alertMessage && (<Alert 
type={alertMessage.type}
message={alertMessage.message}
/>)}
      </div>
  <div className='test-container'>
    <TestSubmitPop isOpen={isModalOpen} onClose={handleModalClose}/>
    <TimeUp isOpen={timeUp} onClose={handleTimeUpClose}/>
  <div className='black-test' >
      {currentQuestions > -1 && questions.length > 0 && (  <h1>{currentQuestions + 1}/{questions.length}</h1>)}
      <br />
     
 
       {currentQuestions > -1 && questions[currentQuestions].question && ( <p className='pick'>{questions[currentQuestions].question}<br /></p>)}
       

      <form className='test-questions'>
        <div >
        <input 
        type="radio"
        id='checkbox1'
        name='answer'
        value='agree'
        onChange={() => handleAnswers({questionID: questions[currentQuestions].question, answer: 'agree'})}
          
          
          />  <label htmlFor="checkbox1">agree</label>
        </div>

        <div>
        <input
         type="radio"
          id='checkbox2'
           name='answer'
           value='disagree'
           onChange={() => handleAnswers({questionID: questions[currentQuestions].question, answer: 'disagree'})}
           
           /> <label htmlFor='checkbox2'>Disagree</label>
        </div>
        <div >
        <input
         type="radio"
          id='checkbox3'
           name='answer'
           value='partially-agree'
           onChange={() => handleAnswers({questionID: questions[currentQuestions].question, answer: 'partially-agree'})}

           /> <label htmlFor='checkbox3'>partially agree</label>
        </div>
        <div >
        <input
         type="radio"
          id='checkbox4'
           name='answer'
           value='partially-disagree'
           onChange={() => handleAnswers({questionID: questions[currentQuestions].question, answer: 'partially-disagree'})}
           /> <label htmlFor='checkbox4'>partially disagree</label>
        </div>
   
      </form>

      <div className='below-nav'>
       <button onClick={()=>{if(currentQuestions !== 0){ setCurrentQuestions(currentQuestions -1)}}}>Back</button>
      { currentQuestions < 39 ? (<button onClick={()=>{if(currentQuestions !== questions.length -1){ setCurrentQuestions(currentQuestions+1)}}}>Next</button>): currentQuestions === 39 && (<button onClick={()=>submitTest()}>Submit</button>)}
      </div>
      </div>
  </div>
     
    </div>
  )
}

export default TestPage
