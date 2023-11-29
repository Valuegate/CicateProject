import React from 'react'
import './style.css'
import Navbar from '../../components/containers/navbar/navbar'
import Footer from '../../components/containers/footer/footer'

const Lisa = () => {
  return (
    <div>
      <Navbar/>
   

   <div className="how_to_use">
    How To Use <br />
    Test Results
  </div>

   
  <div className="gate__container">
    <div><a href="/gate" className='opacity'>G.A.T.E</a></div>
    <div><a href="/pocas" className='opacity'>POCAS</a></div>
    <div><a href="/lisa" className='pocas'>LISA</a></div>
  </div>

  <div className='coming'>
   <h1 className='hw'>Coming Soon!!</h1>
  </div>
  <Footer/>
    </div>
  )
}

export default Lisa
