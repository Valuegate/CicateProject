import React, { useState , useEffect} from 'react'
import SignedNav from '../../../components/containers/signed/SignedNav'
import cartgreen from '../../../assets/cartgreen.svg'
import guy from '../../../assets/guy.png'
import IdSlide from '../../../components/containers/id_slide/IdSlide'
import Footer from '../../../components/containers/footer/footer'
import {useNavigate} from 'react-router-dom'
import './style.css'

const Profile = () => {
 const Navigate = useNavigate()
 const [userEmail, setUserEmail] = useState("")
 const [id, setId] = useState("")

 useEffect(() =>{
  const getEmail = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
if (userData) {
  setUserEmail(userData.email);
}};
getEmail();
 },[])


 useEffect(() => {
   const getId = () => { 
    const userId = localStorage.getItem('id')
   setId(userId)
 }
 getId();
 }, [])
 
 const editProfile = () => {
  Navigate('/student/settings')
 }


  return (
    <div>
      <div>
        <SignedNav/>
        </div>
        <div className='just'>
         <IdSlide/>
        </div>
          <div className='profile'>
            <h1 className='h1-pro'>Profile</h1>
            <h1></h1>
            </div>

            <div className='profile_justify'>
              <div className='profile_black'>
                 <img src={guy} alt="profile" className='profile_img'/>
                 <h1 className='profile_name'>John Jonshon David</h1>
                 <h2 className='profile_email'>{userEmail}</h2>
                 <p className='tracking'>Tracking ID: {id}</p>
                 <p className='tracking'> <span>32</span>   Tests</p>
                 <button className='profile_btn' onClick={()=> editProfile()}>Edit profile</button>
              </div>
            </div>
  

      </div>
    
  )
}

export default Profile
