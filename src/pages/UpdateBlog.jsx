import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { updateBlog } from "../helpers/firebase";
import { toastSuccessNotify } from "../helpers/toastNotify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
  };

  const handleQuillEdit = (value) => {
    const updatedPost = blog?.map((post) => {
      return { ...post, content: value };
    });
    setBlog(updatedPost);
  };

  // console.log(blog);

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(blog);
    updateBlog(blog[0]);
    navigate("/");
    toastSuccessNotify("Blog is updated");
  };

  return (
    <div className="add">
      {blog?.map(function (item) {
        const { title, imageUrl, content } = item;

        return (
          <div className="new-blog" key={item.id}>
            <form onSubmit={handleUpdate} className="content">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
                required
              />
              <input
                type="url"
                placeholder="Image Url"
                name="imageUrl"
                value={imageUrl}
                onChange={handleChange}
                required
              />
              <div className="editorContainer">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={handleQuillEdit}
                  className="editor"
                  required
                />
              </div>
              <div className="buttons">
                <button>Save as a draft</button>
                <button>Update</button>
              </div>
            </form>

            <div className="menu">
              <div className="item">
                <h1>Publish</h1>
                <span>
                  <b>Status: </b> Draft
                </span>
                <span>
                  <b>Visibility: </b> Public
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpdateBlog;
