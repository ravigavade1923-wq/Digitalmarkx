import "./PageLoader.css";

import logo from "../../assets/loader/weblogo.png";

const particles = Array.from({ length: 18 }, (_, i) => i + 1);

export default function PageLoader() {
  return (
    <div className="wm-loader-overlay">
      <div className="wm-loader-noise"></div>
      <div className="wm-loader-bg-glow wm-glow-one"></div>
      <div className="wm-loader-bg-glow wm-glow-two"></div>
      <div className="wm-loader-bg-glow wm-glow-three"></div>

      <div className="wm-particles">
        {particles.map((item) => (
          <span
            key={item}
            className={`wm-particle wm-particle-${item}`}
          ></span>
        ))}
      </div>

      <div className="wm-loader-glass">
        <div className="wm-loader-wrap">
          <div className="wm-loader-ring wm-ring-one"></div>
          <div className="wm-loader-ring wm-ring-two"></div>
          <div className="wm-loader-ring wm-ring-three"></div>
          <div className="wm-loader-ring wm-ring-four"></div>

          <div className="wm-loader-core">
            <div className="wm-logo-reveal">
              <img
                src={logo}
                alt="WEBMARKX"
                className="wm-loader-logo"
              />
            </div>
          </div>
        </div>

        <div className="wm-loader-brand">WEBMARKX</div>

        <div className="wm-loader-text">
          <span className="wm-shimmer-text">Loading your experience</span>
        </div>

        <div className="wm-progress">
          <div className="wm-progress-line"></div>
        </div>
      </div>
    </div>
  );
}