import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogApi from "../../api/blogApi";
import "./Blogger.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import BackButton from "../backbutton/BackButton";

const BloggerPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const domain = savedUser?.domainName || "";
      const query = domain ? `?domain=${encodeURIComponent(domain)}` : "";

      const { data } = await blogApi.get(`/blogs/public${query}`);
      const blogList = Array.isArray(data) ? data : [];

      setBlogs(blogList);
      setFilteredBlogs(blogList);
    } catch (error) {
      console.error("Blog fetch error:", error);
      setBlogs([]);
      setFilteredBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredBlogs(blogs);
      return;
    }

    const lowerSearch = search.toLowerCase();

    const filtered = blogs.filter(
      (blog) =>
        blog.title?.toLowerCase().includes(lowerSearch) ||
        blog.excerpt?.toLowerCase().includes(lowerSearch) ||
        blog.domainName?.toLowerCase().includes(lowerSearch)
    );

    setFilteredBlogs(filtered);
  }, [search, blogs]);

  return (
    <>
      <Navbar />
      <BackButton />

      <section className="wm-blog-page">
        <div className="wm-blog-hero">
          <div className="wm-blog-hero-badge">WEBMARKS INSIGHTS</div>
          <h1>Latest Blogs & Marketing Insights</h1>
          <p>
            Explore professional insights, strategy articles, and knowledge-driven
            blogs dynamically published through your admin panel.
          </p>

          <div className="wm-blog-search-wrap">
            <input
              type="text"
              placeholder="Search blogs by title, excerpt or domain..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="wm-blog-container">
          {loading ? (
            <div className="wm-blog-empty">Loading blogs...</div>
          ) : filteredBlogs.length > 0 ? (
            <div className="wm-blog-grid">
              {filteredBlogs.map((blog) => (
                <article className="wm-blog-card" key={blog._id || blog.slug}>
                  <div className="wm-blog-card-top">
                    <span className="wm-blog-domain">{blog.domainName || "General"}</span>
                    <span className="wm-blog-date">
                      {blog.createdAt
                        ? new Date(blog.createdAt).toLocaleDateString()
                        : "No Date"}
                    </span>
                  </div>

                  <div className="wm-blog-card-body">
                    <h2>{blog.title || "Untitled Blog"}</h2>
                    <p>{blog.excerpt || "No excerpt available."}</p>
                  </div>

                  <div className="wm-blog-card-bottom">
                    <span className="wm-blog-source">
                      {blog.sourcePdfName || "Uploaded Blog"}
                    </span>

                    <Link
                      to={`/blogger/${blog.slug}`}
                      className="wm-blog-read-btn"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="wm-blog-empty">No blogs available right now.</div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BloggerPage;