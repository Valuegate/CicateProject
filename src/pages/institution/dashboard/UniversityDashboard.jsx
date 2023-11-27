import React from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import trois from '../../../assets/trois.svg'
import andrew from '../../../assets/andrew.svg'
import larry from '../../../assets/larry.svg'
import kim from '../../../assets/kim.svg'
import olafi from '../../../assets/olafi.svg'
import mailist from '../../../assets/mailist.svg'
import invite from '../../../assets/invite.svg'
import write from '../../../assets/write.svg'
import askk from '../../../assets/askk.svg'
import can from '../../../assets/can.svg'
import ons from '../../../assets/ons.svg'
import ass from '../../../assets/ass.svg'
import reading from '../../../assets/reading.png'
import reading2 from '../../../assets/reading2.png'
import read_photo from '../../../assets/read_photo.png'
import read_photo2 from '../../../assets/read_photo2.png'


import './style.css'



const UniversityDashboard = () => {
  return (
    <div>
      <div>
        <SignedNav/>
      </div>
      <div className='just'>
        <IdSlide/>
        <div className='dashboard_flex'>

  <div className='boxes'>
    <div className='bold_dashboard'> <img src={trois} alt="img" className='img_set'/>My Dashboard</div>
    <div className='fill-in-uni'>

      <div className='colleague'>List of Colleagues</div>

      <div className='names_lecturer'><img src={andrew} alt="img" className='lecturer_img' />Andrew Hardson <br />
      <span className='positions_lecturer'>PhD, Doctor, Lecturer</span>
      </div>

      <div className='names_lecturer'><img src={larry} alt="img" className='lecturer_img'/>Larry Larson <br />
      <span className='positions_lecturer'>Rector, Doctor</span>
      </div>

      <div className='names_lecturer'><img src={kim} alt="img" className='lecturer_img'/>Kim Jun Kong<br />
      <span className='positions_lecturer'>President of University</span>
      </div>

      <div className='names_lecturer'><img src={olafi} alt="img"className='lecturer_img' />Olafi Olatunji <br />
      <span className='positions_lecturer'>PhD, Doctor, Lecturer</span>
      </div>

 
 <div className=''><a href="/" className='view_all'>View All</a></div>
    </div>
    <div className='fill-in-uni2'>
      <label htmlFor="upload_mail" className='mail_list'><img src={mailist} alt="img" className='' /> Upload Mail List
        <input type="file" style={{display:'none'}} accept="image/*" id='upload_mail'/>
      </label>
    </div>
  </div>


  <div className='blak_two'>
    <div className='fill-in-uni3'>
      <div className='test_invitation'>Test Invitation</div>
      <div className='send_invitation'>Send invitation to students,<br /> employees or other members!</div>
      <button className='invite_div'><img src={invite} alt="img" className='invite_img' /> Invite Now!</button>
    </div>

    <div className='fill-in-uni4'>
      <div className=''>
         <span className='write_code1'>Write a Code <br />To See Results</span>
         </div>
      
      
      <label htmlFor="" className='write_code'>
      Write Code here <br />
      <input type='text' className='input9'/>
      </label>
     
    </div>
  </div>



        </div>
        <div className='ask_flex'>

  <div className=''>
    <div className='ads'><img src={ass} alt="" className='ads_img'/>Assesment Tools:</div>

    <div className='ads_para'>Manage Assesments for students
    and Employees <br /> Access to Assesments</div>
<br />
<br />

    <div className='ads'><img src={can} alt="" className='ads_img'/>Candidate Data:</div>
    <div className='ads_para'>View and manage candidate data, assessment <br /> results, and more <br /> 
    Download reports and analytics for deeper insights</div>
  </div>


  <div className=''>
   <div className='ads'><img src={ons} alt="" className='ads_img'/>Onsite Preparation:</div>
   <div className='ads_para'>Provide guidance to your candidates with <br /> CICATE's onsite preparation resources. <br />
   Monitor candidate engagement and progress.
   </div>
   <br />
   <br />

   <div className='ads'><img src={askk} alt="" className='ads_img'/>Ask Our Support Chat!</div>
   <button className='ask_button'>Ask Now!</button>
  </div>
</div>

<div className='foto_flex'>


  <div className='green_girl'>
    <div><img src={read_photo2} alt="img" /></div>
    <div className='green_girl_div'><img src={reading2} alt="img" /></div>
    <div className='grow_cicate'>Grow With <br />Cicate</div>
    </div>


  <div className='green_boy'>
    <div className='gy'><img src={reading} alt="img" /></div>
    <div className='green_boy_div'><img src={read_photo} alt="img" /></div>
    <div className='cicate_move'>
      <span className=''>Cicate</span> <br />
      <span className='like_pro'> Take Test <br />
        Like Pro!</span>
      <br />
      <span className='like_pro1'>Test yourself!</span>
      </div>
    </div>
</div>


      </div>
      <Footer/>
    </div>
  )
}

export default UniversityDashboard
