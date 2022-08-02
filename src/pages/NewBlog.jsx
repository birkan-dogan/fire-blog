import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { AddBlog } from "../helpers/firebase";
const initialValues = {
  title: "",
  imageUrl: "",
  content: "",
  currentUser: "",
};

const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const [blog, setBlog] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
      currentUser: currentUser.email,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(blog, navigate);
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div>
        <img src={blok} alt="newBlog" className="new-img" />
        <div className="new-container-big">
          <h1 className="new-blog text-center">── New Blog ──</h1>
        </div>
      </div>
      <form className="form-div" onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title:"
            value={blog.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="image">Image URL:</label>
          <br />
          <input
            type="url"
            name="imageUrl"
            id="image"
            placeholder="Image URL:"
            value={blog.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="content">Content:</label>
          <br />
          <textarea
            id="content"
            name="content"
            rows="5"
            cols="50"
            placeholder="Content"
            value={blog.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="btn text-white buton">Create Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;
