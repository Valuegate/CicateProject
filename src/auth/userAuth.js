import React, { useContext, useEffect, useState} from 'react'
import {  Outlet, Navigate, useLocation} from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import { useAuthLogin } from './login'

const UserAuth = () => {
  const {getUser} = useAuthLogin()

  /*const [user, setUser] = useState('')
  
  useEffect(()=>{
    const user = getUser()
    if (user){
      setUser(user)
    }

  },[])

  */
const {auth} = useContext(AuthContext)

const Location = useLocation()

  return (
  auth?.user ? <Outlet/> :
  <Navigate to='/login' state={{from : Location}} replace/>
  )
}

export default UserAuth
