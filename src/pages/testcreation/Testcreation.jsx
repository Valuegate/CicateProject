import React from 'react'
import { Link } from 'react-router-dom'
import upload from '../../assets/Upload Minimalistic.svg'
import './style.css'
import add_circle from '../../assets/Add Circle.png'
import bin from '../../assets/Trash Bin Minimalistic.svg'
import copy from '../../assets/copy.svg'
import add from '../../assets/add.svg'
import { useRegisterContext } from '../../auth/Register'
import { useAuthLogin } from '../../auth/login'
import { Client } from '../../api/axios'




const testUrl = 'http://cicatebackend.cloud/api/api/question/upload/'

const TestCreation = () => {
const {question, setQuestion} = useRegisterContext()


const testCreation = (e) => {

  Client.post(testUrl,JSON.stringify({
    questions:question
  }),
  {
    headers: { 
   Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
  },
  }).then((resp) => {
    console.log(resp.data);
  }).catch((err) => {
    if (err){
      console.log(err);
    }
  });
};

  return (
    <div className='rules-container'>
    <div className='rules1'>
     
     <div className='rules-flex'>
<Link to={'/questions'} className='ques'>Questions</Link>
<Link to={'/settings'} className='sets'>Settings</Link>
     </div>
<div className='rules-main1'>

<h1 className='creations'>Creations Creation</h1>
<p className='user_kelly'>The user, Kelly, is a jazz music lover living in Paris.
 They attend a jazz concert most weeks.</p>

<form action="submit">
<label htmlFor="icon-button-file" className='label_rules'> CSV (Mandatory) <br /> 
 <div className='img-optional'>
 <img src={upload} alt="img" />
    <div>Upload here</div>
    
   
 <input
accept="csv/*"
  id="icon-button-file"
  type="file" 
   placeholder='Upload image here'
   style={{display: 'none'}}
   onChange={((e)=> setQuestion(e.target.files[0]))}
   />
 </div>

 </label>
<br />

<div className='radio-class'>



  <br />
 

  <br />
<div className='input_tag_flex'>
<div className='input_tag3'>
   <img src={bin} alt="img" onClick=''/>
   <img src={copy} alt="" onClick=''/>
  </div>
</div>
</div>


</form>


 <br />

</div>
 <div className='launch'> 
 <div>
 <button onClick={()=>testCreation()} type='submit'>
        Launch
    </button>
 </div>
  
 </div>
    </div>
    </div>
    
  )
}

export default TestCreation
