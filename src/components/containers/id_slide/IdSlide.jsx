import React from 'react'
import da from '../../../assets/da.svg'
import ca from '../../../assets/ca.svg'
import su from '../../../assets/su.svg'
import './style.css'

const IdSlide = () => {
  return (
    <div>
      <div className='pad'>
        <ul className='row_flex3'>
            <li className='black_id'>ID:123456789</li>
            <li className=''><a href="/" className='slide_text'><img src={da} alt="img" className='img_gren' />Dashboard</a></li>
            <li className=''><a href="/" className='slide_text'><img src={ca} alt="img" className='img_gren'/>Cart</a></li>
            <li className=''><a href="/" className='slide_text'><img src={su} alt="img" className='img_gren'/>Support Chat</a></li>
        </ul>
      </div>
    </div>
  )
}

export default IdSlide
