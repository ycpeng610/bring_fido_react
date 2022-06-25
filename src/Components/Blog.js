import React from "react";
import "../Styles/Blog.css";

const Blog = ({ items }) => {
  return (
    <section className="third ctr">
      <h3>LATEST FROM THE BLOG</h3>
      <div className="gridcontainer">
        {items.map((blog) => {
          const { id, title, img, link } = blog;
          return (
            <a href={link}>
              <img src={img} alt={title} />
              <div className="articleTitle_title">
                <span>{title}</span>
              </div>
            </a>
          );
        })}
      </div>
      <div className="seeMore">
        <button type="submit">See More Posts</button>
      </div>
    </section>
  );
};

export default Blog;
