import React from 'react'
import './style.css'
import Navbar from '../../components/containers/navbar/navbar'
import Footer from '../../components/containers/footer/footer'
import long from '../../assets/long.webp'
import scholarships from '../../assets/scholarships.jpeg'
import international from '../../assets/international.webp'
import admissions from '../../assets/admision.jpeg'
import grants from '../../assets/grants.jpeg'
import { Link } from 'react-router-dom'
const Gate = () => {
  return (
  <div>
     <Navbar/>
    <div className='how_to_use'>
    How To Use <br />
    Test Results
    </div>
    <div className='how_apply'>
                <Link to={'/student/onlineofline'} className='button_to_apply'>Apply</Link>
      
                </div>
    <div className="gate__container">
    <div><a href="/gate" className='pocas'>G.A.T.E</a></div>
    <div><a href="/pocas" className='opacity'>POCAS</a></div>
    <div><a href="/lisa" className='opacity'>LISA</a></div>
  </div>

<div className='gate_display'>
<img src={long} alt="gate photo" className='gate_bos'/>
<div className='gate_bos_right'>
  <span className='gate_up'> <span className='gate_bigg'>GATE </span> <br />
Global Assessment and Testing for Education:</span> <br /> <br />
  
  <p className='p_class'>G.A.T.E is a comprehensive test specifically designed for applicants to university study programs.
   It serves as a crucial tool in the study application process,
    enabling universities to select the best candidates. 
   By evaluating the skills, knowledge, and aptitude of applicants,
    G.A.T.E assists universities in identifying individuals who have the 
    potential to thrive in their chosen field of study.  <br /> <br />


The application areas of G.A.T.E are vast and varied.
 It helps universities assess the academic readiness of applicants,
  ensuring they have the necessary foundational knowledge and skills required for their 
  chosen study program. G.A.T.E also evaluates critical thinking abilities, problem-solving skills, 
  and analytical reasoning, which are essential for success in higher education. </p>  <br />
 
</div>
</div>

<div className='gate_resul'> 
The GATE test results can <br />be applied in various areas <br /> and situation:
</div>
   
   <div className='dispaly_box'>
<img src={admissions} alt="admissions" className='box_bl'/>
  <div className='labelx'>
    <p className='spandown'>Higher Education Admissions:</p>
    <p className='p_class'>The primary application area for GATE test results
       is in the admissions process for higher education
        institutions. Universities use GATE scores to evaluate
         and select candidates for study programs. The results 
         help universities identify the most deserving
       candidates based on their knowledge and skills.</p>
  </div>
   </div>



   <div className='dispaly_box'>
   <div className='labelx'>
      <p className='spandown'>Scholarships and Financial Aid:</p>
      <p className='p_class'> GATE test results can also be used as a criterion for awarding scholarships
       and financial aid to deserving students. Universities and other organizations may offer financial
        support to students who perform exceptionally well in the GATE test,
       providing them with opportunities to pursue their studies without financial constraints.</p>
    </div>
  <img src={scholarships} alt="scholarships"className='box_bl' />


   </div>


   <div className='dispaly_box'>
   <img src={international} alt="international students" className='box_bl'/>
    <div className='labelx'>
      <p className='spandown'>International Opportunities:</p>
      <p className='p_class'>The primary application area for GATE test 
      results is in the admissions process for higher education
       institutions. Universities use GATE scores to evaluate and
        select candidates for study programs. The results help
         universities identify the most deserving
       candidates based on their knowledge and skills.</p>
    </div>
   </div>

   <div className='dispaly_box1'>
   <div className='labelx'>
      <p className='spandown'>Academic Fellowships and Grants:</p>
      <p className='p_class'> GATE test results can also be used as a 
      criterion for awarding scholarships and financial aid to deserving students.
       Universities and other organizations may offer financial support to
        students who perform exceptionally well in the GATE test, providing them with
       opportunities to pursue their studies without financial constraints.</p>
    </div>

<img src={grants} alt="grants" className='box_bl'/>

   </div>
   <Footer/>
  </div>
   
  
  )
}

export default Gate
