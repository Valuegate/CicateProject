import React from 'react'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import greenSubtract from '../../../assets/greenSubtract.svg'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton'


const AdditionalInformation = () => {

const Navigate = useNavigate()


const handleSubmit = (e) => {
e.preventDefault();
Navigate()

};

  return (
    <div>
        <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
          <RegCarousel/>
          <div className='justify_bluk'>
          <div className='bluk'>
          <BackButton/>
         <form action="" className='form_class'>
          <div className='fallp'>
          <label htmlFor="" className='labelsp'>Institution Details: <br /><input type="text" className='inputsp' placeholder='Name'/></label> <br />
         <label htmlFor="" className='labelsp'> <br />Acronym: <br /><input type="text" className='inputsp' placeholder='Acronym' /></label> <br />
          <label htmlFor="" className='labelsp'> <br />Biography: Max 500 words: <br />
          <textarea name="" id="" cols="20" rows="10" className='inputs' placeholder=''></textarea></label>
          </div>

          <div className='right_sidep'>
            <label htmlFor="" className='labelsp'>Type of University: <br />
           <input type="text" className='inputsp' />
              </label> <br />
              <label htmlFor="" className='labelsp'> <br />Location: <br />
              <input type="text" placeholder='' className='inputsp'/></label> <br />
              <label htmlFor="" className='labelsp'> <br />Linkedin: <br />
              <input type="text" placeholder='' className='inputsp' /></label> <br />
              <label htmlFor="" className='labelsp'> <br />Facebook: <br />
              <input type="text" placeholder='' className='inputsp'/></label> <br />
              <label htmlFor="" className='labelsp'> <br />Instagram: <br />
              <input type="text" placeholder='' className='inputsp' /></label> <br />
              <label htmlFor="" className='labelsp'> <br />Twitter: <br />
              <input type="text" placeholder='' className='inputsp'/></label> <br />

              <div className='submit_section'>
       <button type='submit'
        className='next_big'
        onClick={handleSubmit}
        >Next </button> 

      </div>
          </div>
         
         </form>
          </div>
</div>
<BlackFooter/>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInformation
