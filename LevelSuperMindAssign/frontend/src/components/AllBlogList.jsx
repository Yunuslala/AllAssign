import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';

const AllBlogList = () => {
  // const { blogs, loading } = useContext(AuthContext);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>All Blogs</h1>
      {/* {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))} */}
    </div>
  );
};

export default AllBlogList;
