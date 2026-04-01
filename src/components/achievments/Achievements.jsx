import { useEffect, useRef, useState } from "react";
import "./achievements.css";

/* ✅ COUNTER */
const Counter = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1500;
    const stepTime = 16;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      startVal += increment;

      if (startVal >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startVal));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <h2>
      {count}
      {target === 95 || target === 100 ? "%" : "+"}
    </h2>
  );
};

export default function Achievements() {
  const ref = useRef();
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".achievements-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);

            /* 🔥 TEXT ANIMATION TRIGGER */
            ref.current.classList.add("show-text");

            /* CARD ANIMATION */
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("show");
              }, i * 200);
            });

            observer.unobserve(ref.current); // run only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="achievements-section"
      ref={ref}
      style={{
        backgroundImage: `url(https://i.pinimg.com/1200x/7c/60/05/7c6005347a471c2b237ecb28181084fb.jpg)`
      }}
    >
      <div className="achievements-overlay"></div>

      <div className="achievements-content">
        <p className="achievements-tag">OUR ACHIEVEMENTS</p>

        <h1 className="achievements-title">
          Amplify Your Digital Presence
        </h1>

        <span className="achievements-sub">
          Innovative solutions that drive measurable results and growth
        </span>

        <div className="achievements-cards">
          <div className="achievements-card">
            <div className="achievements-icon">🏅</div>
            <Counter target={514} start={startCount} />
            <p>Successful Campaigns</p>
          </div>

          <div className="achievements-card">
            <div className="achievements-icon">💼</div>
            <Counter target={12} start={startCount} />
            <p>Industry Experience</p>
          </div>

          <div className="achievements-card">
            <div className="achievements-icon">📈</div>
            <Counter target={95} start={startCount} />
            <p>Conversion Optimization</p>
          </div>

          <div className="achievements-card">
            <div className="achievements-icon">🛡️</div>
            <Counter target={100} start={startCount} />
            <p>Data Privacy Assurance</p>
          </div>
        </div>
      </div>
    </section>
  );
}