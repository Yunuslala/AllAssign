import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const Navigate=useNavigate()
  const LoginToken=localStorage.getItem("LoginToken");

  return (
    <div>
      <div className='navbar'>
    {LoginToken && 
    <div>
      <button className='tast-nav' onClick={(e)=>Navigate('/Product')}>ProductPage</button>
    </div>}
    <div>
    <button className='tast-signup' onClick={(e)=>Navigate('/SignUp')}>Signup</button>
    </div>
    <div>
   {LoginToken &&  <button className='tast-signup' onClick={(e)=>Navigate('/Cart')}>Cart</button>}
    </div>
    </div>
    <div className='WelcomeParent'>
      <p>
        Welcome to Our E-Commerce App
      </p>
    </div>
    </div>
    
  )
}

export default Landing
