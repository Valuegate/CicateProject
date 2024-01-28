import React,{useState, useContext, useEffect} from 'react'
import './style.css'
import vector1 from '../../../assets/Vector1.svg'
import vector2 from '../../../assets/Vector2.svg'
import vector3 from '../../../assets/Vector3.svg'
import search from '../../../assets/Search.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthProvider'
import { useAuthLogin } from '../../../auth/login'
const SignedNav = () => {

 const {getUser, handleLogout } = useAuthLogin()
  const {userEmail} = useContext(AuthContext)
const [user, setUser] = useState('')

useEffect(() => {

  const user = getUser()
  if (user) {
    setUser(user)
  }
},[])

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
        <a href="/" className='nav_brand'>CICATE </a>
          <ul className={active}>
            <li className='nav_item'><a href="/" className='nav__link' > <img alt='img' src={vector1} className='vector'/>Test Takers</a> </li>
            <li className='nav_item'><a href="/institutions" className='nav__link'><img alt='img' src={vector2} className='vector'/>Institutions</a> </li>
            <li className='nav_item'><a href="/about" className='nav__link'><img alt='img' src={vector3} className='vector'/>About Us</a> </li>
           
           <li className='nav-item'>{user ? (<Link to={'/student/profile'} className='login'>Profile</Link>):(<Link to={'/login'} className='login'>Login</Link>)}</li>
           <li>{user ? (<button onClick={handleLogout} className='signUp'>Sign Out</button>) : (<Link className='signUp' to={'/choose'}>Sign Up</Link>)} </li>
            <li className='nav_item'>{user ? (<Link to={'/student/student-dashboard'} className='login'>Dashboard</Link>):(<Link className='nav__link'> <img src={search} alt="img" />Search</Link>)}</li>

          
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

export default SignedNav
