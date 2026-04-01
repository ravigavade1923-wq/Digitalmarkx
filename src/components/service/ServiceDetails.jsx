import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { serviceData } from "./serviceData";
import "./ServiceDetails.css";
import BackButton from "../backbutton/BackButton";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceData.find((item) => item.id === slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="service-not-found">
          <h2>Service not found</h2>
          <Link to="/services">Back to Services</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
    <BackButton/>
      <Navbar />

      <section className="service-details-hero">
        <div className="service-details-bg">
          <img src={service.image} alt={service.title} />
          <div className="service-details-overlay"></div>
        </div>

        <div className="service-details-content">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {service.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            {service.subtitle}
          </motion.p>

          <motion.div
            className="service-details-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Link to="/contact" className="service-primary-btn">
              Request a Quote
            </Link>
            <Link to="/services" className="service-secondary-btn">
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="service-details-body">
        <div className="service-details-container">
          <motion.div
            className="service-overview-card"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <div className="service-overview-left">
              <h2>{service.title}</h2>
              <p>{service.details}</p>
            </div>

            <div className="service-overview-right">
              <h3>Core Highlights</h3>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="service-strategy-header">
            <h2>Our Work Strategy</h2>
            <span></span>
          </div>

          <div className="service-strategy-grid">
            {service.strategies.map((item, index) => (
              <motion.div
                key={index}
                className="service-strategy-card"
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="strategy-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button>Learn more →</button>
              </motion.div>
            ))}
          </div>

          <div className="service-bottom-grid">
            <motion.div
              className="service-info-box"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Key Benefits</h3>
              <ul>
                {service.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="service-info-box"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Our Process</h3>
              <ul>
                {service.process.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetails;