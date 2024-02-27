// context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(["true"]);

  const signup = (email, password) => {
   
  };

  const login = (email, password) => {
   
  };

  const logout = () => {
    
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider 
