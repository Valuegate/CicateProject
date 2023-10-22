import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import './style.css'
import block1 from '../../assets/block-1.png'
import block2 from '../../assets/block-2.png'
import block3 from '../../assets/block-3.png'
import block4 from '../../assets/block-4.png'
import block5 from '../../assets/block-5.png'
import cross from '../../assets/group-678.png'
import xicon from '../../assets/xicon.svg'
import zicon from '../../assets/zicon.svg'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import gradient from '../../assets/gradient.svg'

const TestFormat = () => {
  return (
    <div>
      <div>
      <div>
        <Navbar/>
      </div>
      <div className='top_box'>
      </div>
      <div className='green_gradient'></div>
      <div className='format_header'>
      Test Your Abilities
      to Success!
      </div>
      <div className='test_subheader'>
      Discover our innovative test formats designed
       to assess your competencies and unlock exciting opportunities.
      </div>
      <div className='butons'>
<div><a href="/gate" className='test_buttons'>GATE TEST</a></div>
<div><a href="/pocas" className='test_buttons1'>POCAS TEST</a></div>
<div>  <a href="/lisa" className='test_buttons'>LISA TEST</a></div>
      </div>
<div className='box_ned'>
    <div>
   <div className='box_ned_vertical'></div>
    </div>

    <div>
        <p className='box_ned_header'>Empowering <br />
Individuals With <br />
Reliable Tests </p>
        <p className='box_ned_text'> CICATE offers cutting-edge testing 
        solutions like
         G.A.T.E and CCA, ensuring accurate evaluations for your
success. Discover how our products can propel you towards your goals.</p>
    </div>
</div>

<div className='center_header1'>
<div className="box_ned_header1">Our Test Products</div>
</div>

<div className='center_header2'>
<div className='card_header'>
    <div className='inside_card'></div>
    <div className="card_wrapper">G.A.T.E</div>
    <div>
    <p className="card_para">
This trusted evaluation covers language proficiency,
 academic aptitude, and job-specific skills, 
 boosting your
chances for visa approval and showcasing your 
competence for studying or working abroad.
</p> 
    </div>
<div>
<div className='how-to-apply-button'>
 <a href="/" className="text-wrapperx">How To Apply</a>
</div>
</div>
    <div>
    </div>
</div>
<div className='card_header'>
    <div className='inside_card'></div>
    <div className="card_wrapper">POCAS</div>
    <div>
        <p className='card_para'>This trusted evaluation
         covers language proficiency, 
        academic aptitude, and job-specific skills,
         boosting your chances for visa approval and 
         showcasing 
        your competence for studying or working abroad.
        </p>
    </div>
<div>
    <div className='how-to-apply-button'>
    <a href="/" className="text-wrapperx">How To Apply</a>
    </div>
</div>

<div className='card-long'>
<div className='flex2'>
    <div className='second_boxx'></div>
    <div>
        <p className='card_wrapper'>LISA</p>
        <p className='card_para'>This trusted evaluation covers language proficiency,
             academic aptitude, and job-specific skills,
              boosting your chances for visa approval and showcasing your
             competence for studying or working abroad.</p>
             <div className='how-to-apply-button'>
    <a href="/" className="text-wrapperx">How To Apply</a>
    </div>
    </div>
</div>
</div>

<div className='flex3'>

    <div className='reasons'>Reasons To Test Yourself</div>
    
      <div className='flex4'>
        <div>< img src={block1} alt="img" className='block'/></div>
        <div>
        <p>
     <span className="up_bold">Find the </span>
     <br />
      <span className="span-para">Right Test for You</span>
         </p>
        </div>
    </div>
</div>

<div className='flex5'>
    <div className='flex4'>
        <p> <span className='up_bold'>Find Qualified</span>
        <br />
       <span className='span-para'>Applicants</span>
        </p>
      <img src={block3} alt="img" className='block'/>
    </div>


    <div className='flex4'>
    <img src={block2} alt="img" className='block'/>
    <p> <span className='up_bold'>Show Your</span>
        <br />
     <span className='span-para'>Linguistic Ability</span>
      </p>
    </div>
</div>




<div className='flex5'>
    <div className='flex4'>
        <p> <span className='up_bold'>Collaborate</span>
        <br />
       <span className='span-para'>with ETS</span>
        </p>
      <img src={block4} alt="img" className='block'/>
    </div>


    <div className='flex4'>
    <img src={block5} alt="img" className='block'/>
    <p> <span className='up_bold'>Gain Your</span>
        <br />
     <span className='span-para'>Teaching License</span>
      </p>
    </div>
</div>

<div className='bottom_header'>
<p  className='test_subheader1'>If reasons are good enough</p>
</div>


<div className='cross_wrapper'>
    <div><img src={cross} alt="img" className='cross_img'/></div>
    <div className='mid'>Why not Create Account?</div>
</div>

<div className='down_gap'>
    <div>
       <div></div><img src={xicon} alt="img" className='iconn'/>
        <div className='down_bold'>Applicant</div>
        <div className='down_bold1'>Log in to your dashboard</div>
       <button className='login-button'><div className='buton_txt'>Login</div></button>
    </div>



    <div>
    <img src={zicon} alt="img" className='iconn'/>
        <div className='down_bold'>Institution</div>
        <div className='down_bold1'>Log in to your dashboard</div>
       <button className='login-button'><div className='buton_txt'>Login</div></button>
    </div>
</div>
<div className='rect'>
<div className='inside_black'>Follow us</div>
<div className='flex_social'>
   <a href="/"><img src={instagram} alt="img" className='socials_icons'/></a> 
   <a href="/"><img src={linkedin} alt="img" className='socials_icons'/></a> 
   <a href="/"><img src={youtube} alt="img" className='socials_icons'/></a> 
   <a href="/"><img src={facebook} alt="img" className='socials_icons'/></a> 
</div>
</div>
<div><img src={gradient} alt="img" className='gradient_class' />
</div>
</div>
</div>
</div>

</div>
  )
}

export default TestFormat
