import React from 'react'
import Navbar from '../../../components/containers/navbar/navbar'
import Footer from '../../../components/containers/footer/footer'

const Profile = () => {
  return (
    <div>
             
      <Navbar/>
  

<div className="how_to_use">
    This is the profile page <br />
  </div>

   
  <div className="gate__container">
    <div><a href="/gate" className='opacity'>G.A.T.E</a></div>
    <div><a href="/pocas" className='pocas'>POCAS</a></div>
    <div><a href="/lisa" className='opacity'>LISA</a></div>
  </div>

  <div className='coming'>
   <h1 className='hw'>Under Construction!!</h1>
  </div>

<Footer/>

    </div>
  )
}

export default Profile
