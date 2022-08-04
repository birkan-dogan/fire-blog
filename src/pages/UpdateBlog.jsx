import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { updateBlog } from "../helpers/firebase";
import { toastSuccessNotify } from "../helpers/toastNotify";

const UpdateBlog = () => {
  const { currentBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const updating = () => {
    const filtered = currentBlog.filter((item) => item.id == id);
    setBlog(filtered);
  };

  useEffect(() => {
    updating();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const updateBlog = blog?.map((item) => {
      return { ...item, [name]: value, currentUser: currentUser.email };
    });
    setBlog(updateBlog);
    toastSuccessNotify("Blog is updated");
  };

  // console.log(blog);

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(blog);
    updateBlog(blog[0]);
    navigate("/");
  };
  return (
    <div>
      {blog?.map((item) => {
        const { title, imageUrl, content } = item;
        return (
          <div
            className="d-flex justify-content-center flex-column align-items-center"
            key={item.id}
          >
            <div>
              <img src={blok} alt="newBlog" className="new-img" />
              <div className="new-container-big">
                <div className="new-container"></div>
                <h1 className="new-blog text-center">Update Blog</h1>
                <div className="new-container"></div>
              </div>
            </div>
            <form className="form-div" onSubmit={handleUpdate}>
              <div className="form">
                <label htmlFor="title">Title:</label>
                <br />
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title:"
                  value={title}
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
                  value={imageUrl}
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
                  value={content}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button className="btn text-white buton">Update Blog</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default UpdateBlog;
