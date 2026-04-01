import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { serviceData } from "../service/serviceData";
import Logo from "../../assets/navbar/navlogo.png";

const Navbar = () => {
  const navRef = useRef(null);

  const [serviceDropdown, setServiceDropdown] = useState(false);

  useEffect(() => {
    const items = navRef.current?.querySelectorAll(".nav-item");

    if (!items || !items.length) return;

    const cleanups = [];

    items.forEach((item) => {
      const handleMouseMove = (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.setProperty("--x", `${x}px`);
        item.style.setProperty("--y", `${y}px`);

        const moveX = (x - rect.width / 2) * 0.12;
        const moveY = (y - rect.height / 2) * 0.18;

        gsap.to(item, {
          x: moveX,
          y: moveY,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        });
      };

      item.addEventListener("mousemove", handleMouseMove);
      item.addEventListener("mouseleave", handleMouseLeave);

      cleanups.push(() => {
        item.removeEventListener("mousemove", handleMouseMove);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    gsap.fromTo(
      ".nav-item",
      { y: -24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".logo",
      { y: -20, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".call-btn",
      { y: -20, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      },
    );

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="WebMarkx Logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/blogger">Blogs</NavLink>
        </li>

        <li
          className="services-dropdown"
          onMouseEnter={() => setServiceDropdown(true)}
          onMouseLeave={() => setServiceDropdown(false)}
        >
          <div className="services-nav-wrap">
            {/* click kelyavr services page open */}
            <NavLink to="/services" className="services-main-link">
              Services
            </NavLink>

            {/* hover/click sathi arrow */}
            <button
              type="button"
              className="services-arrow-btn"
              onClick={() => setServiceDropdown(!serviceDropdown)}
            >
              <span className={`arrow ${serviceDropdown ? "open" : ""}`}>
                ⌄
              </span>
            </button>
          </div>

          <div
            className={`services-dropdown-menu ${serviceDropdown ? "show" : ""}`}
          >
            {serviceData.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="services-dropdown-item"
                style={{ animationDelay: `${index * 0.06}s` }}
                onClick={() => setServiceDropdown(false)}
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </li>

        <li className="nav-item">
          <NavLink to="/pricing">Pricing</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <a href="tel:+971505761914" className="call-btn ">
        📞 +971 50 576 1914
      </a>
    </nav>
  );
};

export default Navbar;
