import React, { useContext } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const NewBlogCreate = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const handleBlog = () => {
    currentUser ? navigate("/newblog") : navigate("/login");
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
