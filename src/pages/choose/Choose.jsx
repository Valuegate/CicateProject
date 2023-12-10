import React from 'react'
import UnsignedNav from '../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../components/containers/black_footer/BlackFooter'
import student from '../../assets/student_clap.png'
import university from '../../assets/university_clap.png'
import './style.css'



const Choose = () => {
  return (
    <div>
       <UnsignedNav/>
    <div className='black_page'>
      <div className='div'>
<div className='just'>
<div className='gridd_boxx'>



<div className='box_university' onClick={() => window.location.href = "/student/personaldata"}>
  <div className=''><img src={student} alt="img_student" /></div>
  <a className='sign_font' href='/student/personaldata'>Sign up as a Student</a>

</div>
<div className='box_university' onClick={() => window.location.href = "/institution/personal-information"}>
  <div className=''><img src={university} alt="img_university" /></div>
  <a className='sign_font' href='/institution/personal-information'>Sign up as an Institution</a>
</div>


</div>
<div className='or_box'>
  
  <div className='dont1'>Already have <br /> an account?</div>
  <div><a href="/student/personaldata" className='create_button1'>Sign In As Student</a></div>
  <div className='or_span'><span className='or'> OR</span></div>
  <div><a href="/student/personaldata" className='create_button1'>Sign In As Institution</a></div>
</div>

</div>
<div className='yui'></div>
 <BlackFooter/>

     </div>
     
   </div>
    </div>
  )
}

export default Choose
