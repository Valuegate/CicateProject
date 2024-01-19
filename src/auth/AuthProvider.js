import React,{createContext, useState} from 'react'


export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

const [auth, setAuth] = useState({})
const [userEmail, setUserEmail] = useState('')
const [id, setUserId] = useState('')

const setAuthData = (email) =>{
setUserEmail(email);
setAuth((prevAuth)=>({...prevAuth, userEmail: email}))
}
   
const setAuthId = (Id)=>{
setUserId(Id);
setAuth((prevAuth)=>({...prevAuth, id: Id}))
}


  return (

    <div>
      <AuthContext.Provider 
      value={{auth, userEmail, setAuth, setAuthData, setAuthId,id}}>
       {children}
      </AuthContext.Provider>
    </div>
  )
}






