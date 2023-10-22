import React from 'react'
import pic1 from  '../../../assets/1.svg'
import pic2 from  '../../../assets/2.svg'
import pic3 from  '../../../assets/3.svg'
import pic4 from  '../../../assets/4.svg'
import normal from  '../../../assets/normal.svg'
import greenArrow from '../../../assets/green_arrows.svg'
import './style.css'


const TestCarousel = () => {
  return (
    <div>
       <div className='regfor'>
        
        <div>
          <span className='registering'>Registering</span> <br />
        <span className='for'>for Testing</span>
        </div>

        <div className='green_money'>Cost:$150</div>
      </div>
        <div className='flex_end1'>
          <div className='inside_flex'>
            <img src={pic1} alt="img" className='pic1'/>
           <p className='personal_information1'>
            <span className='personal'>Online </span> 
          <span className='information'>Ofline </span>
          <div className="current-position" />
          </p>
          <div className='green_arrow_box'> <img src={greenArrow} alt='img' className='next1' /></div>
          </div>

          <div className='inside_flex'>
            <img src={pic2} alt="img" className='pic1'/>
           <p className='personal_information1'>
            <span className='personal_unselected'>Time </span> <br />
          <span className='information_unselected'>&Date </span>
         
          </p>
          <div className='green_arrow_box'> <img src={normal} alt='img' className='next1' /></div>
          </div>

           <div className='inside_flex'>
            <img src={pic3} alt="img" className='pic'/>
           <p className='personal_information1'>
            <span className='personal_unselected'>Photo  </span> <br />
          <span className='information_unselected'> Validation </span>
         
          </p>
          <div className='green_arrow_box'> <img src={normal} alt='img' className='next1' /></div>
          </div>


          <div className='inside_flex'>
            <img src={pic3} alt="img" className='pic'/>
           <p className='personal_information1'>
            <span className='personal_unselected'>Review  </span> 
            <br />
          <span className='information_unselected'> &Submit </span>
         
          </p>
          <div className='green_arrow_box'> <img src={normal} alt='img' className='next1' /></div>
          </div>

          <div className='inside_flex'>
            <img src={pic4} alt="img" className='pic_unselected'/>
            <div className='information_unselected'>Payment</div>
          </div>
        </div>
        </div>
  )
}

export default TestCarousel
