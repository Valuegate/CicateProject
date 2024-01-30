import React,{useContext, useState, useEffect} from 'react'
import './style.css'
import vector1 from '../../../assets/Vector1.svg'
import vector2 from '../../../assets/Vector2.svg'
import vector3 from '../../../assets/Vector3.svg'
import search from '../../../assets/Search.svg'
import { Link } from 'react-router-dom'

import { useAuthLogin} from '../../../auth/login'



const Navbar = () => {

  const {handleLogout, getUser} = useAuthLogin()
  const [user, setuser] = useState('')



useEffect(() => {
  const user = getUser()
  if (user) {
 setuser(user)
  }

},[])

  const [active, setActive] = useState('nav__menu')
  const [toggleIcon, setToogleIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')
    toggleIcon === 'nav__toggler' ? setToogleIcon('nav__toggler toggle' ): setToogleIcon('nav__toggler');
  }

  return (
    <div className=''>
      <nav className='navv'>
        <a href="/" className='nav_brand'>CICATE </a>
          <ul className={active}>
            <li><a href="/" className='nav__link' > <img alt='img' src={vector1} className='vector'/>Test Takers</a> </li>
            <li><a href="/institutions" className='nav__link'><img alt='img' src={vector2} className='vector'/>Institutions</a> </li>
            <li><a href="/about" className='nav__link'><img alt='img' src={vector3} className='vector'/>About Us</a> </li>
            <li>{user ? (<Link to={'/student/profile'} className='login'>Profile</Link>):(<Link to={'/login'} className='login'>Login</Link>)}</li>
            <li>{user ? (<button onClick={handleLogout} className='signUp'>Sign Out</button>) : (<Link className='signUp' to={'/choose'}>Sign Up</Link>)} </li>
            <li>{user ? (<Link to={'/student/student-dashboard'} className='login'>Dashboard</Link>):( <input type='text' className='login' placeholder='search'></input> )}</li>
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

          <div className="under__Header">
   <a href="/" className={'testFormat'}>Test Format</a>
   <a href="/" className={'testFormat'}>Prepare</a>
   <a href="/gate" className={'testFormat'}>Results</a>
   <a href="/faq" className={'testFormat'}>FAQ</a>
</div>
      </nav>
  
</div>
  )
}

export default Navbar
