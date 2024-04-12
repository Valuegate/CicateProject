
import './style.css'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SignedNav from '../../../components/containers/signed/SignedNav'
import cartgreen from '../../../assets/cartgreen.svg'
import guy3 from '../../../assets/guy3.png'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import ResetPassword from '../../../components/ResetPassword'
import DeleteAccount from '../../../components/DeleteAccount'
import { Client } from '../../../api/axios'




const SettingsUniversity = () => {

  const [user, setUser] = useState({
    name:'',
    acronym: '',
    location: '',
    linkedin:'',
    facebook:'',
    instagram:'',
    biography:'',
    twitter:'',
    biography: '',
  })

  const {name, location, linkedin, facebook, instagram, acronym,biography,twitter} = user

/*useEffect(() => {
 loadProfile()
}, [])


const loadProfile = async () => {
  const result = await Client.get(`https://ciccate2.onrender.com/${id}`,{
    headers: { 
   Authorization: 'Bearer ' + localStorage.getItem('accesstoken') 
  }}).then((response)=>{
 console.log(response.data)
  }).catch((error)=>{
    if (error){
      console.log(error, 'didnt work')
    }
  });*/

  const editProfile = async (id) => {
  await Client.put(`https://ciccate2.onrender.com/api/api/question/update/${id}/`,user).then((response)=>{
console.log(response.data)
alert('success')
  }).catch((error)=>{
if (error){
  console.log(error, 'didnt work')
}
  })
  }

  
  

  const onchangeProfile=(e)=>{
    setUser({...user, [e.target.name]:e.target.value})
  }

const {id} = useParams()

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
                    <label htmlFor="name" className=''> Name: <br />
                        <input
                         type="text"
                         name='name'
                        className='inputs'
                        value={name}
                        onChange={(e)=>onchangeProfile(e.target.value)}
                        
                        />
                    </label>

                    <label htmlFor="acronym" className=''> Acronym: <br />
                        <input 
                        type="text"
                         name='acronym'
                        className='inputs'
                        value={acronym}
                        onChange={(e)=>onchangeProfile(e.target.value)}
                         />
                    </label>
                    <label htmlFor="" className=''> Type of university: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="location" className=''> Location: <br />
                        <input  
                        type="text"
                         name='location'
                        className='inputs'
                        value={location}
                        onChange={(e)=>onchangeProfile(e.target.value)}/>
                    </label>
                    <label htmlFor="linkedin" className=''> Linkedin: <br />
                        <input  
                        type="text"
                         name='linkedin'
                        className='inputs'
                        value={linkedin}
                        onChange={(e)=>onchangeProfile(e.target.value)}/>
                    </label>

                    <label htmlFor="facebook" className=''> Facebook: <br />
                        <input  
                        type="text"
                         name='facebook'
                        className='inputs'
                        value={facebook}
                        onChange={(e)=>onchangeProfile(e.target.value)}/>
                    </label>

                 </div>
                 <div className='profile_column'>
                 <label htmlFor="biography" className=''> Biography max 500 words: <br />
                 <textarea 
          name="biography" 
          id="biography" 
          cols="25" 
          rows="7" 
          type="text"
         value={biography}
         onChange={(e)=>onchangeProfile(e.target.value)}
          className='inputs' 
          placeholder='write biography'>
            </textarea>
                    </label>
                 <label htmlFor="instagram" className=''> Instagram: <br />
                        <input
                         type="text"
                         name='instagram'
                        className='inputs'
                        value={instagram}
                        onChange={(e)=>onchangeProfile(e.target.value)}/>
                    </label>

                    <label htmlFor="twitter" className=''> Twitter: <br />
                        <input  
                        type="text"
                         name='twitter'
                        className='inputs'
                        value={twitter}
                        onChange={(e)=>onchangeProfile(e.target.value)}/>
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
