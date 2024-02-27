import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setgender] = useState('');
  const [role, setrole] = useState('');
  const [name, setname] = useState('');

  const handleSignup = () => {
    // Make API call to register the user with 'email' and 'password'
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
      <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
           value={gender}
          onchange={(e)=>setgender(e.target.value)}
          >
           <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Role:</label>
          <select 
          value={role}
          onchange={(e)=>setrole(e.target.value)}
          >
           <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="author">Author</option>

          </select>
        </div>
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
