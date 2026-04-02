import "./Contact.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import contactImg from "../../assets/contact/contact-office.jpg";
import ProcessSection from "./ProcessSection";
import WhyChooseSection from "./WhyChooseSection";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import BackButton from "../backbutton/BackButton";

import contactApi from "../../api/contactApi";
import axios from "axios";

const contactItems = [
  {
    icon: <MapPin size={18} />,
    title: "Our Address",
    text: "Sheikh Zayed Road\nDubai, UAE",
  },
  {
    icon: <Phone size={18} />,
    title: "Phone Number",
    text: "+971 50 576 1914",
  },
  {
    icon: <Mail size={18} />,
    title: "Email Address",
    text: "info@webmarkx.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ContactPage = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const API_URL = "http://localhost:5000/api/contact-enquiries";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");
    setCaptchaError("");
    setCaptchaSuccess(false);
    setCaptchaVerifying(true);

    const enteredCaptcha = userCaptcha.trim();
    const originalCaptcha = captchaCode.trim();

    await new Promise((resolve) => setTimeout(resolve, 700));

    if (enteredCaptcha !== originalCaptcha) {
      setCaptchaVerifying(false);
      setCaptchaError("Please enter correct captcha.");
      setCaptchaSuccess(false);
      setUserCaptcha("");
      return;
    }

    setCaptchaVerifying(false);
    setCaptchaError("");
    setCaptchaSuccess(true);

    const formData = new FormData(e.target);

    const data = {
      firstName: formData.get("firstName")?.toString().trim(),
      lastName: formData.get("lastName")?.toString().trim(),
      company: formData.get("company")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      service: formData.get("service")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
      privacy: formData.get("privacy") ? "Accepted" : "Not accepted",
    };

    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      setSubmitMessage("Please fill all required fields.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSubmitMessage("Email service is not configured properly.");
      return;
    }

    try {
      setIsSubmitting(true);

      await contactApi.post("/", {
        ...data,
        source: "Website Contact Form",
      });

      const templateParams = {
        first_name: data.firstName,
        last_name: data.lastName,
        company: data.company || "Not provided",
        user_email: data.email,
        phone: data.phone || "Not provided",
        service: data.service || "Not selected",
        message: data.message,
        privacy: data.privacy,
        captcha_status: "Verified",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setSubmitMessage("Message sent successfully!");
      e.target.reset();
      setUserCaptcha("");
      setCaptchaSuccess(false);
      generateCaptcha();
    } catch (error) {
      console.error("Form Submit Error:", error);
      setSubmitMessage(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const [captchaCode, setCaptchaCode] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [captchaVerifying, setCaptchaVerifying] = useState(false);

  const generateCaptcha = () => {
    const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const lower = "abcdefghijkmnpqrstuvwxyz";
    const numbers = "23456789";
    const symbols = "@#&?";
    const allChars = upper + lower + numbers + symbols;

    let captcha = "";
    captcha += upper[Math.floor(Math.random() * upper.length)];
    captcha += lower[Math.floor(Math.random() * lower.length)];
    captcha += numbers[Math.floor(Math.random() * numbers.length)];
    captcha += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = 4; i < 7; i++) {
      captcha += allChars[Math.floor(Math.random() * allChars.length)];
    }

    captcha = captcha
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    setCaptchaCode(captcha);
    setCaptchaError("");
    setCaptchaSuccess(false);
    setCaptchaVerifying(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <>
      <BackButton />
      <Navbar />

      <section className="contact-page">
        <div className="contact-bg contact-bg-1"></div>
        <div className="contact-bg contact-bg-2"></div>
        <div className="contact-bg contact-bg-3"></div>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-blob blob-top"></div>
            <div className="card-blob blob-bottom"></div>

            <h2>Let&apos;s connect</h2>
            <span className="title-underline"></span>

            <p className="contact-intro">
              We&apos;d love to hear from you! Reach out through any of these
              channels or fill out the form.
            </p>

            <div className="contact-info-list">
              {contactItems.map((item, index) => (
                <motion.div
                  className="contact-info-item"
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={0.12 * (index + 1)}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-text">
                    <h4>{item.title}</h4>
                    <p style={{ whiteSpace: "pre-line" }}>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="contact-image-wrap"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.4}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <img src={contactImg} alt="Customer support team" />
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.15}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-blob form-blob"></div>

            <h2>Send us a message</h2>
            <span className="title-underline"></span>
            <p className="form-subtitle">
              We&apos;ll get back to you within 24 hours.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="firstName">First name *</label>
                  <input id="firstName" name="firstName" type="text" required />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last name *</label>
                  <input id="lastName" name="lastName" type="text" required />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+971 50 576 1914"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Services</label>
                  <select
                    id="service"
                    name="service"
                    className="service-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service ↴
                    </option>
                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="PPC Advertising">PPC Advertising</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  required
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* CAPTCHA */}
              <div className="captcha-box professional-captcha-box">
                <label className="captcha-label">Security Verification *</label>

                <div className="captcha-display professional-captcha-display">
                  <span className="captcha-code">{captchaCode}</span>

                  <button
                    type="button"
                    className="captcha-refresh-btn"
                    onClick={generateCaptcha}
                    aria-label="Refresh captcha"
                    title="Refresh captcha"
                  >
                    ↻
                  </button>
                </div>

                <div className="captcha-input-wrap">
                  <input
                    type="text"
                    className={`captcha-input ${
                      captchaError ? "captcha-input-error" : ""
                    } ${captchaSuccess ? "captcha-input-success" : ""}`}
                    placeholder="Enter exact captcha"
                    value={userCaptcha}
                    onChange={(e) => {
                      setUserCaptcha(e.target.value);
                      if (captchaError) setCaptchaError("");
                      if (captchaSuccess) setCaptchaSuccess(false);
                    }}
                    autoComplete="off"
                    required
                  />

                  {captchaVerifying && (
                    <span className="captcha-status verifying">
                      Checking...
                    </span>
                  )}

                  {captchaSuccess && !captchaVerifying && (
                    <span className="captcha-status success">✔ Verified</span>
                  )}
                </div>

                {captchaError && (
                  <p className="captcha-error">{captchaError}</p>
                )}
              </div>
              <label className="checkbox-wrap">
                <input type="checkbox" name="privacy" required />
                <span>
                  I agree to the <a href="/privacy-policy">Privacy Policy</a>*
                </span>
              </label>

              <motion.button
                type="submit"
                className="send-btn"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {captchaVerifying
                  ? "Checking captcha..."
                  : isSubmitting
                    ? "Sending..."
                    : "Send message"}
                <ArrowRight size={18} />
              </motion.button>

              {submitMessage && (
                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: submitMessage.includes("successfully")
                      ? "#15803d"
                      : "#dc2626",
                  }}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <ProcessSection />
        <WhyChooseSection />
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;

// New Contact Form Submission - {{first_name}} {{last_name}}

// New Contact Form Submission

// First Name: {{first_name}}
// Last Name: {{last_name}}
// Company: {{company}}
// Email: {{user_email}}
// Phone: {{phone}}
// Service: {{service}}
// Privacy Accepted: {{privacy}}

// Message:
// {{message}}
