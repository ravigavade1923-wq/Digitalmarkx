import "./ProcessSection.css";
import { motion } from "framer-motion";
import {
  Search,
  Map,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const processData = [
  {
    id: "01",
    title: "Discover",
    desc: "In the first step of the 6-D process, we explore and gather insights about your project's objectives, target audience, and requirements, setting the foundation for a successful development journey.",
    icon: <Search size={18} />,
    variant: "blue",
  },
  {
    id: "02",
    title: "Define",
    desc: "In this phase, we analyze the gathered information and define a clear roadmap, outlining project scope, timelines, and key deliverables, ensuring a well-defined direction for the entire process.",
    icon: <Map size={18} />,
    variant: "blue",
  },
  {
    id: "03",
    title: "Design",
    desc: "Next, our expert team crafts innovative and visually captivating designs, tailoring solutions to match your brand identity and user preferences, creating a seamless user experience.",
    icon: <Palette size={18} />,
    variant: "red",
  },
  {
    id: "04",
    title: "Develop",
    desc: "With the design approved, we move forward with the development stage, utilizing cutting-edge technologies to transform concepts into fully functional and feature-rich applications.",
    icon: <Code2 size={18} />,
    variant: "blue",
  },
  {
    id: "05",
    title: "Deploy",
    desc: "After thorough testing and quality assurance, we deploy the project to its intended platform, ensuring a smooth and seamless launch.",
    icon: <Rocket size={18} />,
    variant: "red",
  },
  {
    id: "06",
    title: "Deliver",
    desc: "Finally, we deliver the completed project to you, providing ongoing support and maintenance to ensure optimal performance and success.",
    icon: <CheckCircle2 size={18} />,
    variant: "blue",
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-bg-glow glow-1"></div>
      <div className="process-bg-glow glow-2"></div>

      <div className="process-container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="process-badge">Our Methodology</span>
          <h2>
            6-D <span>Process</span>
          </h2>
          <p>
            A proven framework that transforms your vision into exceptional
            digital experiences
          </p>
        </motion.div>

        <div className="process-chain-grid">
          <div className="chain-backbone backbone-left"></div>
          <div className="chain-backbone backbone-right"></div>
          <div className="chain-connector connector-top"></div>
          <div className="chain-connector connector-mid"></div>
          <div className="chain-connector connector-bottom"></div>

          {processData.map((item, index) => (
            <motion.article
              className={`process-card process-${index + 1}`}
              key={item.id}
              variants={cardMotion}
              initial="hidden"
              whileInView="show"
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="chain-hanger">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={`process-card-top ${item.variant}`}>
                <div className="step-badge">{item.id}</div>

                <div className="process-card-title-wrap">
                  <div className="process-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                </div>
              </div>

              <div className="process-card-body">
                <p>{item.desc}</p>

                <a href="/" className="learn-link">
                  Learn more
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="process-cta-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="process-cta-btn">
            Start Your Project Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;