import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Client } from '../../../api/axios'
import './styles.css'






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
    `https://ciccate2.onrender.com/api/api/question/update/${id}/`,updateQuestion
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
    const result = await Client.get(`https://ciccate2.onrender.com/api/api/question/list/${id}/`,
     {
        headers: { 
       Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
      }}).then((response) => {
        console.log(response);
        setUpdateQuestion(result.data.questions)
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
           
          <form action="edit_flex">
            <div>
            <label htmlFor="question" className='labels'> Question <br />
                <input 
                type="text"
                value={question}
                className='inputs'
                name='question'
                onChange={(e) => questionChange(e)}
                 />
            </label>
            </div>
           
<div>
<label htmlFor="que_type" className='labels'> organization <br />
                <input 
                className='inputs'
                type="text"
                value={que_type}
                name='que_type'
                onChange={(e) => questionChange(e)}
                 />
            </label>

            
</div>
<br />
<div className='edit_flex'>
<button onClick={()=>onSubmit()} className='next_big'>Update Question</button> 
</div>

          </form>




</div>
</div>

    </div>
    </div>
  )
}

export default EditQuestion
