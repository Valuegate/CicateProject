import React from 'react'
import './style.css'

const Footer = () => {
  return (
    
      <footer className="footer">
         <div className='foot__headers'>CICATE
              <br />
              <p className='foot__content'>Copyright (C) 2023 by <br /> Educational Testing Service. <br /> All Rights reserved. <br /></p>
             <br /> <p className='foot__content'>All trademarks are the property <br /> of their respective owners</p>
            </div>
        <ul className='foot__headers1'> Test takers
          <br />
          <br />
          <li ><a href="/" className='foot__content'>Test Format</a></li>
          <li><a href="/" className='foot__content'>Prepare</a></li>
          <li><a href="/" className='foot__content'>Results</a></li>
          <li><a href="/"className='foot__content'>Why Us</a></li>
          <li><a href="/"className='foot__content'>Gain More Knowledge</a></li>
        </ul>
         
         <ul className='foot__headers1'>Institutions
         <br />
          <br />
         <li><a href="/" className='foot__content'>Why Accept CICATE</a></li>
         <li><a href="/"className='foot__content'>How To Use Results</a></li>
         <li><a href="/"className='foot__content'>Verifying Results</a></li>
         <li><a href="/"className='foot__content'>Credibility</a></li>
         <li><a href="/"className='foot__content'>FAQ</a></li>
         </ul>
             
         <ul className='foot__headers1'>Research
         <br />
          <br />
         <li><a href="/"className='foot__content'>Test Format</a></li>
         <li><a href="/"className='foot__content'>Prepare</a></li>
         <li><a href="/"className='foot__content'>Results</a></li>
         <li><a href="/"className='foot__content'>FAQ</a></li>
         <li><a href="/"className='foot__content'>Gain More Knowledge</a></li>
         </ul>
             
          </footer>
     
       
  )
}

export default Footer
