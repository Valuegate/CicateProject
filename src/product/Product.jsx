import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthLogin } from '../auth/login'
import './style.css'
import { Client } from '../api/axios'

const Url = 'https://ciccate2-production.up.railway.app/api/api/create/'

const Product = (props) => {
 const Navigate = useNavigate()
  useEffect(() => {
    const user = getUser()
    if (user){
      setUser(user)
    }
  },[])
  const {id, name, Description,price,uploaded_images} = props.data
  

  const [user, setUser] = useState('')

  const {getUser} = useAuthLogin()
  
  

  const HandleClick = (e) => {
    Navigate('/gate')

    /*
 Client.post(Url,JSON.stringify({
  name:name,
  description:Description,
  price:price,
  uploaded_images:uploaded_images
 }),
 {
  headers:{'Content-Type': 'application/json'}
 }

 ).then((response) => {
console.log(response.data)
 }).catch((error) => {
  if (error){
    console.log(error)
  }
 });
*/

}

  
  return (

       <div className='top_bl_white' onClick={()=> {
        if(id === 1 ){
          HandleClick()
        } else if(id === 2){
          Navigate('/pocas')
        } else {
          Navigate('/lisa')
        }
       }}>
        <div className='bl_white'>
          <div className='center_image'> 
            <img src={uploaded_images} alt="test" className='imgSize'/>
          </div>
         
            <div className='to_apply_flex'>  <p className='bl_tests'>{name}</p> </div>
           
            <p className='bl_para'>{Description}</p>

            <p className='price'>Price: ${price}</p>
              <div className='to_apply_flex1'>
                {user ? (<Link to={'/student/onlineofline'} className='button_to_apply'>Apply</Link>) :(<Link to={'/login'} className='bl_to_apply'>Apply </Link>) }
              
                </div>
        </div>

       
    </div>

  )
}

export default Product
