import React, {useContext, useState, useEffect} from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import Footer from '../../../components/containers/footer/footer'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import trois from '../../../assets/trois.svg'
import cinq from '../../../assets/cinq.svg'
import yuu from '../../../assets/yuu.svg'
import yut from '../../../assets/yut.svg'
import quatre from '../../../assets/quatre.svg'
import seize from '../../../assets/seize.svg'
import reading from '../../../assets/reading.png'
import reading2 from '../../../assets/reading2.png'
import read_photo from '../../../assets/read_photo.png'
import read_photo2 from '../../../assets/read_photo2.png'
import { useAuthLogin } from '../../../auth/login'



import './style.css'



const StudentDashboard = () => {
  const {GetExams, startExams, getUser} = useAuthLogin();
const [user, setUser]=useState(false)

useEffect(() => {
const user = getUser()
if (user){
  setUser(user)
}
},[])



  return (
    <div>
      <div>
        <SignedNav/>
      </div>
      <div className='just'>
     <IdSlide/>
     <div className='dashboard_flex'>

     <div className=''>
      <div className='bold_dashboard'><img src={trois} alt="img" className='img_set'/>My Dashboard</div>
      <br />
      <div ><div className='my_test'>My Tests</div>   <a href="/" className='view'>view all Tests</a></div>
      <div className='block_functions'>
        <div className='green_white'  onClick={()=>GetExams()}><div className='reg_find'>Register/Find Test Centers</div></div>
        <div className='green_white'><span className='fill_text'><img src={yuu} alt="img" className='img_jk' />Upcoming Tests</span></div>
        <div className='green_white'> <span className={!user ? 'reg_find2' : ''}>{user ? (<button className={user ? 'reg_find' : 'reg_find2'} onClick={()=> startExams()}>Start Gate Test</button>): 'No Test For now!'}</span></div>
        <div className='green_white'><span className='fill_text'><img src={yut} alt="" className='img_jk'/>Scores</span></div>
        <div className='green_white'><a href="/" className='reg_find2'>Press to see the list</a></div>
      </div>

     </div>



     <div className='dist'>
      <div>
        <span className='my_test'><img src={quatre} alt="" className='img_set'/>Test Preparation <br /> & Tools</span> <br />
        <p className='less_text'>Free Test Preparation <br /> Shop for test Preparation <br /> My Test Preparation</p>
      </div>
 <br />
      <div>
        <span className='my_test'><img src={cinq} alt="" className='img_set'/>Getting Ready <br />
for Test Day</span> <br />
        <p className='less_text'>Identification Requirements <br />
Test Center Procedures & <br /> Regulations</p>
      </div>
  <br />
      <div>
        <span className='my_test'><img src={seize} alt="" className='img_set'/>Order</span>
        <p className='less_text'>View My Orders</p>
      </div>
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

export default StudentDashboard
