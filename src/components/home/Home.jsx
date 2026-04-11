import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../navbar/Navbar";
import emailjs from "@emailjs/browser";
import contactApi from "../../api/contactApi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

import {
  FaPenNib,
  FaChartLine,
  FaCode,
  FaSearch,
  FaBullhorn,
  FaMobileAlt,
} from "react-icons/fa";
import BenefitsSection from "../benefits/BenefitsSection";
import Achievements from "../achievments/Achievements";
import Testimonials from "../testimonial/Testimonials";
import { Link } from "react-router-dom";

const Home = () => {
  const sectionRef = useRef(null);

  const [showLeadModal, setShowLeadModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
  });


  useEffect(() => {
  const timer = setTimeout(() => {
    setShowLeadModal(true);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const cleanups = [];

    if (window.innerWidth > 991) {
      cards.forEach((card) => {
        let frameId = null;

        const handleMouseMove = (e) => {
          if (frameId) cancelAnimationFrame(frameId);

          frameId = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 16;
            const rotateY = (x - rect.width / 2) / 16;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
          });
        };

        const handleMouseLeave = () => {
          if (frameId) cancelAnimationFrame(frameId);
          card.style.transform = "rotateX(0) rotateY(0) scale(1)";
        };

        card.addEventListener("mousemove", handleMouseMove, { passive: true });
        card.addEventListener("mouseleave", handleMouseLeave);

        cleanups.push(() => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        });
      });
    }

    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;

    if (el) {
      gsap.fromTo(
        el.querySelector(".about-title"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        el.querySelector(".about-image"),
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        el.querySelector(".about-content"),
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        el.querySelectorAll(".card"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            once: true,
          },
        },
      );
    }

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showLeadModal ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLeadModal]);

  useEffect(() => {
    const card = document.querySelector(".wm-lead-form-card");
    if (!card || window.innerWidth <= 768) return;

    let frameId = null;

    const handleMove = (e) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / rect.height) * -4;
        const rotateY = ((x - rect.width / 2) / rect.width) * 4;

        card.style.transform = `
        perspective(1600px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-4px)
      `;
      });
    };

    const resetMove = () => {
      if (frameId) cancelAnimationFrame(frameId);
      card.style.transform =
        "perspective(1600px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    };

    card.addEventListener("mousemove", handleMove, { passive: true });
    card.addEventListener("mouseleave", resetMove);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", resetMove);
    };
  }, [showLeadModal]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeLeadModal = () => {
    setShowLeadModal(false);
    document.body.style.overflow = "auto";
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await contactApi.post("/", {
        firstName: formData.fullName?.trim(),
        lastName: "-",
        company: formData.companyName?.trim() || "",
        email: formData.email?.trim(),
        phone: formData.phone?.trim(),
        service: "General Enquiry",
        message: `Homepage enquiry submitted by ${formData.fullName}.`,
        privacy: "Accepted",
        source: "Homepage Enquiry Popup",
      });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          phone_number: formData.phone,
          user_email: formData.email,
          company_name: formData.companyName,
          submitted_from: "Home Page Premium Lead Form",
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitMessage("Form submitted successfully.");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        companyName: "",
      });

      setTimeout(() => {
        closeLeadModal();
      }, 1200);
    } catch (error) {
      console.error("Lead form error:", error);
      setSubmitMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {showLeadModal && (
        <div className="wm-lead-overlay">
          <div className="wm-lead-modal">
            <div className="wm-lead-content single-form-layout">
              <div className="wm-lead-form-card">
                <div className="form-orb-1"></div>
                <div className="form-orb-2"></div>

                <div className="wm-top-tabs">
                  <button type="button" className="wm-tab active">
                    Enquiry
                  </button>
                </div>

                <h3>Contact Us</h3>
                <p className="wm-form-subtitle">
                  Please enter your details. We&apos;ll contact you shortly.
                </p>

                <form onSubmit={handleLeadSubmit} className="wm-lead-form">
                  <div className="wm-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="wm-field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="wm-field">
                    <label>Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your mobile number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="wm-field">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {submitMessage && (
                    <p className="wm-submit-message">{submitMessage}</p>
                  )}

                  <div className="wm-lead-actions">
                    <button
                      type="button"
                      className="wm-lead-cancel"
                      onClick={closeLeadModal}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="wm-lead-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="lefthero">
        <div className="hero-left premium-3d">
          <div className="hero-bg-blur blur-one"></div>
          <div className="hero-bg-blur blur-two"></div>
          <div className="hero-bg-blur blur-three"></div>

          <div className="hero-light-ray"></div>
          <div className="hero-noise"></div>
          <div className="hero-reflection"></div>

          <div className="floating-glass glass-one"></div>
          <div className="floating-glass glass-two"></div>

          <div className="badge-container">
            <span className="badge move">
              <span className="badge-dot"></span>
              DIGITAL MARKETING EXCELLENCE
            </span>
          </div>

          <div className="title-stack">
            <p className="hero-kicker">NEXT-GEN GROWTH STRATEGIES</p>

            <h1 className="hero-title">
              <span className="line line-one">TRANSFORMING</span>
              <span className="line line-two">DIGITAL</span>
              <span className="line line-three">LANDSCAPES</span>
            </h1>

            <span className="title-outline">WEBMARKX</span>
          </div>

          <p className="hero-description">
            Welcome to <b>WEBMARKX</b>, where data-driven strategies meet
            creativity to fuel your business success.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <h4>360°</h4>
              <span>Brand Strategy</span>
            </div>
            <div className="stat-card">
              <h4>3D</h4>
              <span>Visual Identity</span>
            </div>
            <div className="stat-card">
              <h4>ROI+</h4>
              <span>Performance</span>
            </div>
          </div>

          <div className="btn-group">

              <button
    className="primary-btn"
    onClick={() => setShowLeadModal(true)}
  >
    <span className="btn-shine"></span>
    <span>Enquiry Form</span>
  </button>
            <Link to="/contact">
              <button className="primary-btn">
                <span className="btn-shine"></span>
                <span>Get Started 🚀</span>
              </button>
            </Link>

            <Link to="/services">
              <button className="secondary-btn">
                <span className="btn-shine"></span>
                <span>▶ Our Services</span>
              </button>
            </Link>
          </div>
        </div>

        <section className="hero">
          <div className="hero-right">
            <div className="main-circle">
              <div className="growth-card">
                📈85% <br />
                <span>Sales Growth</span>
              </div>

              <div className="orbit">
                <div className="icon i1">
                  <IoLogoYoutube />
                </div>
                <div className="icon i2">
                  <FaWhatsapp />
                </div>
                <div className="icon i3">
                  <FaFacebookF />
                </div>
                <div className="icon i4">
                  <FaInstagram />
                </div>
                <div className="icon i5">
                  <FaXTwitter />
                </div>
                <div className="icon i6">
                  <FaLinkedinIn />
                </div>
              </div>

              <div className="image-circle">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=75"
                  alt="team"
                  width="900"
                  height="900"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="brand">
                💹190+ <br />
                <span>Brands Joined</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="about-section" ref={sectionRef}>
        <h2 className="about-title">
          TRANSFORMING <span>BUSINESSES</span>
        </h2>

        <p className="about-subtitle">
          With Innovative Digital Marketing Solutions
        </p>

        <div className="about-container">
          <div className="about-image">
            <img
              src=" https://i.pinimg.com/736x/7e/6f/e3/7e6fe3488b60391e6c9f8b3d7ba382f9.jpg"
              alt="team"
              width="900"
              height="1000"
              loading="lazy"
              decoding="async"
            />

            <div className="overlay">
              <h3>Our Passionate Team</h3>
              <p>Driving your digital success</p>
            </div>
          </div>

          <div className="about-content">
            <h3>
              At <span>WebMarkx</span>, we are passionate about growth
            </h3>

            <p>
              We specialize in crafting digital experiences that drive results.
              Our team of experts combines creativity with data-driven
              strategies to deliver measurable impact for your business.
            </p>

            <div className="features">
              <div className="feature">
                <div className="icon-box blue">
                  <img
                    src="https://img.icons8.com/?size=100&id=5NjoP1iD5kon&format=png&color=228BE6"
                    alt="Strategic Growth Icon"
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div>
                  <h4>Strategic Growth</h4>
                  <p>
                    Customized marketing strategies tailored to your unique
                    business needs and goals.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="icon-box red">💡</div>

                <div>
                  <h4>Innovative Solutions</h4>
                  <p>
                    Cutting-edge digital marketing techniques that keep you
                    ahead of the competition.
                  </p>
                </div>
              </div>
            </div>

            <div className="stats">
              <div className="card">
                <div className="card-icon">👥</div>
                <h3>200+</h3>
                <p>Clients Served</p>
              </div>

              <div className="card">
                <div className="card-icon">📈</div>
                <h3>95%</h3>
                <p>Client Retention</p>
              </div>

              <div className="card">
                <div className="card-icon">🚀</div>
                <h3>50+</h3>
                <p>Campaigns</p>
              </div>

              <div className="card">
                <div className="card-icon">💡</div>
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/About">
          <button className="about-btn">Read More About Us →</button>
        </Link>
      </section>

      <section className="services-section">
        <h2 className="services-title">
          Our <span>Services</span>
        </h2>

        <p className="services-sub">
          Data-driven strategies that deliver measurable results
        </p>

        <div className="services-grid">
          <div className="service-card">
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
          </div>

          <div className="service-card">
            <div className="icons red " style={{ background: "red" }}>
              <FaChartLine />
            </div>
            <h3>Social Marketing</h3>
            <p>
              Amplify brand influence through engaging connections and powerful
              strategies
            </p>

            <ul>
              <li>Community Building</li>
              <li>Viral Campaigns</li>
              <li>Influencer Partnerships</li>
            </ul>

            <Link to="/services/social-marketing">
              <button style={{ background: "rgb(21, 1, 108)" }}>
                Explore Service →
              </button>
            </Link>
          </div>

          <div className="service-card">
            <div className="icons ">
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
          </div>

          <div className="service-card">
            <div className="icons" style={{ background: "red" }}>
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
              <button style={{ background: "#0a0268" }}>
                Explore Service →
              </button>
            </Link>
          </div>

          <div className="service-card">
            <div className="icons red">
              <FaBullhorn />
            </div>
            <h3>PPC Advertising</h3>
            <p>
              Driving targeted traffic with strategic campaigns and powerful ad
              placements
            </p>

            <ul>
              <li>Google Ads</li>
              <li>Social Ads</li>
              <li>ROI Maximization</li>
            </ul>

            <Link to="/services/ppc-advertising">
              <button>Explore Service →</button>
            </Link>
          </div>

          <div className="service-card">
            <div className="icons" style={{ background: "red" }}>
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
              <button style={{ background: "#2F2D73" }}>
                Explore Service →
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <div className="circle left"></div>
          <div className="circle right"></div>

          <div className="rocket">
            <img
              src="https://em-content.zobj.net/source/animated-noto-color-emoji/427/rocket_1f680.gif"
              alt="Rocket"
              width="120"
              height="120"
              loading="lazy"
              decoding="async"
            />
          </div>

          <h2>Ready to launch your digital dominance?</h2>

          <p>
            Our team crafts custom solutions that drive{" "}
            <b>real business growth</b>
          </p>

          <Link to="/contact">
            <button className="cta-btn">Get Free Strategy Session</button>
          </Link>
        </div>
      </section>

      <BenefitsSection />
      <Achievements />
      <Testimonials />
    </>
  );
};

export default Home;
