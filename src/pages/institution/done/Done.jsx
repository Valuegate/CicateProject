import React from 'react'
import './style.css'
import UnsignedNav from '../../../components/containers/unsignedNav/UnsignedNav'
import BlackFooter from '../../../components/containers/black_footer/BlackFooter'
import RegCarousel from '../../../components/containers/reg-carousel/RegCarousel'
import BackButton from '../../../components/backbutton/BackButton'


const Done = () => {
  return (
    <div>
       <UnsignedNav/>
      <div className='black_page'>
        <div className='div'>
          <RegCarousel/>
          <div className='bluk3'>
          
            <div className=''>
            <BackButton/>
              <div className=''><img src="" alt="" /><span className='personal_unselected'>Personal </span><br /><span className='information_unselected'>Information</span></div> <br />
              <label htmlFor="" className='labels'>First name: <br />
                <input type="text" className='inputs' />
              </label> <br />
              <label htmlFor="" className='labels'> Surname: <br />
                <input type="text" className='inputs' />
              </label> <br />
              <label htmlFor="" className='labels'>Type of Account: <br />
                <select name="" id="" className='inputs'>
                  <option value="" className='inputs'>University Member</option>
                  <option value="" className='inputs'> Staff Member</option>
                  <option value="" className='inputs'>Associate Member</option>
                </select>
              </label> <br />

              <div className='add_margin'><img src="" alt="" /> <span className='personal_unselected'>Additional </span> <br /> <span className='information_unselected'>Information</span></div> <br />
              <label htmlFor="" className='labels'  >Biography: <br />
                <textarea className='inputs1' cols="35" rows="7"></textarea>
              </label> <br />
              <label htmlFor="" className='labels'>Institution Details: <br />
                <input type="text" className='inputs' />
              </label> <br />
              <label htmlFor="" className='labels'>Acronym: <br />
                <input type="text" className='inputs' />
              </label> <br />
              <label htmlFor="" className='labels'>Location: <br />
               <input type="text" className='inputs'/>
              </label> <br />
            
            
              <div className='add_margin'><img src="" alt="" /><span className='personal_unselected'>Username</span><br /> <span className='information_unselected'> & Password</span></div> <br />
              <label htmlFor="" className='labels'> Password <br />
                <input type="text" className='inputs' />
              </label> <br />
              <label htmlFor="" className='labels'> Repeat Password <br />
                <input type="text" className='inputs' />
              </label> <br />
               <form action="" className='form_review'>
               <div>
                <input type="checkbox"  className=''/> <label htmlFor="" className="review_terms"> Reviewed all the terms and conditions</label>
                <div> <br />
                <input type="checkbox" className=''/> <label htmlFor="" className="review_terms"> Agreeing with Privacy Conditions</label>
               </div>
               <br />
               <button className='next_big'>Create</button>
               </div>
               </form>
              

            </div>





            <div className=''>
              <div className='email_margin'>
              <label htmlFor="" className='labels'> E-mail: <br />
                <input type="text" className='inputs' />
              </label> <br />
              <label htmlFor="" className='labels'>Position: <br />
                <input type="text" className='inputs' />
              </label> <br />
              </div>

              <div className='social_margin'>
              <label htmlFor="" className='labels'> Social Media 1#: <br />
                <input type="text" className='inputs' />
              </label> <br />
              <label htmlFor="" className='labels'>Social Media 2#: <br />
                <input type="text" className='inputs' />
              </label> <br />
              </div>
              <div className='username_margin'>
              <label htmlFor="" className='labels'>Username: <br />
                <input type="text" className='inputs' />
              </label> <br />
              </div>


           


            </div>

          </div>
        </div>
      </div>
      <BlackFooter/>
    </div>
  )
}

export default Done
