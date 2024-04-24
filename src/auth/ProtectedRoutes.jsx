import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'

export const auth = ()=>{
    
  const user = localStorage.getItem('refresh')
  if(user){
    return true;
  }
    else {
      return false
    
  }
}


const ProtectedRoutes = () => {
const token = auth()
  return (
token ? <Outlet/> : <Navigate to = 'login' /> 
  )
}

export default ProtectedRoutes
