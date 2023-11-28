import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import long from '../../assets/block-for-text.svg'
import imagetrs from '../../assets/Imagetrs.png'
import './style.css'
import paperhold from '../../assets/paperhold.png'
import Footer from '../../components/containers/footer/footer'

const Institutions = () => {
  return (
    <div>
      <Navbar/>
      <div className='first_header'>How To Apply For <br /> Partnership as a...</div>
      <div className='flex_options'>
        <div><a href="/" className='options2' >Government</a></div>
        <div> <a href="/" className='options1'>University</a></div>
        <div><a href="/"  className='options2'>Company</a></div>
      </div>

      <div className='box_it'>
        <div className='second_imagep'> <img src={imagetrs} alt="img" className='imagetrs'/></div>
       
        <div className='write_div'>
          <div className='spanl'> <span className='span_class1'>Step 1: </span>Contact CICATE</div>
          <p className='info_log'>Begin by reaching out to CICATE through our official contact channels.
             You can use the contact form on our website, 
             or send an email to our dedicated government partnership team.</p>
           <div className='spanl'><span className='span_class1'>Step 2: </span>Contact Initial Discussion</div>
           <p className='info_log'>Our government partnership team will schedule an initial discussion with 
            you to understand your specific needs and objectives.
             We will provide you with detailed information
              about how CICATE can assist your organization.</p>
           <div className='spanl'><span className='span_class1'>Step 3: </span>Contact Customized Solution</div>
           <p className='info_log'>Based on the information gathered during our discussion, 
            CICATE will design a customized assessment solution tailored to your 
            government's requirements. This may include 
            competency assessments for visa applicants or other relevant services</p>
            <div className='spanl'><span className='span_class1'>Step 4: </span>Contact Partnership Agreement</div>
            <p className='info_log'>Based on the information gathered during our discussion,
               CICATE will design a customized assessment solution tailored
               to your government's requirements. This may include competency
                assessments for visa applicants or other relevant services.</p>

        </div>
      </div>
  <div className="move_card">
<div className="cardz"> 

<div className='green_globe'>

  <div className='left_green'>
    <div className='not_move'><p className='not_enough'>Not enough?</p> 
    <p className='apply1'>Apply for <br />partnership</p>
    <a href="/" className='form_but'>Fill The Form Now</a>
    </div>
  </div>

  <div className='right_green'><img src={paperhold} alt="img" className='paper_now' /></div>

  </div> 
  </div>

</div>
<Footer/>
    </div>
  )
}
 
export default Institutions
