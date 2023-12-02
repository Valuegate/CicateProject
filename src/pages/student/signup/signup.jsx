import React from 'react'
import './style.css'
import crusader from '../../../assets/crusader.svg'
import whitehead from '../../../assets/whitehead.svg'
import greybody from '../../../assets/greybody.svg'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Signup = () => {

  return (
   <div>
    <UnsignedNav/>
    <div className='black_page'>
      <div className='div'>
<div className='just'>
<div className='sign_flexx'>

<div className='ontop_img'>
  <div><img src={whitehead} alt="img" className='whitehead'/></div>
  <div><img src={greybody} alt="img" className='greybody'/></div>
  <div><img src={crusader} alt="img" className='crusader'/></div>
</div>


<div className='greta_div'>
  <div className='sign_opacity'>Sign up</div>
  <div className='dont'>Don’t have <br /> an account?</div>
  <div><a href="/student/personaldata" className='create_button'>Create Account</a></div>
</div>

</div>

</div>
<div className='yui'></div>
 <BlackFooter/>

     </div>
     
   </div>
 
    </div>
  )
}

export default Signup
