import React from 'react'
import {useNavigate} from "react-router-dom"
import './style.css'

const BackButton = () => {

    const Navigate = useNavigate()

    const handleSubmit = () => {
     Navigate(-1)
    };


  return (
    <div className='backbutton'>
      <button className='back' onClick={handleSubmit}>Back</button>
    </div>
  )
}

export default BackButton
