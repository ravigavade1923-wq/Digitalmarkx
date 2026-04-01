import "./Services.css";
import { Link } from "react-router-dom";
import {
  FaPenNib,
  FaChartLine,
  FaCode,
  FaSearch,
  FaBullhorn,
  FaMobileAlt,
  FaShieldAlt,
  FaLightbulb,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";

import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import heroimg from "../../assets/service/heroimg.png";
import Achievements from "../achievments/Achievements";
import Testimonials from "../testimonial/Testimonials";
import BlogCTA from "../blog/BlogCTA";
import Footer from "../footer/Footer";
import BackButton from "../backbutton/BackButton";

const Services = () => {
  return (
    <>
      <BackButton />

      <Navbar />

      <section className="services-hero-banner">
        <div className="services-hero-bg">
          <img src={heroimg} alt="Business team meeting" />
          <div className="services-hero-overlay"></div>
        </div>

        <div className="services-hero-pattern">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="services-hero-content">
          <motion.div
            className="services-hero-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="hero-badge-dot"></span>
              OUR SERVICES
            </motion.div>

            <motion.h1
              className="services-hero-heading"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Stimulate <span>Business</span>
              <br />
              Evolution
            </motion.h1>

            <motion.p
              className="services-hero-text"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              We craft digital experiences that drive growth, engagement, and
              measurable results for your business.
            </motion.p>

            <motion.div
              className="services-hero-buttons"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <button className="hero-primary-btn">
                Get Free Consultation <span>🚀</span>
              </button>

              <button className="hero-secondary-btn">
                Explore Services <span>➜</span>
              </button>
            </motion.div>
          </motion.div>

          <div className="services-hero-right">
            <motion.div
              className="hero-feature-card card-secure"
              initial={{ opacity: 0, x: 50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="feature-icon red-icon">
                <FaShieldAlt />
              </div>
              <h3>Secure</h3>
              <p>Enterprise-grade data protection and privacy</p>
            </motion.div>

            <motion.div
              className="hero-feature-card card-innovative"
              initial={{ opacity: 0, x: 60, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.45, duration: 0.75 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="feature-icon blue-icon">
                <FaLightbulb />
              </div>
              <h3>Innovative</h3>
              <p>Cutting-edge solutions for your business</p>
            </motion.div>

            <motion.div
              className="hero-feature-card card-global"
              initial={{ opacity: 0, x: 50, y: 25 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="feature-icon blue-icon">
                <FaGlobe />
              </div>
              <h3>Global</h3>
              <p>Worldwide reach with localized expertise</p>
            </motion.div>

            <motion.div
              className="hero-feature-card card-fast"
              initial={{ opacity: 0, x: 60, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="feature-icon red-icon">
                <FaRocket />
              </div>
              <h3>Fast</h3>
              <p>Lightning-fast implementation and delivery</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="hero-scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span></span>
        </motion.div>
      </section>
      <div className="services-section">
        {/* HERO SECTION */}
        <section className="services-title">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our <span>Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Data-driven strategies that deliver{" "}
            <a href="#">measurable results</a>
          </motion.p>
        </section>

        {/* SERVICES SECTION */}
        <section className="services-section">
          <div className="services-grid">
            {/* CARD 1 */}
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <div className="icons">
                <FaPenNib />
              </div>
              <h3>Content Marketing</h3>
              <p>
                Engaging storytelling that builds brand awareness and fosters
                business growth
              </p>
              <ul>
                <li>Strategic Narratives</li>
                <li>Audience Engagement</li>
                <li>Conversion-Focused</li>
              </ul>
              <Link to="/services/content-marketing">
                <button>Explore Service →</button>
              </Link>
            </motion.div>

            {/* CARD 2 */}
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <div className="icons red">
                <FaChartLine />
              </div>
              <h3>Social Marketing</h3>
              <p>
                Amplify brand influence through engaging connections and
                powerful strategies
              </p>
              <ul>
                <li>Community Building</li>
                <li>Viral Campaigns</li>
                <li>Influencer Partnerships</li>
              </ul>
              <Link to="/services/social-media-marketing">
                <button className="dark-btn">Explore Service →</button>
              </Link>
            </motion.div>

            {/* CARD 3 */}
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <div className="icons">
                <FaCode />
              </div>
              <h3>Web Development</h3>
              <p>
                Crafting impactful websites with engaging design and powerful
                functionality
              </p>
              <ul>
                <li>Responsive Design</li>
                <li>Blazing Fast</li>
                <li>SEO-Ready</li>
              </ul>
              <Link to="/services/web-development">
                <button>Explore Service →</button>
              </Link>
            </motion.div>

            {/* CARD 4 */}
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <div className="icons red">
                <FaSearch />
              </div>
              <h3>SEO Optimization</h3>
              <p>
                Boosting online visibility with strategic tactics and keyword
                targeting
              </p>
              <ul>
                <li>Technical Audits</li>
                <li>Content Strategy</li>
                <li>Rank Tracking</li>
              </ul>
              <Link to="/services/seo-optimization">
                <button className="dark-btn">Explore Service →</button>
              </Link>
            </motion.div>

            {/* CARD 5 */}
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <div className="icons  ">
                <FaBullhorn />
              </div>
              <h3>PPC Advertising</h3>
              <p>
                Driving targeted traffic with strategic campaigns and powerful
                ad placements
              </p>
              <ul>
                <li>Google Ads</li>
                <li>Social Ads</li>
                <li>ROI Maximization</li>
              </ul>
              <Link to="/services/ppc-advertising">
                <button>Explore Service →</button>
              </Link>
            </motion.div>

            {/* CARD 6 */}
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <div className="icons red">
                <FaMobileAlt />
              </div>
              <h3>App Development</h3>
              <p>
                Creating impactful mobile solutions with powerful functionality
              </p>
              <ul>
                <li>iOS & Android</li>
                <li>Cross-Platform</li>
                <li>Performance Optimized</li>
              </ul>
              <Link to="/services/app-development">
                <button className="dark-btn">Explore Service →</button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-box">
            {/* floating shapes */}
            <div className="circle left"></div>
            <div className="circle right"></div>

            {/* rocket */}
            <div className="rocket">
              <img
                src="https://em-content.zobj.net/source/animated-noto-color-emoji/427/rocket_1f680.gif"
                alt=""
              />
            </div>

            <h2>Ready to launch your digital dominance?</h2>

            <p>
              Our team crafts custom solutions that drive{" "}
              <b>real business growth</b>
            </p>

            <Link to="/contact">
              {" "}
              <button className="cta-btn">Get Free Strategy Session</button>
            </Link>
          </div>
        </section>
      </div>
      <Achievements />

      <Testimonials />

      <BlogCTA />

      <Footer />
    </>
  );
};

export default Services;
