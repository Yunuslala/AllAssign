import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [qty,setqtv]=useState("");
const [ltr,setltr]=useState("");
const [price,setprice]=useState("");
const [present,setPresent]=useState("")

  const handleLogin = () => {
    // Make API call to authenticate the user with 'email' and 'password'
   let ans=(qty*ltr*price/60);
   setPresent(ans);
   console.log(ans)
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="email"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <div>
          <label>ltr:</label>
          <input
            type="number"
            value={ltr}
            onChange={(e) => setltr(e.target.value)}
          />
        </div>
        <div>
          <label>qty:</label>
          <input
            type="number"
            value={qty}
            onChange={(e) => setqtv(e.target.value)}
          />
        </div>
      
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div>{present}</div>
    </div>
  );
};

export default LoginForm;
