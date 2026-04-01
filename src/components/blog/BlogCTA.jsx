import "./BlogCTA.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Users, BarChart3, Star, ArrowRight } from "lucide-react";
import Footer from "../footer/Footer";



const BlogCTA = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed Email:", email); // 👈 console madhe disel

    setSuccess(true);
    setEmail("");

    // optional: 3 sec nantar message hide
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="blog-cta-section">
      <div className="blog-cta-container">

        {/* LEFT */}
        <div className="blog-cta-left">
          <div className="blog-cta-badge">
            <Mail size={16} />
            <span>Join Our Community</span>
          </div>

          <h2>Transform Your Marketing Strategy</h2>

          <p>
            Get actionable insights, exclusive content, and expert tips
            delivered weekly to your inbox.
          </p>

          <form className="blog-cta-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="blog-cta-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="blog-cta-btn">
              Subscribe Now
              <ArrowRight size={18} />
            </button>
          </form>

          {/* ✅ SUCCESS MESSAGE */}
          {success && (
            <motion.div
              className="success-msg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ Subscription Successful!
            </motion.div>
          )}

          <span className="blog-cta-note">
            We respect your privacy. Unsubscribe anytime.
          </span>
        </div>

        {/* RIGHT SIDE same as before */}
        <div className="blog-cta-right">
          <div className="mini-stat-card">
            <div className="mini-icon purple">
              <Users size={24} />
            </div>
            <h3>3,500+</h3>
            <h4>Community</h4>
            <p>Marketing professionals</p>
          </div>

          <div className="mini-stat-card">
            <div className="mini-icon red">
              <BarChart3 size={24} />
            </div>
            <h3>98%</h3>
            <h4>Open Rate</h4>
            <p>Industry leading</p>
          </div>

          <div className="premium-card">
            <div className="mini-icon soft-red">
              <Star size={24} />
            </div>
            <div>
              <h4>Premium Content</h4>
              <p>Exclusive resources for subscribers</p>
            </div>
          </div>
        </div>
      </div>

               

    </section>
    
  );
};

export default BlogCTA;