import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { AddBlog } from "../helpers/firebase";
import "../components/newBlog/newBlog.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const initialValues = {
  title: "",
  imageUrl: "",
  content: "",
  currentUser: "",
  like: false,
  likeNumber: 0,
};

const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const [blog, setBlog] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(blog);
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
    // <div className="d-flex justify-content-center flex-column align-items-center">
    //   <div>
    //     <img src={blok} alt="newBlog" className="new-img" />
    //     <div className="new-container-big">
    //       <h1 className="new-blog text-center">── New Blog ──</h1>
    //     </div>
    //   </div>
    //   <form className="form-div" onSubmit={handleSubmit}>
    //     <div className="form">
    //       <label htmlFor="title">Title:</label>
    //       <br />
    //       <input
    //         type="text"
    //         name="title"
    //         id="title"
    //         placeholder="Title:"
    //         value={blog.title}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="form">
    //       <label htmlFor="image">Image URL:</label>
    //       <br />
    //       <input
    //         type="url"
    //         name="imageUrl"
    //         id="image"
    //         placeholder="Image URL:"
    //         value={blog.imageUrl}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="form">
    //       <label htmlFor="content">Content:</label>
    //       <br />
    //       <textarea
    //         id="content"
    //         name="content"
    //         rows="5"
    //         cols="50"
    //         placeholder="Content"
    //         value={blog.content}
    //         onChange={handleChange}
    //         required
    //       ></textarea>
    //     </div>
    //     <button className="btn text-white buton">Create Blog</button>
    //   </form>
    // </div>
    <div className="add">
      <div className="new-blog">
        <div className="content">
          <input type="text" placeholder="Title" />
          <div className="editorContainer">
            <ReactQuill
              theme="snow"
              value={blog.content}
              onChange={handleChange}
              className="editor"
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <div className="buttons">
              <button>Save as a draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="science" id="science" />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="technology"
                id="technology"
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="design" id="design" />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="movie" id="movie" />
              <label htmlFor="movie">Movie</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="sports" id="sports" />
              <label htmlFor="sports">Sports</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
