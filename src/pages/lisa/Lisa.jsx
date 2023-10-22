import React from 'react'
import './style.css'
import Navbar from '../../components/containers/navbar/navbar'
import Footer from '../../components/containers/footer/footer'

const Lisa = () => {
  return (
    <div>
      <div>
      <Navbar/>
      
    </div>
   <div>

   <div className="how_to_use">
    How To Use <br />
    Test Results
  </div>

   </div>
  <div className="gate__container">
    <div><a href="/gate" className='opacity'>G.A.T.E</a></div>
    <div><a href="/pocas" className='opacity'>POCAS</a></div>
    <div><a href="/lisa" className='pocas'>LISA</a></div>
  </div>
  <div className='box_lisa'>
    <div className='rectangle_lisa'>
    </div>
<div className='header3'>
  <p className='lisa_wrapper'>
  LISA: 
  <span className='spanks'>Legal Integrity Screening <br /> <br />and Assessment:</span>
  </p>
  
</div>
<div>
  <p className='lisa_powerful'>
  LISA is a powerful assessment tool used by 
  companies for hiring purposes. This test is 
  specifically designed to increase the chances
   of being hired in the company and being
    assigned to the right position. LISA evaluates 
    the legal integrity, ethics, and professional 
    conduct of potential employees, helping organizations identify individuals who align 
  with their values and principles.
  </p>
</div>
<div>
  <p className='lisa_powerful2'>
  The application areas of LISA are diverse
   and significant in the hiring process. It 
   assists companies in evaluating the legal
    and ethical awareness of potential employees, 
    ensuring they have a clear understanding of 
    legal and regulatory frameworks relevant to 
    their roles. LISA also assesses their
     professional conduct, integrity, and ethical 
     -making skills, which are crucial for maintaining a positive work environment and upholding 
  the company's reputation.
  </p>
</div>
  </div>
  <div className='box_lisa2'>
  <p className='lisa_powerful3'>
  By utilizing LISA, companies can make 
  well-informed hiring decisions. The 
  test helps identify candidates who possess the 
  required legal integrity and ethical values,
   ensuring that individuals who align with the
    company's principles are chosen. This enables 
    companies to build a workforce that upholds high 
    ethical standards and contributes positively to the organization's 
  culture and success. <br />  <br />
In summary, LISA plays a crucial role in the hiring process by evaluating the
 legal integrity and ethical conduct of potential employees. It assists companies in 
 selecting individuals who align with their values, contributing to a positive work
  environment and upholding
 the company's reputation.
  </p>
</div>

<Footer/>
    </div>
  )
}

export default Lisa
