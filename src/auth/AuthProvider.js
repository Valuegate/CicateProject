import React,{createContext, useContext, useState} from 'react'


export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {



const [auth, setAuth] = useState(() => {

const storeAuth = localStorage.getItem('auth');
return storeAuth ? JSON.parse(storeAuth) : {};
});


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

const checkAuth = (data) =>{
  setAuth(data);
  localStorage.setItem('auth', JSON.stringify(data));
}

const logOut = () =>{
  setAuth({})
  localStorage.removeItem('auth');
}


  return (

    <div>
      <AuthContext.Provider 
      value={{auth, userEmail, setAuth, setAuthData, setAuthId,id, logOut, checkAuth}}>
       {children}
      </AuthContext.Provider>
    </div>
  )
}

export const  useAuth = () => useContext(AuthContext)




