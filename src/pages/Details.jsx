import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import loading from "../assets/loading.gif";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { DeleteBlog } from "../helpers/firebase";
import UpdateBlog from "./UpdateBlog";

const Details = () => {
  const [blog, setBlog] = useState();
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const { currentBlog, isLoading } = useContext(BlogContext);
  // console.log(currentUser);
  const navigate = useNavigate();
  const getData = () => {
    setBlog(currentBlog.filter((item) => item.id === id));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(blog);
  // console.log(blog[0]?.currentUser);
  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <div className="details">
          <h1>──── Details ────</h1>
          {blog?.map((item) => {
            return (
              <div className="details-content" key={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
      )}
      {blog?.map(
        (item) =>
          item.currentUser === currentUser.email && (
            <div
              className="d-flex mb-5 gap-5 justify-content-center details-button"
              key={item.id}
            >
              <button
                className="btn text-white"
                onClick={() => navigate(`/updateBlog/${id}`)}
              >
                Update Blog
              </button>
              <button
                className="btn bg-danger text-white"
                onClick={() => DeleteBlog(item.id, navigate)}
              >
                Delete Blog
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default Details;
