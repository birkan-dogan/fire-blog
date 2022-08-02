import React, { useContext } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
const BlogCard = ({ blog }) => {
  // console.log(blog);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { content, imageUrl, title, id } = blog;
  const handleBlog = () => {
    currentUser
      ? navigate(`details/${id}`, { state: blog })
      : navigate("/login");
  };
  return (
    <article className="blog-card" onClick={handleBlog}>
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <p>{content.slice(0, 100) + "..."}</p>
      </div>
      <div className="icon">
        <FaUserEdit />
        <p
          style={{
            display: "inline-block",
            marginLeft: ".5rem",
            fontSize: "1.1rem",
          }}
        >
          {blog.currentUser}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
