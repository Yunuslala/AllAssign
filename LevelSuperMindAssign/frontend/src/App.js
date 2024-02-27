import React, { useContext, } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import  AuthContextProvider from './Context/AuthContextProvider';

import Home from './Pages/Home';
import BlogDetails from './Pages/BlogDetails';
import CreateBlogPage from './Pages/CreatedBlog';
import ProfilePage from './Pages/ProfilePage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import { AuthContext } from './Context/AuthContextProvider';



const App = () => {

  // const Navigate=useNavigate()
 
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />

              <Route path="/" element={<Home />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="/create" element={<CreateBlogPage />} />
              <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );

};


export default App;
