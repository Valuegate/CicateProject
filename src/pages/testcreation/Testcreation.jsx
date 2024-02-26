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




const testUrl = 'https://ciccate2-production.up.railway.app/api/api/question/upload/'

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

 <label htmlFor="introduction" className='label_rules'> Question 1 <br />
 <textarea name="" id="introduction" cols="40" rows="10" placeholder='type here' className='tex-are'>
  </textarea>
 </label>

 <br />

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
<h1 className='label_rules'>Option Type</h1>

<form action="" className='radio-class'>
    <div className='radio-class'>
    <label for="html" className='radiot'> 
    <input type="radio" id="html" name="language" value="HTML" className='radiot'/> Single choice
   
  </label>
  <br />

  <label for="css" className='radiot'>
    <input type="radio" id="css" name="language" value="CSS" className='radiot'/>  Multiple choice

  </label>
  <br />

  <label for="javascript" className='radiot'>
    <input type="radio" id="javascript" name="language" value="JavaScript" className='radiot'/> Open ended answer

  </label>
  <br />
    </div>

  <h1 className='label_rules'>Options</h1>
  <div>
    <div className='input_tag2'><label for="options"> <input type="checkbox" id='options' value='print'/>option 1</label></div>
    <div className='input_tag1'> <img src={add_circle} alt="img" className='img_circle'/><h1>Add option</h1></div>
  </div>

  <br />
  <h1 className='label_rules'>Answer</h1>
  <div>
  <div className='input_tag2'><label for="options"> <input type="checkbox" id='options' value='print'/>option 1</label></div>
    <div className='input_tag1'> <img src={add_circle} alt="img" className='img_circle'/><h1>Add Answer</h1></div>
  </div>

  <br />
<div className='input_tag_flex'>
<div className='input_tag3'>
   <img src={bin} alt="img" />
   <img src={copy} alt="" />
  </div>
</div>
 
</form>


 <br />

</div>
 <div className='launch'> 
 <div className='adding'>
 <img src={add} alt="img" />
 </div>
 <div>
 <button className='adding2' onClick={()=>testCreation()}>
        Launch
    </button>
 </div>
  
 </div>
    </div>
    </div>
    
  )
}

export default TestCreation
