import React,{useEffect} from 'react'
import './style.css'

const Alert = ({message, type, onClose, value}) => {
   

    useEffect(()=>{
    const timer = setTimeout(()=>{
        onClose();
    },2500);
    return ()=>{
        clearTimeout(timer);
    }
})

  return (
    <div className={`custom-alert-overlay ${type}`}>
      <div className='custom-alert'>
        <p className='error_text'> {message}</p>
        <p>{value}</p>

      </div>
    </div>
  )
}

export default Alert
