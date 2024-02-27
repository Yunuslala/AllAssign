import React, { useState, useContext } from 'react';


const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setdescription] = useState('');

  // const history = useHistory();
  // const { createBlog } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      content,
    };
    // createBlog(newBlog);
    // history.push('/');
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
