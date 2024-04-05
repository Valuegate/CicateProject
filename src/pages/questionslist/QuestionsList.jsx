import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import copy from '../../assets/Copy1.png'
import write from '../../assets/writing.png'
import dots from '../../assets/dots.png'
import deletebin from '../../assets/delete.png'
import { Client } from '../../api/axios'
import './style.css'
import Alert from '../../components/alert/Alert'

/** */
const list = 'http://cicatebackend.cloud/api/api/question/list/'

const url = 'http://cicatebackend.cloud/api/api/question/delete/6/'






const QuestionsList = () => {


const [previews, setPreviews] = useState([])

const displayQuestions = () => {
   Client.get(list,
      {
      headers: { 
     Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
    }},
   ).then((response) =>{
      const {questions} = response.data
         console.log(questions);
         setPreviews(questions)
    
      
   }).catch((error) => {
if (error){
   console.error(error)
}
   });
}

useEffect(() =>{
   displayQuestions()
},[]);


const Navigate = useNavigate()
const [dropDownVisible, setDropdownVisible] = useState(false);
const [dropDownPosition, setDropdownPosition] = useState({x: 0, y: 0});
const [selectAllBoxes, setSelectAllBoxes] = useState(false);
const [checkedbox, setCheckedBox] = useState({})


const dropDownToggle = (e) => {
e.preventDefault()
const rect = e.target.getBoundingClientRect()
setDropdownPosition({x: rect.left, y: rect.bottom})
setDropdownVisible(!dropDownVisible)
};

useEffect(() => {
   // Initialize the state of checkboxes when component mounts
   const initialCheckboxState = {};
   // Loop through all the checkboxes and set their initial state to false
   for (let i = 1; i <= 100; i++) {
     initialCheckboxState[`Question ${i}`] = false;
   }
   setCheckedBox(initialCheckboxState);
 }, []); // Empty dependency array ensures this effect runs only once when component mounts


//change the select all box
const handleCheckboxChange = (e) => {
  const isChecked = e.target.checked;
  setSelectAllBoxes(isChecked)




 // set the state of all the check boxes to match ischecked
  const updatedboxes = {};
Object.keys(checkedbox).forEach((key) => {
    updatedboxes[key] = isChecked;
});
setCheckedBox(updatedboxes)
};


  const handleEdit = (e) =>{
   e.preventDefault();
   Client.put(url,
      {
      params: { id:'1234'},
      },
      {
         headers: { 
        Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
       }},
   )

}

  const Handledelete = (id) =>{
   
     Client.delete(url,
       {
         headers: { 
        Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
       }},).then((response) => {
      console.log(response.data);
      alert('Deleted Succesfully')
      }).catch((error) => {
         console.error(error, 'Error deleting');
      });
  }

 

// individual checkboxes
const handleIndividualCheckbox = (e) => {
const {name, checked} = e.target;
setCheckedBox({...checkedbox, [name]: checked});
};


const handleButtonDelete = (id) => {
   if(window.confirm('Are you sure you want to delete')){
      Handledelete(id).then(() => {
         window.location.reload();
      }).catch((error) => {
         Alert('error deleting', error);
      });
   }
  };



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
    <div> <label htmlFor=""> <input 
    type="checkbox"
    checked={selectAllBoxes}
    onChange={handleCheckboxChange}
    
    
    /> Select all</label></div>
    <div>{selectAllBoxes === true ? (<img src={deletebin} alt='bin' onClick={handleEdit}/>) : `${previews.length} questions` }</div>
 </div>
<div className='main1'>
             {/* Render individual checkboxes */}
           {previews.map((question, index) => (
<div className='questions_main1' key={question.id}>
    <div className='questions_disp'><label htmlFor=""> 
     <input 
    type="checkbox"
    onChange={handleIndividualCheckbox}
    name={`Question ${index}`}
    checked={checkedbox[`Question ${index}`]}

     /> Question 1</label>  <div className='shift_dot' onClick={dropDownToggle}>{ dropDownVisible ? <></> : <img src={dots} alt="dots" />} {
      dropDownVisible && (
         <div className='drops' style={{top:dropDownPosition.y, left:dropDownPosition.x}}>
            <ul>
               <li onClick={()=>handleEdit()}>Edit</li>
               <li onClick={()=> handleButtonDelete(question.id)}>Delete</li>
            </ul>
         </div>
      )
     }</div></div>
    <p>  {question.question} </p>
 </div>
             ))}



 <div className='questions_disp1'>
 <img src={write} alt="copy" />
    <img src={copy} alt="copy" />
   
 </div>
</div>
</div>

    </div>
    </div>
  )
}

export default QuestionsList
