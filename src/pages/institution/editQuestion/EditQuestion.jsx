import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Client } from '../../../api/axios'







const EditQuestion = () => {


const Navigate = useNavigate()
const [updateQuestion, setUpdateQuestion] = useState({
question:'',
que_type:'',
})

const {id} = useParams()

const {question, que_type} = updateQuestion

const questionChange = (e)=>{
setUpdateQuestion({...updateQuestion, [e.target.question]: e.target.value})
}

useEffect(() => {
    loadQuestions()
},[])

const onSubmit = async (e) => {
   await Client.put(
    `https://ciccate2.onrender.com https://ciccate2.onrender.com/api/api/question/update/${id}/`,updateQuestion
    ).then((response)=>{
        console.log(response)
        alert('sucessfully updated')
    Navigate('/questionlist')
    }).catch((error) => {
        if (error){
            console.log(error, 'Error updating question')
        }
    });
}

const loadQuestions = async () => {
    const result = await Client.get(`https://ciccate2.onrender.com https://ciccate2.onrender.com/api/api/question/list/${id}/`,
     {
        headers: { 
       Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
      }}).then((response) => {
        console.log(response);
        setUpdateQuestion(result.data)
      }).catch((error) => {
        if (error){
            console.log(error, 'Error getting question')
        }
      });
    
}
  return (
    <div className='rules-container'>
    <div className='rules1'>
     <div className='rules-flex'>
<Link to={'/questions'} className='ques'>Questions</Link>
     </div>
<div className='rules-main5'>
<p className='user_kelly'>The user, Kelly, is a jazz music lover living in Paris.
 They attend a jazz concert most weeks.</p>

 <div className='flex-end'>
   
 </div>
<div className='main1'>
           
          <form action="">
            <label htmlFor="question"> Question
                <input 
                type="text"
                value={question}
                name='question'
                onChange={(e) => questionChange(e)}
                 />
            </label>

            <label htmlFor="que_type"> organization
                <input 
                type="text"
                value={que_type}
                name='que_type'
                onChange={(e) => questionChange(e)}
                 />
            </label>
            <button onClick={()=>onSubmit()}>Update Question</button>
          </form>



 <div className='questions_disp1'>

   
 </div>
</div>
</div>

    </div>
    </div>
  )
}

export default EditQuestion
