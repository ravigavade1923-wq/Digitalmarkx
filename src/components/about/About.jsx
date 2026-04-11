import { useState } from "react";
import ProcessSection from "../contact/ProcessSection";
import WhyChooseSection from "../contact/WhyChooseSection";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Achievements from "../achievments/Achievements";
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "../testimonial/Testimonials";
import BlogCTA from "../blog/BlogCTA";
import BackButton from "../backbutton/BackButton";

const cards = [
  {
    title: "Who Are We",
    desc: "We are WebMarkx, a passionate team of digital marketing experts driving brands to success with innovative strategies.",
    img: "https://i.pinimg.com/1200x/c5/7b/3b/c57b3b36d4c0b5dfb6af7e9b536ceca7.jpg",
    color: "purple",
  },
  {
    title: "Our Mission",
    desc: "Empowering brands with innovative digital solutions for success. Building meaningful connections in the online world.",
    img: "https://i.pinimg.com/1200x/cc/1d/e5/cc1de5f5e05d74a5508ccfc1005d13eb.jpg",
    color: "red",
  },
  {
    title: "What We Do",
    desc: "• Digital Marketing Excellence\n• Creative Web Development\n• Powerful PPC Advertising\n• Engaging Content Creation\n• SEO Optimization\n• Tech Support",
    img: "https://i.pinimg.com/1200x/9a/46/a7/9a46a71b52cadaa0e101e1317e03874d.jpg",
    color: "dark",
  },
];

const faqData = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We provide comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, email marketing, and more to help your business grow online.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Typically, you may start seeing initial results in 3-6 months, with more significant improvements appearing after 6-12 months of consistent optimization.",
  },
  {
    question: "Do you offer custom web development solutions?",
    answer:
      "Yes, we specialize in custom web development tailored to your business needs, including responsive design, e-commerce solutions, and CMS development.",
  },
  {
    question: "What's included in your monthly maintenance plans?",
    answer:
      "Our maintenance plans include regular updates, security monitoring, performance optimization, backups, and technical support to keep your website running smoothly.",
  },
  {
    question: "Can you help with branding and design?",
    answer:
      "Absolutely! We offer complete branding solutions including logo design, brand identity creation, UI/UX design, and visual storytelling to make your business stand out.",
  },
  {
    question: "Do you provide analytics and reporting?",
    answer:
      "Yes, we provide detailed analytics and performance reports to track progress, measure ROI, and continuously optimize your campaigns for maximum results.",
  },
];

const services = [
  "Select a Service",
  "SEO Optimization",
  "Social Media Marketing",
  "Web Development",
  "E-Commerce Solution",
  "Ui/Ux Design",
  "PPC Advertising",
  "Content Marketing",
  "Email Marketing",
  "Branding & Design",
  "Technical Support",
  "Digital Strategy Consulting",
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "Select a Service",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted Data:", formData);

    setSuccessMessage("Message sent successfully!");

    setFormData({
      fullName: "",
      email: "",
      service: "Select a Service",
      message: "",
    });

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <>
      <BackButton />
      <Navbar />
      <section className="about-hero-section">
        <div className="about-hero-container">
          {/* LEFT CONTENT */}
          <motion.div
            className="about-hero-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.span
              className="about-badge"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Web Marketing Xperts
            </motion.span>

            <motion.h1
              className="about-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Let's Elevate <br />
              <span>Your Digital Presence</span>
            </motion.h1>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              viewport={{ once: true }}
            >
              At <b>WEBMARKX</b>, we are a passionate team of digital marketing
              experts, dedicated to elevating your brand’s visibility with
              creative strategies, impactful campaigns, and measurable growth.
            </motion.p>

            <motion.div
              className="about-btn-group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <a href="/contact" className="primari-btn">
                Start Your Project <span>→</span>
              </a>

              <a href="/services" className="secondari-btn">
                Explore Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="about-hero-right"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1400&auto=format&fit=crop"
                alt="Digital marketing team"
              />

              <div className="image-overlay"></div>

              <motion.div
                className="floating-card"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="dot"></span>
                Available for projects
              </motion.div>

              <motion.div
                className="glow-circle glow-one"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="glow-circle glow-two"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="identity-section">
        <motion.h2
          className="identity-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Identity
        </motion.h2>

        <div className="identity-grid">
          {cards.map((card, index) => (
            <motion.div
              className={`identity-card ${card.color}`}
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
              }}
            >
              <div className="card-bg">
                <img
                  src={`${card.img}?q=70&w=900&auto=format`}
                  alt={card.title}
                  width="900"
                  height="700"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="card-overlay"></div>

              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>

                <button>Learn more</button>
              </div>

              {/* ✨ floating glow animation */}
              <motion.div
                className="card-glow"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        <ProcessSection />

        <WhyChooseSection />

        <section className="faq-contact-section">
          <div className="faq-contact-container">
            {/* LEFT FAQ */}
            <motion.div
              className="faq-left"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="faq-heading"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="faq-list">
                {faqData.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <motion.div
                      key={index}
                      className={`faq-card ${isActive ? "active" : ""}`}
                      initial={{ opacity: 0, y: 45 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleFAQ(index)}
                        type="button"
                      >
                        <span>{item.question}</span>
                        <motion.span
                          className="faq-icon"
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ⌃
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            className="faq-answer-wrap"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                          >
                            <div className="faq-answer">
                              <p>{item.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              className="faq-right"
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="contact-box">
                <motion.h2
                  className="contact-title"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Get In Touch
                </motion.h2>

                <motion.p
                  className="contact-subtitle"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Have questions about our services? Fill out the form below and
                  our team will get back to you within 24 hours.
                </motion.p>

                <form className="contact-form-box" onSubmit={handleSubmit}>
                  <motion.div
                    className="input-group"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 }}
                    viewport={{ once: true }}
                  >
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="input-group"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <span className="input-icon">✉</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="input-group"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.45 }}
                    viewport={{ once: true }}
                  >
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div
                    className="input-group textarea-group"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.55 }}
                    viewport={{ once: true }}
                  >
                    <span className="input-icon textarea-icon">💬</span>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="sent-btn"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>

                  <AnimatePresence>
                    {successMessage && (
                      <motion.p
                        className="success-message"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.35 }}
                      >
                        {successMessage}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </section>
      <Achievements />

      <Testimonials />

      <BlogCTA />

      <Footer />
    </>
  );
};

export default AboutPage;
