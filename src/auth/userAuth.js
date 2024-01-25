import React, { useContext} from 'react'
import {  Outlet, Navigate, useLocation} from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const UserAuth = () => {
const {auth} = useContext(AuthContext)

const Location = useLocation()

  return (
  auth?.user ? <Outlet/> :
  <Navigate to='/login' state={{from : Location}} replace/>
  )
}

export default UserAuth
