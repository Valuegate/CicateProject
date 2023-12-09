import React from 'react'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'
import {useNavigate} from 'react-router-dom'

const Review = () =>

    {

     const Navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        Navigate('/student/success');
      }
  
  const {
  setUserAccount,
  setUserEmail,
  setUserName,
  setUserSurname,
  userAccount,
  userDegree,
  userEmail,
  setUserPwd,
  userName,
  pwd,
  userSurname,
  birthCountry,
  setBirthCountry,
  validNativeLang,
  validCitizenhip,
  nativeLang,
  setNativeLang,
  citizenship,
  setCitizenship,
  birthDay,
  setBirthDay,
  setValidBirthDay,
  validBirthDay,
  
  


  } = useRegisterContext()




  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
         <RegCarousel/>
          <div className='bluk_review'>
         
         <form action="">   
         <BackButton/>
              <div className=''>
                <img src="" alt="" /><span className='personal_unselected'>Personal </span><br />
                <span className='information_unselected'>Information</span></div> <br />
              <label htmlFor="" className='labels'>First name: <br />
                <input type="text"
                className='inputs0'
                value={userName}
                onChange={(e)=>setUserName(e.target.userName)}
                />
              </label> <br />
              <label htmlFor="" className='labels'> Surname: <br />
                <input
                 type="text"
                  className='inputs0'
                  value={userSurname}
                  onChange={(e)=>setUserSurname(e.target.userSurname)}
                   />
              </label> <br />
              <label htmlFor="" className='labels'>Type of Account: <br />
                <select 
                name=""
                 id="" 
                 value={userAccount}
                className='inputs0'
                onChange={(e)=> setUserAccount(e.target.userAccount)}>
                  <option value="Existing-Student" className='inputs0'>Existing Student</option>
                  <option value="New-Student" className='inputs0'> New Student</option>
                </select>
              </label> <br />

              <div className='add_margin'><img src="" alt="" /> 
              <span className='personal_unselected'>Additional </span> <br /> 
              <span className='information_unselected'>Information</span></div> <br />
             
              <label htmlFor="" className='labels'>Country of Birth: <br />
                <input type="text"
                 className='inputs0'
                 value={birthCountry}
                 onChange={(e)=> setBirthCountry(e.target.birthCountry)}
                 />
              </label> <br />
             
              <label htmlFor="" className='labels'>Country of Citizenship: <br />
               <input type="text"
                className='inputs0'
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.citizenship)}
                />
              </label> <br />

              <label htmlFor="" className='labels'>Native Language: <br />
               <input type="text"
                className='inputs0'
                value={nativeLang}
                onChange={(e) => setNativeLang(e.target.nativeLang)}
                />
              </label> <br />
            
            
              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'>Username</span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label htmlFor="" className='labels'> Password <br />
                <input type="text"
                 className='inputs0'
                 value={pwd}
                 onChange={(e) => setUserPwd(e.target.pwd)}
                 />
              </label> <br />
             

              <div className=''>
              <div className='email_margin'>
              <label htmlFor="" className='labels'> Date Of Birth: <br />
                <input type="date"
                 className='inputs0'
                 value={birthDay}
                 onChange={(e)=> setBirthDay(e.target.birthDay)}
                
                 />
              </label> <br />
              <label htmlFor="" className='labels'>Email: <br />
                <input type="email"
                 className='inputs0' 
                 value={userEmail}
                 onChange={()=> setUserEmail(userEmail)}
                 />
              </label> <br />
              </div>

              <div className=''>
             
              </div>
             
            </div>
               <div  className='form_review'>
               <div>
                <input type="checkbox"
                className=''
                required
                /> <label htmlFor="" className="review_terms"> Reviewed all the terms and conditions</label>
                <div> <br />
                <input type="checkbox"
                 className=''
                 required
                 /> <label htmlFor="" className="review_terms"> Agreeing with Privacy Conditions</label>
               </div>
               <br />
               <div className='nexty'>
                <button className='next_big' onClick={handleSubmit}>Create</button>

               </div>
              
             
               </div>
               </div>
               </form>
            </div>





           
          
          </div>
         </div>
     
     
    
      <BlackFooter/>
    </div>
  )
}

export default Review
