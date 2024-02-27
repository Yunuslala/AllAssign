import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const Navigate=useNavigate()
  const UserToken=localStorage.getItem("UserToken");

  return (
    <div>
      <div className='navbar'>
    {UserToken && 
    <div>
      <button className='tast-nav' onClick={(e)=>Navigate('/Task')}>Task</button>
    </div>}
    <div>
    <button className='tast-signup' onClick={(e)=>Navigate('/SignUp')}>Signup</button>
    </div>
    </div>
    <div className='WelcomeParent'>
      <p>
        Welcome to Our Task App
      </p>
    </div>
    </div>
    
  )
}

export default Landing
