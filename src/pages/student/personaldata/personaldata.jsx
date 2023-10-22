import React from 'react'
import './style.css'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import greenshield from '../../../assets/greenshield.svg'
import pic1 from  '../../../assets/1.svg'
import pic2 from  '../../../assets/2.svg'
import pic3 from  '../../../assets/3.svg'
import pic4 from  '../../../assets/4.svg'
import normal from  '../../../assets/normal.svg'
import greenArrow from '../../../assets/green_arrows.svg'



const PersonalData = () => {
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
      <div className='div'> 

      <div className='flex_green_sign'>
          <img src={greenshield} alt="img" className='green_body'/>
          <div className='signup_white'>Sign Up</div>
        </div>

        <div className='flex_end'>

          <div className='inside_flex'>
            <img src={pic1} alt="img" className='pic1'/>
           <p className='personal_information'>
            <span className='personal'>Personal </span> 
          <span className='information'>Information </span>
          <div className="current-position" />
          </p>
          <div className='green_arrow_box'> <img src={greenArrow} alt='img' className='next' /></div>
          </div>

          <div className='inside_flex'>
            <img src={pic2} alt="img" className='pic1'/>
           <p className='personal_information'>
            <span className='personal_unselected'>Additional </span> 
          <span className='information_unselected'>Information </span>
         
          </p>
          <div className='green_arrow_box'> <img src={normal} alt='img' className='next' /></div>
          </div>

           <div className='inside_flex'>
            <img src={pic3} alt="img" className='pic'/>
           <p className='personal_information'>
            <span className='personal_unselected'>Username  </span> 
          <span className='information_unselected'> Password </span>
         
          </p>
          <div className='green_arrow_box'> <img src={normal} alt='img' className='next' /></div>
          </div>

          <div className='inside_flex'>
            <img src={pic4} alt="img" className='pic_unselected'/>
            <div className='information_unselected'>Done</div>
          </div>
        </div>




<div>
  <div className='bluk'>
    <form action="" className='form_class'>

     <div className='fall'>
     <label htmlFor="" className='labels'>First name & Middle name: <br />
      <input type="text" placeholder='Name' className='inputs'/>
      </label>

    <label htmlFor="" className='labels'>Surname: <br />
      <input type="text"  placeholder='Enter Surname' className='inputs'/>
    </label>

    <label htmlFor="" className='labels'>Position: <br />
      <input type="text" placeholder=' Enter Position' className='inputs'/>
    </label>
     </div>


     <div className='right_side'>
      <label htmlFor="" className='labels'>Type of Account: <br />
       <select name="" id="" className='inputs'>
        <option value="university" className='inputs'>Student</option>
        <option value="staff" className='inputs'>Registered student</option>
       </select>
      </label>

      <label htmlFor="" className='labels'>E-mail: <br />
        <input type="text" placeholder='Enter Email' className='inputs'/>
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
