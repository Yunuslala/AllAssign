import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber:''
  });
  const Navigate=useNavigate()
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    try {
        console.log(formData)
        e.preventDefault();
        const res=await axios.post('http://localhost:5500/User/Register', formData,{
            headers: {
                'Content-Type': 'application/json',
              },
        });
        const ch=res.data;
        Navigate('/Login')
        console.log(ch)
    } catch (error) {
      if(error.response.status==400){
        alert(error.response.data.errors[0].msg)
      }
        console.log(error)
    }
   

  }
  

  return (
    <div className='signup-page'>
      <h2 className='Signup-text'>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label  htmlFor="name">Name</label>
          <input className='label-name'
           placeholder='Enter your Name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div>
          <label  htmlFor="email">Email</label>
          <input className="email"
           placeholder='Enter your Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div>
          <label  htmlFor="mobileNumber">Number</label>
          <input className='number'
            type="Number"
            placeholder='Enter your Number'
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password</label>
          <input  className='password'
           placeholder='Enter your Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <button className='submitbtn' type="submit">Sign Up</button>
      </form>
      <p>if already logged in Go for <span className='atag-clr' onClick={(e)=>Navigate('/login')}>Login</span></p>
    </div>
  )

  }


export default SignUp
