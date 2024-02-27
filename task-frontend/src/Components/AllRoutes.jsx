import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import Landing from './Landing';
import Login from './Login';
import TaskList from './TaskList';
import Edit from './Edit';
import NavBar from './NavBar';

const AllRoutes = () => {
  const [clickFor,setclickFor]=useState(false);

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Task" element={<TaskList />} />
          <Route path="/edit/:taskId" element={<Edit />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default AllRoutes;
