import React from 'react'
import './style.css'
import Navbar from '../../components/containers/navbar/navbar'
import Footer from '../../components/containers/footer/footer'

const Gate = () => {
  return (
    <div>
      <Navbar/>
    <div>
   
    
  </div>
 <div>

 <div className="how_to_use">
  How To Use <br />
  Test Results
</div>

 </div>
<div className="gate__container">
  <div><a href="/gate" className='pocas'>G.A.T.E</a></div>
  <div><a href="/pocas" className='opacity'>POCAS</a></div>
  <div><a href="/lisa" className='opacity'>LISA</a></div>
</div>
<div className='box_gate'>
<div className='gate_rectangle'></div>
</div>
<div>
  <p className="GATE-global">
    <span className='gate_wrapper'>GATE</span>
    <br />
    <br />
    <span className="gate_wrapper2">Global Assessment and Testing  for Education:</span>
  </p>
  
</div>
<div className='great'>
    <p> G.A.T.E is a comprehensive test specifically designed for applicants to
       university study programs. It serves as a crucial tool in the study application process, 
       enabling universities to select the best candidates. By evaluating the skills, knowledge, and
        aptitude of applicants, G.A.T.E assists universities in identifying individuals
       who have the potential to thrive in their chosen field of study.
<br />
<br />
The application areas of G.A.T.E 
are vast and varied. It helps universities 
assess the academic readiness of applicants,
 ensuring they have the necessary foundational knowledge and skills required for 
 their chosen study program. G.A.T.E also evaluates critical thinking abilities,
  problem-solving skills, and analytical reasoning, which are essential for success in higher education.</p>
  </div>
  <div>
    <p className='gate_test'>
    The GATE test results
     can be applied in various areas and
      situation:
    </p>
  </div>
  <div className='small_box'>
    <div className='small_rectangle'></div>
    <div className="gate_wrapper4">Higher Education Admissions:</div>
    <div>
      <p className='great'>
      The primary application area for GATE test results is in the admissions process 
      for higher education institutions. Universities use GATE scores to evaluate and select candidates
       for study programs. The results help universities identify the
        most deserving candidates based on their knowledge and skills.
      </p>
    </div>
      <div className='small_rectangle1'></div>
      <div className="gate_wrapper5">International Opportunities:</div>
      <div>
        <p className='great'>The primary application area for GATE test results is 
        in the admissions process for higher education institutions.
         Universities use GATE scores to evaluate and select candidates for study
         programs. The results help universities identify the most
          deserving candidates based on their knowledge and skills.</p>
      </div>
  </div>
  <div className="gate_wrapper6">Scholarships and <br />Financial Aid:</div>
  <div>
    <p className='great_left'>
     GATE test results can also be used as a criterion for awarding scholarships and financial 
    aid to deserving students. Universities and other organizations may offer financial support to students who perform exceptionally
     well in the GATE test, providing them with opportunities to pursue their studies without financial constraints.
    </p>
  </div>
  <div className='small_rectangle2'></div>
  <div className='gate_wrapper7'>Academic Fellowships and Grants:</div>
  <div>
    <p className='great_left'>
    GATE test results can also be used as a criterion for awarding scholarships and
     financial aid to deserving students. Universities and other organizations may offer 
     financial support to students who perform exceptionally well in the GATE test,
      providing them with opportunities to pursue their 
    studies without financial constraints.
    </p>
  </div>
  <Footer/>
  </div>
  )
}

export default Gate
