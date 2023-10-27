import React from 'react'
import './style.css'

const Footer = () => {
  return (
    
      <footer className="footer">
        <ul className='foot__headers'> Test takers
          <br />
          <br />
          <li ><a href="/" className='foot__content'>Test Format</a></li>
          <li><a href="/" className='foot__content'>Prepare</a></li>
          <li><a href="/" className='foot__content'>Results</a></li>
          <li><a href="/"className='foot__content'>Why Us</a></li>
          <li><a href="/"className='foot__content'>Gain More Knowledge</a></li>
        </ul>

         <ul className='foot__headers'>Institutions
         <br />
          <br />
         <li><a href="/" className='foot__content'>Why Accept CICATE</a></li>
         <li><a href="/"className='foot__content'>How To Use Results</a></li>
         <li><a href="/"className='foot__content'>Verifying Results</a></li>
         <li><a href="/"className='foot__content'>Credibility</a></li>
         <li><a href="/"className='foot__content'>FAQ</a></li>
         </ul>
             
         <ul className='foot__headers'>Research
         <br />
          <br />
         <li><a href="/"className='foot__content'>Test Format</a></li>
         <li><a href="/"className='foot__content'>Prepare</a></li>
         <li><a href="/"className='foot__content'>Results</a></li>
         <li><a href="/"className='foot__content'>FAQ</a></li>
         <li><a href="/"className='foot__content'>Gain More Knowledge</a></li>
         </ul>
              <div className='foot__headers'>CICATE
              <br />
              <p className='foot__content'>Copyright (C) 2023 by Educational Testing Service. All Rights reserved</p>
              <p className='foot__content'>All trademarks are the property of their respective owners</p>
            </div>
          </footer>
     
       
  )
}

export default Footer
