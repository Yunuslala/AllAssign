import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { BlogContext } from '../context/BlogContext';

const Blog = () => {
  const { id } = useParams();
  // const { blogs } = useContext(BlogContext);
  // const blog = blogs.find((blog) => blog.id === id);

  // if (!blog) {
  //   return <div>Blog not found</div>;
  // }

  return (
    <div>
      <h1>{"blog.title"}</h1>
      <p>{"blog.content"}</p>
      {/* Display comments here */}
    </div>
  );
};

export default Blog;
