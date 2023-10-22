import React,{useState} from 'react'
import './style.css'
import vector1 from '../../../assets/Vector1.svg'
import vector2 from '../../../assets/Vector2.svg'
import vector3 from '../../../assets/Vector3.svg'
import search from '../../../assets/Search.svg'
import phone from '../../../assets/group-648.png'
import world from '../../../assets/vector.svg'
import seperator from '../../../assets/separator.svg'


const Navbar = () => {

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
      <nav className='navv'>
        <a href="/home" className='nav_brand'>CICATE </a>
          <ul className={active}>
            <li className='nav_item'><a href="/home" className='nav_link' > <img alt='img' src={vector1} className='vector'/>Test Takers</a> </li>
            <li className='nav_item'><a href="/institutions" className='nav_link'><img alt='img' src={vector2} className='vector'/>Institutions</a> </li>
            <li className='nav_item'><a href="/about" className='nav_link'><img alt='img' src={vector3} className='vector'/>About Us</a> </li>
            <li className='nav_item'><a href="/" className='nav_link'><img alt='img' src={seperator} /></a> </li>
            <li className='nav_item'><a href="/institution/university-login" className='login'>Login</a></li>
            <li className='nav_item'><a href="/student/signup" className='signUp'>Sign Up</a> </li>
            <li className='nav_item'><a href="/" className='nav_link'><img alt='img' src={search} /> Search</a> </li>
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
   <div className="under__Header">
   <a href="/home" className="test_format_button">Test Format</a>
   <a href="/online">Prepare</a>
   <a href="/lisa">Results</a>
   <a href="/faq">FAQ</a>
</div>
</div>
  )
}

export default Navbar
