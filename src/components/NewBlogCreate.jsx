import React, { useContext } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toastWarnNotify } from "../helpers/toastNotify";

const NewBlogCreate = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const handleBlog = () => {
    currentUser
      ? navigate("/newblog")
      : toastWarnNotify("Please Log in to write new blog");
  };
  return (
    <nav>
      <div
        className="d-flex flex-column align-items-center text-white new "
        style={{ cursor: "pointer" }}
        onClick={handleBlog}
      >
        <HiOutlinePencilAlt style={{ transform: "scale(2)" }} />
        <div className="mt-3">New Blog</div>
      </div>
    </nav>
  );
};

export default NewBlogCreate;
