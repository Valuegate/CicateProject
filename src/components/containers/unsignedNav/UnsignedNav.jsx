
import React,{useContext, useState} from 'react'
import './style.css'
import mac from '../../../assets/mac.svg'
import caa from '../../../assets/caa.svg'
import tee from '../../../assets/tee.svg'
import search from '../../../assets/set.svg'
import { AuthContext } from '../../../auth/AuthProvider'


const UnsignedNav = () => {
const {userEmail} = useContext(AuthContext)

  const [active, setActive] = useState('nav__menu')
  const [toggleIcon, setToogleIcon] = useState('nav__toggler')
  const navToggle =() => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')
    toggleIcon === 'nav__toggler'
    ? setToogleIcon('nav__toggler toggle' )
     : setToogleIcon('nav__toggler');
  
  }
  return (
    <div>
      <nav className='navvv'>
        <a href="/" className='nav_brand2'>CICATE </a>
          <ul className={active}>
            <li className='nav_item'><a href="/" className='nav__link2' > <img alt='img' src={tee} className='vector0'/>Test Takers</a> </li>
            <li className='nav_item'><a href="/institutions" className='nav__link2'><img alt='img' src={caa} className='vector0'/>Institutions</a> </li>
            <li className='nav_item'><a href="/about" className='nav__link2'><img alt='img' src={mac} className='vector0'/>About Us</a> </li>
            <li className='nav_item'><a href="/login" className='login_black'>Login</a></li>
            <li className='nav_item'><a href="/choose" className='signUp'>Sign Up</a> </li>
            <li className='nav_item'><a href="/" className='nav__link2'><img alt='img' src={search} /></a> </li>
          </ul>
         <ul>
         </ul>
          <div className={toggleIcon} onClick={navToggle}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
          <ul>
          </ul>
      </nav>
</div>
  )
}

export default UnsignedNav;
