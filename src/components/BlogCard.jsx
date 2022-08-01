import React from "react";

const BlogCard = ({ blog }) => {
  console.log(blog);
  const { content, imageUrl, title } = blog;
  return (
    <article className="blog-card">
      <img src={imageUrl} alt={title} />
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  );
};

export default BlogCard;
