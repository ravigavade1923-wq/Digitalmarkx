import "./WhyChooseSection.css";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Settings,
  Users,
  BadgeCheck,
  HeartHandshake,
  Headphones,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import previewImg from "../../assets/whychoose/whychoose.png"; // path adjust kar
import { image } from "framer-motion/client";

const differentiators = [
  {
    id: 1,
    title: "Innovative Solutions",
    shortDesc:
      "Cutting-edge digital marketing strategies that leverage AI, automation, and creative execution.",
    fullTitle: "Innovative Solutions",
    fullDesc:
      "We create future-ready digital marketing systems powered by strategy, data, design, and innovation to help your brand grow faster and smarter.",
    benefits: [
      "AI-driven campaign optimization",
      "Creative-first growth planning",
      "Performance-focused execution",
    ],
    icon: <Zap size={18} />,
    image:""
  },
  {
    id: 2,
    title: "Customized Approach",
    shortDesc:
      "Tailored solutions designed specifically for your business goals, audience, and market.",
    fullTitle: "Customized Approach",
    fullDesc:
      "Every business is different, so we design a custom marketing roadmap aligned with your brand goals, audience behavior, and growth stage.",
    benefits: [
      "Brand-specific strategy mapping",
      "Audience-driven campaigns",
      "Flexible scalable planning",
    ],
    icon: <Settings size={18} />,
  },
  {
    id: 3,
    title: "Experienced Team",
    shortDesc:
      "Digital natives with 12+ years experience who eat, sleep, and breathe digital growth.",
    fullTitle: "Experienced Team",
    fullDesc:
      "Our experienced team combines creativity, performance marketing, design, SEO, content, and development expertise under one roof.",
    benefits: [
      "12+ years of experience",
      "Cross-functional specialists",
      "Agency-grade execution quality",
    ],
    icon: <Users size={18} />,
  },
  {
    id: 4,
    title: "Proven Track Record",
    shortDesc:
      "Trusted by 500+ brands across industries to deliver measurable and consistent results.",
    fullTitle: "Proven Track Record",
    fullDesc:
      "We have helped startups, service brands, and growing businesses achieve real outcomes with transparent reporting and measurable ROI.",
    benefits: [
      "500+ successful campaigns",
      "Transparent growth reporting",
      "Result-driven execution",
    ],
    icon: <BadgeCheck size={18} />,
  },
  {
    id: 5,
    title: "Collaborative Partnership",
    shortDesc:
      "We become an extension of your team, working closely to align every move with your goals.",
    fullTitle: "Collaborative Partnership",
    fullDesc:
      "We work with you like a strategic growth partner, not just a service provider, ensuring every campaign aligns with your business vision.",
    benefits: [
      "Clear communication process",
      "Strategic team collaboration",
      "Aligned long-term growth vision",
    ],
    icon: <HeartHandshake size={18} />,
  },
  {
    id: 6,
    title: "Continuous Support",
    shortDesc:
      "Ongoing optimization, monthly reporting, and 24/7 support to ensure your success never stops.",
    fullTitle: "Continuous Support",
    fullDesc:
      "Ongoing optimization, monthly reporting, and 24/7 support to ensure your success never stops.",
    benefits: [
      "24/7 technical support",
      "Monthly performance reviews",
      "Continuous A/B testing",
    ],
    icon: <Headphones size={18} />,
  },
];

const AUTO_TIME = 3000;

const WhyChooseSection = () => {
  const [activeIndex, setActiveIndex] = useState(5);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % differentiators.length);
    }, AUTO_TIME);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeItem = useMemo(() => differentiators[activeIndex], [activeIndex]);

  const progressPercent = ((activeIndex + 1) / differentiators.length) * 100;

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? differentiators.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % differentiators.length);
  };

  return (
    <section className="whychoose-section">
      <div className="why-bg why-bg-1"></div>
      <div className="why-bg why-bg-2"></div>

      <div className="whychoose-container">
        <motion.div
          className="whychoose-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>
            Why <span>Choose</span> <strong>WebMarkx</strong>?
          </h2>
          <p>
            Choose us for innovative digital marketing solutions tailored to
            your needs.
          </p>
        </motion.div>

        <div className="whychoose-grid">
          {/* LEFT SIDE */}
          <motion.div
            className="why-left-panel"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Our Differentiators</h3>

            <div className="why-list">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`why-list-card ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  whileHover={{ x: 5 }}
                >
                  <div className="why-list-icon">{item.icon}</div>

                  <div className="why-list-content">
                    <h4>{item.title}</h4>
                    <p>{item.shortDesc}</p>
                  </div>

                  {activeIndex === index && (
                    <motion.span
                      className="active-glow-line"
                      layoutId="activeGlowLine"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="why-right-panel"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="why-preview-bg">
              <img src={previewImg} alt="Team collaboration" />
            </div>

            <div className="why-preview-card">
              <div className="why-preview-top">
                <div className="preview-icon-badge">{activeItem.icon}</div>

                <div className="preview-nav">
                  <button type="button" onClick={handlePrev}>
                    <ArrowLeft size={16} />
                  </button>
                  <button type="button" onClick={handleNext}>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="preview-title">{activeItem.fullTitle}</h3>
                  <p className="preview-desc">{activeItem.fullDesc}</p>

                  <div className="preview-benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                      {activeItem.benefits.map((benefit, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="preview-footer">
                <div className="preview-footer-head">
                  <span>
                    FEATURE {activeIndex + 1} OF {differentiators.length}
                  </span>
                  <strong>{Math.round(progressPercent)}%</strong>
                </div>

                <div className="preview-progress">
                  <motion.div
                    className="preview-progress-fill"
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.45 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
