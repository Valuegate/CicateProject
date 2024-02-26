import React, { useState } from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import cartgreen from '../../../assets/cartgreen.svg'
import guy2 from '../../../assets/guy2.png'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import Footer from '../../../components/containers/footer/footer'
import ResetPassword from '../../../components/ResetPassword'
import DeleteAccount from '../../../components/DeleteAccount'
import './style.css'

const Settings = () => {

  const [add, setAdd] = useState(0)
 

  return (
    <div>
      <div>
        <SignedNav/>
        </div>
        <div className='just'>
         <IdSlide/>
        </div>
          <div className='profile'>
            <h1 className='h1-pro'>Settings</h1>
            <h1></h1>
            </div>

            <div className='profile_justify'>
              <div className='profile_black3'>
               <div className='top_profile'>
               <div className='profile_column'>
                    <h1 className='profile_profile'>Profile Settings</h1>
                    <img src={guy2} alt="profile" className='' /> 
                    <button className='profile_btn'>Upload</button>
                </div>
               </div>
                
               <form action="" className='form_profile'>
                 <div className='profile_column'>
                    <label htmlFor="" className=''> First name & Middle name: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="" className=''> Surname: <br />
                        <input type="text" className='inputs'/>
                    </label>
                 </div>
                 <div className='profile_column'>
                 <label htmlFor="" className=''> Email: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="" className=''> Position: <br />
                        <input type="text" className='inputs'/>
                    </label>
                 </div>
               </form>

               <div className='bottom_profile'>
                <button className='profile_btn'>Save Changes</button>
                <button className='profile_btn1'>Cancel</button>
               </div>
              </div>

          
            </div>
  
<ResetPassword/>
<DeleteAccount/>
          </div>
   
    
  )
}

export default Settings
