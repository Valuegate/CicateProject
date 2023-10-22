import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import './style.css'
import wifi from '../../assets/wifi.svg'
import physical from '../../assets/physical.svg'
import book1 from '../../assets/book1.svg'
import book2 from '../../assets/book2.svg'
import keyboard from '../../assets/keyboard.svg'
import database from '../../assets/database.svg'
import technik from '../../assets/technik.svg'
import flags from '../../assets/flags.svg'
import rockett from '../../assets/rockett.svg'

const Prepare = () => {
  return (
  <div>
    <div>
      <Navbar/>
    </div>
      <div className="green_box">
        <div className='ellipse'></div>
        <div className='ellipse1'></div>
</div>

<div className="prep_header">How to Prepare <br /> Effectively!</div>
<div>
<p className="sub_header">Click to see the steps!</p>
</div>
<ul className='mode'>
  <li> <img src={wifi} alt="img" /><a href="/" className='online'>Online</a></li>
  <li ><img src={physical} alt="img" /><a href="/onsite" className='onsite'>Onsite</a></li>
</ul>
<div className='icns'>
  <img src={book1} alt="img"  className='icon_color'/>
  <img src={book2} alt="img" className='icon_color'/>
</div>

<div className='icns2'>
  <p className='bolds1'>Understanding the Test Format </p>
  <p className='bolds'>Study Materials </p>
</div>
<div className='icns2'>
  <p className='info'>The CICATE motivation congruency test is a computer-based test
   consisting of multiple-choice questions. The test is timed and has a set number of questions. 
   It is important to familiarize yourself with the test format 
   beforehand, so you can manage your time effectively
   and have a better chance of doing well. </p>
  <p className='info'>
  To prepare for the CICATE motivation congruency test, 
  you can review the official materials provided by the test administrators. 
  These materials include sample questions and practice tests, 
  which can help you become more familiar with the test format and types of questions asked. Additionally, you can review relevant textbooks 
  or other study materials to improve your understanding of
   the concepts and topics covered in the test. </p>
</div>
<div className='icns'>
  <img src={keyboard} alt="img" />
  <img src={flags} alt="img" />
</div>
<div className='icns2'>
  <p className='bolds1'>Practice & Feedback </p>
  <p className='bolds'>Conclusion </p>
</div>

<div className='icns2'>
  <p className='info'>Practice is essential for doing well on the CICATE motivation 
  congruency test. Start by taking practice tests to assess your strengths and weaknesses, 
  and then focus on improving in areas where you need more practice.
   It’s also important to seek feedback from others, such as a teacher or tutor, 
   to identify areas where you need to improve and to fine-tune your
   test-taking strategies. </p>
  <p className='info'> Preparing for the CICATE motivation congruency test takes time and effort, 
  but it is well worth it. By understanding the test format, studying relevant materials,
   using effective test-taking strategies, practicing with sample questions, and seeking feedback,
   you can increase your chances of doing well on the test and achieving your academic goals. Good luck!</p>
</div>
<div className='icns3'>
  <p className='bolds3'> <img src={technik} alt="img" className='sml'/>Technical Requirements:</p>
  <p className='bolds3'> <img src={database} alt="img" className='sml'/>Other Important Aspects:</p>
</div>
<div className='icns3'>
  <p className='info1'> 1.Camera working smoothly and stable and showing face clearly <br />
2. Microphone <br />
3. Sufficient internet connection (crucial)</p>
  <p className='info1'> 1.Remove all distractions like phones for testing period <br />
2. Environment sounds <br />
3. Earphones if you are in public space</p>
</div>
<div className='icns3'>
  <p className='bolds3'><img src={rockett} alt="img" className='sml'/>Test Taking Strategies:</p>
</div>
<div className='icns3'>
  <p className='info1'>1.Read question fully and at least 2 times to make sure you understand <br />
2.Mark key phrases and words <br />
3.Don’t rush to answer or confirm answer <br />
4.Read your answer before submitting and fix errors or add/remove something
Relevant/irrelevant <br />
5.Be concise, clear, specific, detailed <br />
6.Answer only what is asked in the question</p>
</div>
<div className="green_box">
        <div className='ellipse'></div>
        <div className='ellipse1'></div>
</div>
</div>
  )
}

export default Prepare
