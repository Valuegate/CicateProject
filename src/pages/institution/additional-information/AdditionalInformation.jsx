import React,{useContext} from 'react'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import BackButton from '../../../components/backbutton/BackButton'
import { useRegisterContext } from '../../../auth/Register'

const AdditionalInformation = () => {

const {
name,
validLinkedin,
unitype,
setUnitype,
position,
validUnitype,
acronym,
biography,
linkedin,
facebook,
instagram,
twitter,
location,
setLocation,
setName,
setLinkedin,
setPosition,
validInstagram,
validTwitter,
validFacebook,
setFacebook,
setTwitter,
setInstagram,
setAcronym,
setBiography,
validName,
validBiography,
validAcronym,
validLocation,
validPositon,

}= useRegisterContext()

const Navigate = useNavigate()


const handleSubmit = (e) => {
e.preventDefault();
Navigate('/institution/password')

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
          <label htmlFor="" className='labelsp'>Name:
          <span className={validName ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
              <span className={validName || !name? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>

          <br />
          <input
          onChange={(e)=> setName(e.target.value)}
          type="text" 
          className={validName ? "input_valid": !name ? "inputs" :"input_invalid"}
          placeholder='Name'/>
          </label> <br />

         <label htmlFor="" className='labelsp'> <br />Acronym:
         <span className={validAcronym ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
         <span className={validAcronym || !acronym? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
          <br />
         <input 
         onChange={(e)=> setAcronym(e.target.value)}
         type="text"
         className={validAcronym ? "input_valid": !acronym ? "inputs" :"input_invalid"}
           placeholder='Acronym' />
         </label> <br />

          <label htmlFor="" className='labelsp'> <br />Biography: Max 500 words:
          <span className={validBiography ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
         <span className={validBiography || !biography? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
           <br />
        
          <textarea 
          onChange={(e)=> setBiography(e.target.value)}
          name="" 
          id="" 
          cols="20" 
          rows="10" 
          className='inputs' 
          placeholder='write biography'>
            </textarea></label>
          </div>

          <div className='right_sidep'>
            <label htmlFor="" className='labelsp'>Type of University:
            <span className={validUnitype? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
         <span className={validUnitype || !unitype? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
             <br />
          
           <input 
           onChange={(e)=> setUnitype(e.target.value)}
           type="text" 
           className={validUnitype ? "input_valid": !unitype ? "inputs" :"input_invalid"} />
              </label> <br />
              <label htmlFor="" className='labelsp'> <br />Location:
              <span className={validLocation ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
              <span className={validLocation || !location? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
               <br />
              <input
              onChange={(e)=> setLocation(e.target.value)}
              type="text" 
              placeholder='enter location' 
              className={validLocation ? "input_valid": !location ? "inputs" :"input_invalid"}
              
              />
              
              </label> <br />

              <label  htmlFor="" className='labelsp'> <br />Linkedin:
              <span className={validLinkedin ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
              <span className={validLinkedin || !linkedin? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
               <br />
              <input
              onChange={(e) => setLinkedin(e.target.value)}
              type="text" 
              placeholder='enter linkedin url' 
              className={validLinkedin ? "input_valid": !linkedin ? "inputs" :"input_invalid"} /></label> <br />

              <label htmlFor="" className='labelsp'> <br />Facebook:
              <span className={validFacebook ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
              <span className={validFacebook || !facebook? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
              
               <br />

              <input
              onChange={(e) => setFacebook(e.target.value)}
               type="text" 
              placeholder='enter facebook url' 
              className={validFacebook ? "input_valid": !facebook ? "inputs" :"input_invalid"}/></label> <br />

              <label htmlFor="" className='labelsp'> <br />Instagram:
              <span className={validInstagram ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
              <span className={validInstagram || !instagram ? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
               <br />
              <input
              onChange={(e)=> setInstagram(e.target.value)}
               type="text" 
              placeholder='enter instagram url' 
              className={validInstagram ? "input_valid": !instagram ? "inputs" :"input_invalid"} />
              
              </label> <br />
              <label htmlFor="" className='labelsp'> <br />Twitter:
              <span className={validTwitter ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
              <span className={validTwitter || !twitter? "hide" : "invalid"}><FontAwesomeIcon icon= {faTimes}/></span>
              
               <br />
              <input 
              onChange={(e) => setTwitter(e.target.value)}
              type="text" 
              placeholder='' 
              className={validTwitter ? "input_valid": !twitter ? "inputs" :"input_invalid"}/></label> <br />

            <div className='submit_section'>
       <button type='submit'
        className={!validLinkedin || !validLocation || !validName || !validInstagram  || !validBiography || !validTwitter || !validUnitype || !validFacebook || !validAcronym  ? "inactive_next_big" : "next_big"}
        disabled={!validLinkedin || !validLocation || !validName || !validInstagram  || !validBiography || !validTwitter || !validUnitype || !validFacebook || !validAcronym ? true : false}
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
