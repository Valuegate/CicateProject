import React, { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import pic1 from  '../../../assets/1.svg'
import pic2 from  '../../../assets/2.svg'
import pic3 from  '../../../assets/3.svg'
import pic4 from  '../../../assets/4.svg'
import normal from  '../../../assets/normal.svg'
import greenArrow from '../../../assets/green_arrows.svg'
import './style.css'


const TestCarousel = () => {

const [active, setActive] = useState('on')
const location = useLocation()

useEffect(() => {
  const path = location.pathname;
if(path === '/student/onlineofline'){
  setActive('on')
}
else if(path === '/student/timedate'){
setActive('time')
}

else if(path === '/student/photovalidation'){
  setActive('photo')
}

else if(path === '/student/reviewsubmit'){
setActive('sub')
}

else if(path === '/student/paymentpage'){
  setActive('pay')
}
else {
  setActive('')
}
},[location.pathname])


  return (
    <div>
       <div className='regfor'>
        <div className='line-hat'>
          <span className='registering'>Registering</span> <br />
        <span className='for'>For Testing</span>
        </div>

        <div className='green_money'>Cost:$150</div>
      </div>
        <div className='flex_end'>

          <div className='inside_flex' onClick={()=> {setActive(true)}} >
            <img src={pic1} alt="img" className='pic1'/>
           <p className='personal_information'>
           <Link className='personal_information' to={'/student/onlineofline'}>
           <span className={active === 'on' ? 'personal' : 'personal_unselected'}>Online </span>  <br />
          <span className={active === 'on' ? 'information' : 'information_unselected'}>Ofline </span>
            </Link>
          {active === 'on' ? (<hr className='current-position'/>) : <></>}
          </p>
          <div className='green_arrow_box'> {active === 'on' ? <img src={greenArrow} alt='img' className='next' /> : <img src={normal} alt='img' className='next' />}</div>
          </div>

          <div className='inside_flex' onClick={()=>{setActive('time')}}>
            <img src={pic2} alt="img" className='pic1'/>
            <p className='personal_information'>
            <Link className='personal_information' to={'/student/timedate'}>
            <span className={active === 'time' ? 'personal' : 'personal_unselected'}>Time </span> <br />
          <span className={active === 'time' ? 'personal' : 'personal_unselected'}>&Date </span>
            </Link>
          {active === 'time' ? (<hr className='current-position'/>) : <></>}
        

          </p>
          <div className='green_arrow_box'> {active === 'time' ? <img src={greenArrow} alt='img' className='next' /> : <img src={normal} alt='img' className='next' />}</div>
          </div>

           <div className='inside_flex' onClick={()=>{setActive('photo')}}>
            <img src={pic3} alt="img" className='pic1'/>
           <p className='personal_information'>
            <Link className='personal_information' to={'/student/photovalidation'}>
            <span className={active === 'photo' ? 'personal' : 'personal_unselected'}>Photo  </span> <br />
          <span className={active === 'photo' ? 'personal' : 'personal_unselected'}> Validation </span>
            </Link>
           
          {active === 'photo' ? (<hr className='current-position'/>) : <></>}
          </p>
          <div className='green_arrow_box'> {active === 'photo' ? <img src={greenArrow} alt='img' className='next' /> : <img src={normal} alt='img' className='next' />}</div>
          </div>


          <div className='inside_flex' onClick={()=>{setActive('sub')}}>
            <img src={pic3} alt="img" className='pic1'/>
           <p className='personal_information'>
            <Link className='personal_information' to={'/student/reviewsubmit'}>
            <span className={active === 'sub' ? 'personal' : 'personal_unselected'}>Review  </span> 
            <br />
          <span className={active === 'sub' ? 'personal' : 'personal_unselected'}> &Submit </span>
            </Link>
           
          {active === 'sub' ? (<hr className='current-position'/>) : <></>}
          </p>
          <div className='green_arrow_box'> {active === 'sub' ? <img src={greenArrow} alt='img' className='next' /> : <img src={normal} alt='img' className='next' />}</div>
          </div>

          <div className='inside_flex' onClick={()=>{setActive('pay')}}>
            <Link to={'/student/paymentpage'} className='inside_flex'>
            <img src={pic4} alt="img" className='pic1'/>
            <div className={active === 'pay' ? 'personal_unselected' : 'personal'}>Payment          {active === 'pay' ? (<hr className='current-position'/>) : <></>}</div>
          
            </Link>
            
          </div>
 
        </div>
        
        </div>
  )
}

export default TestCarousel
