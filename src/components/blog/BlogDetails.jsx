import "./BlogDetails.css";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// 👇 tujhya blog data import kar
import blogs from "./blogData"; // path adjust kar
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs[id];

  if (!blog) {
    return <h2 style={{ padding: "100px" }}>Blog not found</h2>;
  }

  return (
    <>
    <Navbar/>
      <section className="blog-details">
        {/* HERO */}
        <div className="blog-hero">
          <img src={blog.img} alt={blog.title} />
          <div className="overlay"></div>

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="category">{blog.category}</span>
            <h1>{blog.title}</h1>
            <p>
              {blog.date} • {blog.time}
            </p>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="blog-content">
          <motion.div
            className="content-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>Introduction</h2>
            <p>{blog.desc}</p>

            <h2>Key Insights</h2>
            <p>
              In today’s competitive digital world, businesses must adopt modern
              strategies to stay ahead. This blog explains actionable steps to
              improve engagement, visibility, and conversions.
            </p>

            <h2>Why It Matters</h2>
            <p>
              Strong marketing strategies help brands grow faster, build trust,
              and generate long-term success in the digital ecosystem.
            </p>

            <h2>Conclusion</h2>
            <p>
              By implementing the right techniques, you can transform your
              business and achieve scalable growth.
            </p>

            <Link to="/" className="back-btn">
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;
