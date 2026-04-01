import { useEffect, useRef, useState } from "react";
import "./benefits.css";
import { Link } from "react-router-dom";

export default function BenefitsSection() {
  const ref = useRef();
  const [start, setStart] = useState(false);

  // scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
  }, []);

  // counter component
  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let current = 0;
      const step = end / 60;

      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 20);

      return () => clearInterval(interval);
    }, [start, end]);

    return <span>{count}%</span>;
  };

  return (
    <section className="benefits-section" ref={ref}>
      <div className="container">
        {/* LEFT */}
        <div className="left">
          <span className="tag">OUR BENIFITS</span>

          <h2>GET MORE TRAFFIC ON WEBSITE</h2>

          <p>
            Discover Our Benefits: Result-driven, Data-backed, Success-oriented
          </p>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
           
  <div className="badger">
    <span className="badger-value">100%</span>
    <span className="badger-text">Growth</span>
  </div>
          </div>
        </div>

        

        {/* RIGHT */}
        <div className="right">
          {/* PROGRESS */}
          <div className="progress-grid">
            {[
              { label: "Lead Generation", value: 90, color: "red" },
              { label: "Customer Interaction", value: 100, color: "blue" },
              { label: "Continuous Growth", value: 95, color: "red" },
              { label: "Cost-effective Solutions", value: 85, color: "blue" },
            ].map((item, i) => (
              <div className="progress-card" key={i}>
                <div className="top">
                  <span>{item.label}</span>
                  <span>
                    <Counter end={item.value} />
                  </span>
                </div>

                <div className="bar">
                  <div
                    className={`fill ${item.color}`}
                    style={{ width: start ? item.value + "%" : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* GLASS CARDS */}
          <div className="cards">
            <div className="card">
              <a href="#">📈</a> Data-Driven Approach
              <span>AI-powered analytics for precision targeting</span>
            </div>
            <div className="card">
              <a href="#">🛠</a> 24/7 Support
              <span>Dedicated team always ready to assist</span>
            </div>
            <div className="card">
              <a href="#">✨</a> Custom Strategies
              <span>Tailored solutions for your unique needs</span>
            </div>
            <div className="card">
              <a href="#">🏆</a> Proven Results
              <span>Track record of successful campaigns</span>
            </div>
            <p >
              Our comprehensive digital solutions are designed to elevate your
              brand, engage your audience, and deliver tangible business
              outcomes through cutting-edge technology and creative strategies.
            </p>
          </div>

          <Link to="/contact"><button className="cta-btn">Get Started Today →</button></Link>
        </div>
      </div>
    </section>
  );
}
