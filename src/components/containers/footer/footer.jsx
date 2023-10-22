import React from 'react'
import './style.css'

const Footer = () => {
  return (
    
      <footer className="footer">
        <ul> Test takers
          <br />
          <br />
          <li ><a href="/" className='footer__container'>Test Format</a></li>
          <li><a href="/" className='footer__container'>Prepare</a></li>
          <li><a href="/" className='footer__container'>Results</a></li>
          <li><a href="/" className='footer__container'>Why Us</a></li>
          <li><a href="/"className='footer__container'>Gain More Knowledge</a></li>
        </ul>

         <ul>Institutions
         <br />
          <br />
         <li><a href="/" className='footer__container'>Why Accept CICATE</a></li>
         <li><a href="/"className='footer__container'>How To Use Results</a></li>
         <li><a href="/"className='footer__container'>Verifying Results</a></li>
         <li><a href="/"className='footer__container'>Credibility</a></li>
         <li><a href="/"className='footer__container'>FAQ</a></li>
         </ul>
             
         <ul>Research
         <br />
          <br />
         <li><a href="/"className='footer__container'>Test Format</a></li>
         <li><a href="/"className='footer__container'>Prepare</a></li>
         <li><a href="/"className='footer__container'>Results</a></li>
         <li><a href="/"className='footer__container'>FAQ</a></li>
         <li><a href="/"className='footer__container'>Gain More Knowledge</a></li>
         </ul>
              <div>CICATE
              <br />
              <p className='footer__container'>Copyright (C) 2023 by Educational Testing Service. All Rights reserved</p>
              <p className='footer__container'>All trademarks are the property of their respective owners</p>
            </div>
          </footer>
     
       
  )
}

export default Footer
