import React from 'react'
import './style.css'
import Navbar from '../../components/containers/navbar/navbar'
import Footer from '../../components/containers/footer/footer'

const Pocas = () => {
  return (
    <div>
      
      <Navbar/>
   <div>

   <div className="how_to_use">
    How To Use <br />
    Test Results
  </div>

   </div>
  <div className="gate__container">
    <div><a href="/gate" className='opacity'>G.A.T.E</a></div>
    <div><a href="/pocas" className='pocas'>POCAS</a></div>
    <div><a href="/lisa" className='opacity'>LISA</a></div>
  </div>


</div>


  )
}

export default Pocas
