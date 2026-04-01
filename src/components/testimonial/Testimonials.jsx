import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./testimonials.css";

const data = [
  {
    name: "Mohammad Shaikh",
    role: "CEO, TechSolutions",
    text: "WEBMARKX was a complete game-changer for our brand. Their data-driven execution, premium design approach, and result-focused marketing significantly improved our online visibility, engagement, and conversion rates.",
    rating: 5,
    color: "#6d5dfc",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ashfaq Khan",
    role: "Marketing Director",
    text: "From SEO to social media strategy, WEBMARKX delivered beyond expectations. Their team understands digital growth deeply and helped us scale our audience with confidence and consistency.",
    rating: 5,
    color: "#ff4d6d",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ravi Gavade",
    role: "Employee",
    text: "Amazing experience working with the WEBMARKX team. Professional, creative, and highly result-driven. Their design quality and execution feel premium and truly stand out in the market.",
    rating: 5,
    color: "#35c2ff",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=500&q=80",
  },
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 120 : -120,
    rotateY: direction > 0 ? 18 : -18,
    scale: 0.92,
  }),
  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -120 : 120,
    rotateY: direction > 0 ? -14 : 14,
    scale: 0.92,
  }),
};

export default function Testimonials() {
  const [[index, direction], setIndexDirection] = useState([0, 0]);
  const [progress, setProgress] = useState(0);

  const active = data[index];
  const autoDuration = 5000;

  const paginate = (newDirection) => {
    setIndexDirection(([prev]) => [
      (prev + newDirection + data.length) % data.length,
      newDirection,
    ]);
    setProgress(0);
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (autoDuration / 50);
        return next >= 100 ? 100 : next;
      });
    }, 50);

    const slideInterval = setInterval(() => {
      paginate(1);
    }, autoDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [index]);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -120 || velocity < -500) {
      paginate(1);
    } else if (offset > 120 || velocity > 500) {
      paginate(-1);
    }
  };

  return (
    <section className="testimonials luxury-dark">
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-grid"></div>
      <div className="bg-noise"></div>

      <motion.div
        className="test-left"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="tager"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          TESTIMONIALS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          viewport={{ once: true }}
        >
          What clients say <br /> <span>about us</span>
        </motion.h1>

        <motion.div
          className="rating-box"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rating-score">
            <h2>4.9</h2>
            <span>/5.0</span>
          </div>

          <div className="rating-content">
            <div className="stars">★★★★★</div>
            <p>97 Ratings & Reviews</p>
          </div>
        </motion.div>

        <motion.p
          className="desc"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Don&apos;t just take our word for it. Explore how our clients
          experienced premium service, creative strategy, and measurable digital
          growth with WEBMARKX.
        </motion.p>

        <motion.div
          className="controls"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button onClick={() => paginate(-1)} aria-label="Previous review">
            ❮
          </button>
          <button onClick={() => paginate(1)} aria-label="Next review">
            ❯
          </button>
        </motion.div>

        <motion.a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className="review-link"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="review-btn">
            <span className="btn-shine"></span>
            <span>Write a Review ⭐</span>
          </button>
        </motion.a>
      </motion.div>

      <motion.div
        className="test-right"
        initial={{ opacity: 0, x: 80, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="stack-card stack-back"></div>
        <div className="stack-card stack-middle"></div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className="carde active"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={handleDragEnd}
            whileTap={{ scale: 0.98, cursor: "grabbing" }}
            style={{ "--accent": active.color }}
          >
            <div className="card-glow"></div>
            <div className="card-top-line"></div>

            <div className="progress-track">
              <motion.div
                className="progress-fill"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            <div className="card-header">
              <motion.img
                src={active.image}
                alt={active.name}
                className="avatar-img"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />

              <div className="client-info">
                <h3>{active.name}</h3>
                <p>{active.role}</p>
              </div>
            </div>

            <motion.div
              className="card-stars"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45 }}
            >
              {"★".repeat(active.rating)}
            </motion.div>

            <motion.p
              className="text"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55 }}
            >
              “{active.text}”
            </motion.p>

            <motion.div
              className="drag-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Swipe or drag to explore reviews
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="dots">
          {data.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() =>
                setIndexDirection([i, i > index ? 1 : -1])
              }
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}