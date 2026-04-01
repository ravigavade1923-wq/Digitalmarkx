import React, { useState } from "react";
import "./blog.css";
import BlogCTA from "./BlogCTA";
import { Link } from "react-router-dom";
import blogs from "./blogData";


export default function BlogSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="blog-section">
      <h4 className="blog-small-title">Our Blogs</h4>

      <div className="blog-container">
        <h2 className="blog-title">Featured News and Insights</h2>
        <p className="blog-subtitle">
          Stay updated with the latest trends and insights in digital marketing.
        </p>

        <div className="blog-grid">
          {visibleBlogs.map((blog, index) => (
            <div
              className="blog-card-main"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* IMAGE */}
              <div className="blog-card-image">
                <img src={blog.img} alt={blog.title} />

                <span className="blog-card-category">{blog.category}</span>

                <span className="blog-card-time">{blog.time}</span>
              </div>

              {/* CONTENT */}
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span>📅 {blog.date}</span>
                  <span>👤 {blog.mark}</span>
                  <span>💬 {blog.comments}</span>
                </div>

                <h3>{blog.title}</h3>

                <p>{blog.desc}</p>

                <Link to={`/blog/${index}`} className="read-more">
                  Read Full Blog →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-toggle">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less⬆️" : "View More⬇️"}
          </button>
        </div>
      </div>
      <BlogCTA />
    </section>
  );
}
