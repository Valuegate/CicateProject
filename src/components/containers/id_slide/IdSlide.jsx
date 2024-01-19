import React, { useContext } from 'react'
import da from '../../../assets/da.svg'
import ca from '../../../assets/ca.svg'
import su from '../../../assets/su.svg'
import './style.css'
import { AuthContext } from '../../../auth/AuthProvider'

const IdSlide = () => {
  const {id} = useContext(AuthContext)
  return (
   
      <div className='pad'>
        <ul className='row_flex3'>
            <li className='black_id'>ID:{id && id}</li>
            <li className=''><a href="/student/student-dashboard" className='slide_text'><img src={da} alt="img" className='img_gren' />Dashboard</a></li>
            <li className=''><a href="/student/cart" className='slide_text'><img src={ca} alt="img" className='img_gren'/>Cart</a></li>
            <li className=''><a href="/" className='slide_text'><img src={su} alt="img" className='img_gren'/>Support Chat</a></li>
        </ul>
      </div>
  
  )
}

export default IdSlide
