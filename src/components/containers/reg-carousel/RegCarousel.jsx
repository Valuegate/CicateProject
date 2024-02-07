import React, { useState, useEffect } from 'react'

import greenshield from '../../../assets/greenshield.svg'
import pic1 from  '../../../assets/1.svg'
import pic2 from  '../../../assets/2.svg'
import pic3 from  '../../../assets/3.svg'
import pic4 from  '../../../assets/4.svg'
import normal from  '../../../assets/normal.svg'
import greenArrow from '../../../assets/green_arrows.svg'
import { Link, useLocation } from 'react-router-dom'

import './style.css'

const RegCarousel = () => {

  const location = useLocation()


const [active, setActive] = useState('personal')

useEffect(() =>{
const path = location.pathname;
if(path === '/student/personaldata'){
  setActive('personal')
}
else if(path === '/student/additionaldata'){
  setActive('additional')
}
else if(path === '/student/username-password'){
  setActive('username')
}
else if(path === '/student/review'){
  setActive('done')
}
else {
  setActive('')
}

},[location.pathname])
  return (
    <div>
        <div className='flex_green_sign'>
          <img src={greenshield} alt="img" className='green_body'/>
          <div className='signup_white'>Sign Up</div>
        </div>

        <div className='flex_end'>
          <div className='inside_flex'>
            <img src={pic1} alt="img" className='pic1'/>

            <div onClick={()=>{setActive('personal');
            
            }} className='personal_information'>
            <Link to='/student/personaldata' className='personal_information'>
            <span className={active === 'personal' ? 'personal' : 'personal_unselected'}>Personal </span> <br />
          <span className={active === 'personal' ? 'information' : 'information_unselected'}>Information </span> 
          {active === "personal" ? (<hr className='hro'/>) : (<></>)}
         
            </Link>
            </div>
           
            
        { active === "personal" ? (
          <div className='green_arrow_box'> <img src={greenArrow} alt='img' className='next' /></div>) : (  <div className='green_arrow_box'> <img src={normal} alt='img' className='next' /></div>)}
        
          </div>
             
          <div className='inside_flex'>
            <img src={pic2} alt="img" className='pic1'/>
         <div onClick={()=>{setActive('additional')}}  className='personal_information' >
         <Link to='/student/additionaldata' className='personal_information'>
            <span className={active === 'additional' ? 'personal' : 'personal_unselected'}>Additional </span> <br />
           <span className={active === 'additional' ? 'personal' : 'personal_unselected'}>Information </span>
           {active === "additional" ? (<hr className='hro'/>) : (<></>)}
            </Link>
         </div>
           
        
         
        
         { active === "additional" ? (
          <div className='green_arrow_box'> <img src={greenArrow} alt='img' className='next' /></div>) : (  <div className='green_arrow_box'> <img src={normal} alt='img' className='next' /></div>)}
          </div>

           <div className='inside_flex'>
          <img src={pic3} alt="img" className='pic1'/>
        
        <div onClick={()=>{setActive('username')}} className='personal_information'>
        <Link  to='/student/username-password' className='personal_information'>
          <span className={active === 'username' ? 'personal' : 'personal_unselected'}>Username  </span> <br />
          <span className={active === 'username' ? 'personal' : 'personal_unselected'}> Password </span>
          {active === "username" ? (<hr className='hro'/>) : (<></>)}
          </Link>

        </div>
         
   
        { active === "username" ? (
          <div className='green_arrow_box'> <img src={greenArrow} alt='img' className='next' /></div>) : (  <div className='green_arrow_box'> <img src={normal} alt='img' className='next' /></div>)}
          </div>

          <div className='inside_flex' onClick={()=>{setActive('done')}}>
            <img src={pic4} alt="img" className='pic1'/> 
            <Link to='/student/review' className='personal_information'>
                <span className={active === 'done' ? 'personal' : 'personal_unselected'}>Done! {active === "done" ? (<hr className='hro'/>) : (<></>)}</span> </Link>
         
          </div>
          
        </div>
        
    </div>
  )
}

export default RegCarousel
