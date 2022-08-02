import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useFetch } from "../helpers/firebase";
import loading from "../assets/loading.gif";

const Details = () => {
  const [filtered, setFiltered] = useState();
  // const { isLoading, blogList } = useFetch();

  // const { id } = useParams();
  const location = useLocation();
  const blog = location.state;

  return (
    <div className="details">
      <h1>──── Details ────</h1>
      <div className="details-content">
        <img src={blog.imageUrl} alt={blog.title} />
        <h3>{blog.title.toUpperCase()}</h3>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default Details;
