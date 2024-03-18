import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import copy from '../../assets/Copy1.png'
import write from '../../assets/writing.png'
import dots from '../../assets/dots.png'
import siju from '../../assets/siju.png'
import left from '../../assets/arrow-square-left.png'
import right from '../../assets/arrow-square-right.png'





import './style.css'
const Results = () => {
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
             
             {Array.from({ length: 7}, (_, i) => i + 1).map((index) => (

    <div className='questions_disp2' key={`Question ${index}`}>
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
       Ayomide Goodness</div>
         <div className='times'><div>17:38</div> </div>
           <div className='times'><div>5/42</div> </div> 
 </div>
             ))}



 <div className='questions_disp0'>
<div>Results <span>198</span></div>
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
