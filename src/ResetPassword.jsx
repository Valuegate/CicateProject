import React from 'react'
const ResetPassword = () => {
  return (
    <div>
      <div className='profile_justify'>
<div className='profile_black4'>
<div className='top_profile'>
               <div className='profile_column'>
                    <h1 className='profile_profile'>Password Settings</h1>
                  
                </div>
               </div>
               <form action="" className='form_profile'>
                 <div className='profile_column'>
                    <label htmlFor="" className=''> Username: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="" className=''> New Password: <br />
                        <input type="text" className='inputs'/>
                    </label>
                 </div>
                 <div className='profile_column'>
                 <label htmlFor="" className=''> Existing Password: <br />
                        <input type="text" className='inputs'/>
                    </label>

                    <label htmlFor="" className=''> Confirm Password: <br />
                        <input type="text" className='inputs'/>
                    </label>
                 </div>
                 
               </form>
               <div className='bottom_profile'>
                <button className='profile_btn'>Save Changes</button>
                <button className='profile_btn1'>Cancel</button>
               </div>
</div>
</div>
    </div>
  )
}

export default ResetPassword
