
import './style.css'
import React, { useState } from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import cartgreen from '../../../assets/cartgreen.svg'
import guy3 from '../../../assets/guy3.png'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import Footer from '../../../components/containers/footer/footer'
import ResetPassword from '../../../components/ResetPassword'
import DeleteAccount from '../../../components/DeleteAccount'
const SettingsUniversity = () => {
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
              <div className='institution_black'>
               <div className='top_profile'>
               <div className='insti-profile'>
                    <h1 className='profile_profile'>Institution Settings</h1>
                    <div> <img src={guy3} alt="profile" /> </div>
                    <div><button className='profile_btn'>Upload</button></div>
                  
                </div>
               </div>
                
               <form action="" className='form_profile'>
                 <div className='profile_column'>
                    <label htmlFor="" className=''> Name: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="" className=''> Acronym: <br />
                        <input type="text" className='inputs'/>
                    </label>
                    <label htmlFor="" className=''> Type of university: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="" className=''> Location: <br />
                        <input type="text" className='inputs'/>
                    </label>
                    <label htmlFor="" className=''> Linkedin: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="" className=''> Facebook: <br />
                        <input type="text" className='inputs'/>
                    </label>

                 </div>
                 <div className='profile_column'>
                 <label htmlFor="" className=''> Biography max 500 words: <br />
                 <textarea 
          name="" 
          id="" 
          cols="25" 
          rows="7" 
          className='inputs' 
          placeholder='write biography'>
            </textarea>
                    </label>
                 <label htmlFor="" className=''> Instagram: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="" className=''> Twitter: <br />
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

export default SettingsUniversity
