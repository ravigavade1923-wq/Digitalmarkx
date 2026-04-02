import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogApi from "../../api/blogApi";
import "./Blogger.css";
import BackButton from "../backbutton/BackButton";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const BloggerSingle = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSingleBlog = async () => {
    try {
      const { data } = await blogApi.get(`/blogs/public/${slug}`);
      setBlog(data);
    } catch (error) {
      console.error("Single blog fetch error:", error);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  }, [slug]);

  const getPdfUrl = (pdfUrl) => {
    if (!pdfUrl) return "";

    if (pdfUrl.startsWith("http://") || pdfUrl.startsWith("https://")) {
      return pdfUrl;
    }

    const apiBase = import.meta.env.VITE_API_URL || "";
    const serverBase = apiBase.replace(/\/api\/?$/, "");

    return `${serverBase}${pdfUrl}`;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="wm-blog-detail-page">
          <div className="wm-blog-detail-shell">Loading blog...</div>
        </section>
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <section className="wm-blog-detail-page">
          <div className="wm-blog-detail-shell">Blog not found.</div>
        </section>
      </>
    );
  }

  const pdfFullUrl = getPdfUrl(blog.pdfUrl);

  return (
    <>
      <Navbar />
      <BackButton />

      <section className="wm-blog-detail-page">
        <div className="wm-blog-detail-shell">
          <Link to="/blogger" className="wm-blog-back-btn">
            ← Back to Blogs
          </Link>

          <article className="wm-blog-article">
            <div className="wm-blog-article-meta">
              <span>{blog.domainName || "General"}</span>
              <span>
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString()
                  : "No Date"}
              </span>
              <span>{blog.sourcePdfName || "Uploaded Blog"}</span>
            </div>

            <h1>{blog.title || "Untitled Blog"}</h1>

            {blog.excerpt && (
              <p className="wm-blog-article-excerpt">{blog.excerpt}</p>
            )}

            <div className="wm-blog-article-content">
              {blog.content || "No content available."}
            </div>

            {pdfFullUrl && (
              <div className="wm-blog-pdf-section">
                <div className="wm-blog-pdf-header">
                  <h3>Blog PDF Preview</h3>
                  <a
                    href={pdfFullUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="wm-blog-pdf-btn"
                  >
                    Open Full PDF
                  </a>
                </div>

                <iframe
                  src={pdfFullUrl}
                  title={blog.title || "Blog PDF"}
                  className="wm-blog-pdf-frame"
                />
              </div>
            )}
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BloggerSingle;
