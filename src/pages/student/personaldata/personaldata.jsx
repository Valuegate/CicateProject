import React from 'react'
import './style.css'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'



const PersonalData = () => {
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
      <div className='div'> 

<RegCarousel/>



<div>
  <div className='bluk'>
    <form action="" className='form_class'>

     <div className='fall'>
     <label htmlFor="" className='labels'>First name & Middle name: <br />
      <input type="text" placeholder='name' className='inputs'/>
      </label>

    <br /><label htmlFor="" className='labels'>Surname: <br />
      <input type="text"  placeholder='enter surname' className='inputs'/>
    </label>

    <br /><label htmlFor="" className='labels'>Position: <br />
      <input type="text" placeholder=' enter position' className='inputs'/>
    </label>
     </div>


     <div className='right_side'>
      <label htmlFor="" className='labels'>Type of Account: <br />
       <select name="" id="" className='inputs'>
        <option value="university" className='inputs'>Student</option>
        <option value="staff" className='inputs'>Registered student</option>
       </select>
      </label>

      <br /><label htmlFor="" className='labels'>E-mail: <br />
        <input type="text" placeholder='enter email' className='inputs'/>
      </label>

      <div className='submit_section'>
        <a href="/student/additionaldata" className='next_big'>Next</a>
       
       
        <span className=''><a href="/institution/university-login" className='already_register'>Already Registered?</a></span>
      </div>

     </div>
     
      
     
    </form>
  </div>
  </div>
       
          
       
  
   <BlackFooter/>
</div>

      </div>
     
    </div>
  )
}

export default PersonalData
