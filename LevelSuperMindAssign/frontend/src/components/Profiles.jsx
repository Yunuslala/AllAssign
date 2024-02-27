import React, { useContext } from 'react';
// import { BlogContext } from '../context/BlogContext';

const Profile = () => {
  // const { userBlogs } = useContext(BlogContext);

  return (
    <div>
      <h1>Your Profile</h1>
      <h2>Your Blogs</h2>
      {/* {userBlogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          {}
        </div>
      ))} */}
    </div>
  );
};

export default Profile;
