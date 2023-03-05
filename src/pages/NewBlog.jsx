import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { AddBlog } from "../helpers/firebase";
import "../components/newBlog/newBlog.css";
import NewUpdateBlog from "../components/newBlog/NewUpdateBlog";

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

  const handleQuillEdit = (value) => {
    setBlog({
      ...blog,
      content: value,
    });
  };

  const props = {
    handleSubmit,
    blog,
    handleChange,
    handleQuillEdit,
  };

  return (
    <div className="add">
      <NewUpdateBlog {...props} />
    </div>
  );
};

export default NewBlog;
