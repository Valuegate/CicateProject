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
        <Navbar/>
      </div>
      <div className='top_boxone'>
     <div className='new1'></div>
      </div>

      <div className='top_abiities'>
        <div className='abilities'>Test Your Abilities <br />
to Success!</div>
      </div>

      <div className='top_heades'>
        <div className='grey_heades'>Discover our innovative test formats <br /> designed to assess your competencies and <br />unlock exciting opportunities</div>
      </div>
      <div className='top_bl'>
        <a href="/gate" className='bl_black'>GATE test</a>
        <a href="/gate" className='bl_green'>POCAS test</a>
        <a href="/gate" className='bl_black'>Lisa Test</a>
      </div>

      <div className='top_empower'>
        <div className='empower_box'></div>
        <div>
            <p className='empower'>Empowering <br />
Individuals With <br />
Reliable Tests</p>
            <p className='cicate_offerz'>CICATE offers cutting-edge testing solutions like <br />
            G.A.T.E and CCA, ensuring accurate evaluations <br />
             for your success. Discover how our products can <br />
              propel you towards your goals.</p>
        </div>
      </div>

    <div className='top_our'>
        <div className='our_test'>Our Test Products</div>
    </div>

    <div className='top_bl_white'>
        <div className='bl_white'>
            <div className='inside_black_bl'></div>
            <p className='bl_tests'>G.A.T.E</p>
            <p className='bl_para'>This trusted evaluation covers language <br />
            proficiency, academic aptitude, and job-specific <br />
             skills, boosting your chances for visa approval <br />
             and showcasing your competence for studying <br />
              or working abroad.</p>
              <a href="/" className='bl_to_apply'>How to Apply</a>
        </div>

        <div className='bl_white'>
        <div className='inside_black_bl'></div>
            <p className='bl_tests'>P.O.C.A.S</p>
            <p className='bl_para'>This trusted evaluation covers language <br />
            proficiency, academic aptitude, and job-specific <br />
             skills, boosting your chances for visa approval <br />
             and showcasing your competence for studying <br />
              or working abroad.</p>
              <a href="/" className='bl_to_apply'>How to Apply</a>
        </div>
    </div>
<div className='top_bl_white2'>
<div className='bl_white2'>
        <div className='bl_block'></div>

        <div>
            <p className='bl_tests'>LISA</p>
            <p className='bl_para'>This trusted evaluation covers language <br />
             proficiency, academic aptitude, and job-specific <br /> 
             skills, boosting your chances for visa approval <br />
              and showcasing your competence for studying <br />
               or working abroad.</p>
               <a href="/" className='bl_to_apply'>How to Apply</a>
        </div>
    </div>
</div>
   
</div>



  )
}

export default TestFormat
