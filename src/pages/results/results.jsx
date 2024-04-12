import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import copy from '../../assets/Copy1.png'
import write from '../../assets/writing.png'
import dots from '../../assets/dots.png'
import siju from '../../assets/siju.png'
import left from '../../assets/arrow-square-left.png'
import right from '../../assets/arrow-square-right.png'
import { Client } from '../../api/axios'



import './style.css'

const resultsUrl =  'https://ciccate2.onrender.com/api/api/result/list/'


const Results = () => {
const [previews, setPreviews] = useState([])

const GetResults = () =>{
Client.get(resultsUrl,{
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
  },
}).then((response)=>{
 const {result} = response.data;
 setPreviews(result);
 console.log(result);
}).catch((error)=>{
  if(error){
    console.log(error)
  }
});
  }

  useEffect(() => {
    GetResults()
  }, [])


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
  
  
    const edit = (e) =>{
    Navigate('#')
    }
  
  // individual checkboxes
  const handleIndividualCheckbox = (e) => {
  const {name, checked} = e.target;
  setCheckedBox({...checkedbox, [name]: checked});

  }

  return (
    <div className='rules-container'>
    <div className='rules1'>
     
     <div className='rules-flex9'>
<Link to={'/questions'} className='ques'>Test Takers</Link>
<Link to={'/questions'} className='ques'> <span className='white'>Sort by:</span>Ascending</Link>
<Link to={'/questions'} className='ques'> <span className='white'>filter:</span>Today</Link>
     </div>
<div className='rules-main5'>
<p className='user_kelly'>The user, Kelly, is a jazz music lover living in Paris.
 They attend a jazz concert most weeks.</p>

 <div className='flex-end'>
    <div> 
      <label htmlFor=""> <input 
    type="checkbox"
    checked={selectAllBoxes}
    onChange={handleCheckboxChange}
    /> Profile</label></div>
   
    <div>Results</div>
 </div>
<div className='main1'>
             {/* Render individual checkboxes */}
             
             {previews.map((result, index) => (

    <div className='questions_disp2' key={result.index}>
      <label htmlFor=""> 
     <input 
    type="checkbox"
    onChange={handleIndividualCheckbox}
    name={`Question ${index}`}
    checked={checkedbox[`Question ${index}`]}
     />
     
       </label>
       <div className='times'>
         <img src={siju} alt="profile" className='propics'/>  
       {result.user}</div>
         <div className='times'><div>{result.date_created}</div> </div>
           <div className='times'><div>{result.score}</div> </div> 
 </div>
             ))}



 <div className='questions_disp0'>
<div>Results <span>{previews.length}</span></div>
<div className='navigation'>
  <button><img src={left} alt="img" /></button>
  <span>1-10</span>
  <button><img src={right} alt="img" /></button>
  </div>
   
 </div>
</div>

</div>

    </div>
    </div>
  )
}

export default Results
