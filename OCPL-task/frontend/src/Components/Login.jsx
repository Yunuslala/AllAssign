import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const Navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
  

    try {
        e.preventDefault();
        console.log(formData);
     const response=await axios.post('http://localhost:5500/User/login', formData ,{
        headers: {
            'Content-Type': 'application/json',
          },
     })
     const data=response.data;
     Navigate('/')
     console.log(data)
     localStorage.setItem("UserToken",data.token)
    } catch (error) {
      if(error.response.status==400){
        alert(error.response.data.errors[0].msg)
      }
      console.error('Error:', error);
    }
  };

  return (
    <div className='login-page'>
      <h2 className='Signup-text'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
          className="email"
          placeholder='Enter your Email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div>
          <label>Password:</label>
          <input
          className='password'
          placeholder='Enter your Password'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        
        <button className='loginbtn' type="submit">Login</button>
      </form>
      <p>if Do not signup yet go for <span className='atag-clr' onClick={(e)=>Navigate('/SignUp')}>Signup</span></p>
    </div>
  );
};

export default Login;
