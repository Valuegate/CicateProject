import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import './style.css'
import tick from '../../assets/tick.svg'
import Footer from '../../components/containers/footer/footer'
const Faq = () => {
  return (
    <div>
      <Navbar/>
      <div className='faq_up'>
        <div className='faq'>FAQ</div>
      </div>
      <div>
        <p className='faq_sub'>Questions that might have an answer for you!</p>
      </div>
      <div className='blackbox1'>
        <div className='first_box'>
        <div className="white_header">General FAQ</div>
          <div className='white_box'>
          <div className="ci_header">What is CICATE?</div>
          <div>
<p className="inside_text_para">
CICATE (Competent International Test takers Assessment, Tests, and Exams) is a pioneering assessment and
evaluation platform that assists individuals and organisations in identifying qualified Test takers for
educational and professional opportunities internationally and abroad.
</p>
</div>

          </div>
          <div>
<p><a href="/" className="inside_text">How does CICATE benefit Test takers? <img src={tick} alt="img" className='tick_image'/> </a></p>
</div>
<div>
<p><a href="/" className="inside_text">How can organisations benefit from CICATE? <img src={tick} alt="img" className='tick_image'/></a></p>
</div>
<div>
<p><a href="/"className="inside_text">What are the key products of CICATE? <img src={tick} alt="img" className='tick_image'/></a></p>
</div>
        </div>
        <div className='second_box'>
        <div>
<p className="white_header1">G.A.T.E. - Global <br /> Assessment Test <br />for Education FAQs</p>
</div>
<div className='inside_brown'>
<p><a href="/" className="inside_text">What is G.A.T.E? <img src={tick} alt="img" className='tick_image'/> </a></p>
</div>
<p><a href="/" className="inside_text">Who can take the G.A.T.E exam? <img src={tick} alt="img" className='tick_image'/> </a></p>
<p><a href="/" className="inside_text"> How does G.A.T.E benefit Test takers?<img src={tick} alt="img" className='tick_image'/> </a></p>
<p><a href="/" className="inside_text">Can G.A.T.E scores be used for multiple university applications? <img src={tick} alt="img" className='tick_image'/> </a></p>
<p><a href="/" className="inside_text"> How is the G.A.T.E syllabus developed?<img src={tick} alt="img" className='tick_image'/> </a></p>
<p><a href="/" className="inside_text"> What is the validity period of G.A.T.E scores?<img src={tick} alt="img" className='tick_image'/> </a></p>
<p><a href="/" className="inside_text">Can G.A.T.E scores be used for scholarship applications? <img src={tick} alt="img" className='tick_image'/> </a></p>
<p><a href="/" className="inside_text">How can I register for the G.A.T.E exam? <img src={tick} alt="img" className='tick_image'/> </a></p>
        </div>
      </div>

      <div className='blackbox1'>
   <div className='second_box1'>
   <div>
<p className="white_header1">P.O.C.A.S- Professional <br /> Assessment &amp; <br />Selection Suite FAQs</p>
</div>
<div>
<p><a href="/" className="inside_text">What is POCAS? <img src={tick} alt="img" className='tick_image'/> </a></p>
<div>
<p><a href="/" className="inside_text">Who can benefit from POCAS? <img src={tick} alt="img" className='tick_image'/> </a></p>
<div>
<p><a href="/" className="inside_text">Does POCAS cater to specific industries or roles? <img src={tick} alt="img" className='tick_image'/> </a></p>
<div>
<p><a href="/" className="inside_text">Does POCAS cater to specific industries or roles?<img src={tick} alt="img" className='tick_image'/> </a></p>
<div>
<p><a href="/" className="inside_text">How does CICATE benefit Test takers? <img src={tick} alt="img" className='tick_image'/> </a></p>
<div>
<p><a href="/" className="inside_text">How does CICATE benefit Test takers? <img src={tick} alt="img" className='tick_image'/> </a></p>
</div>
</div>
</div>
</div>
</div>
</div>

   </div>
   <div className='first_box11'>
   <div>
<p className="white_header">General FAQ</p>
</div>
<div>
<p><a href="/" className="inside_text">How does CICATE benefit Test takers? <img src={tick} alt="img" className='tick_image'/> </a></p>
</div>
<div>
<p><a href="/" className="inside_text">How does CICATE benefit Test takers? <img src={tick} alt="img" className='tick_image'/> </a></p>
</div>
<div>
<p><a href="/" className="inside_text">How does CICATE benefit Test takers? <img src={tick} alt="img" className='tick_image'/> </a></p>
</div>
<div>
<p><a href="/" className="inside_text">How does CICATE benefit Test takers? <img src={tick} alt="img" className='tick_image'/> </a></p>
</div>
     </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Faq
