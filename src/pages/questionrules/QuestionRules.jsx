import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const QuestionRules = () => {
  return (
    <div className='rules-container'>
      <div className='rules'>
       
       <div className='rules-flex'>
<Link to={'/questions'} className='ques'>Questions</Link>
<Link to={'/settings'} className='sets'>Settings</Link>
       </div>
<div className='rules-main'>
  
<h1>Information</h1>
<p className='user_kelly'>The user, Kelly, is a jazz music lover living in Paris.
   They attend a jazz concert most weeks.</p>

   <label htmlFor="introduction" className='label_rules'> Introduction <br />
   <textarea name="" id="introduction" cols="40" rows="10" placeholder='type here'>
    </textarea>
   </label>
  
   <br />

   <label htmlFor="rules" className='label_rules'> Rules and Regulations <br />
   <textarea name="" id="rules" cols="40" rows="10" placeholder='type here'>
</textarea>
   </label>
  <br />

   <label htmlFor="duration" className='label_rules'>Duration <br />
    <input type="text" className='input_tag'/>
   </label>
   <br />
   <div className='service'> 
By proceeding in questions creation, I agree to the <span >Terms of Service</span></div>
</div>
       <div></div>
      </div>
      </div>
      

  )
}

export default QuestionRules
