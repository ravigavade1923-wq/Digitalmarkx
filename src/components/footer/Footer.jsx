import "./footer.css";
import logo from "../../assets/footer/footerlogo.png";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) return;

    console.log("Footer Subscribe Email:", email);
    alert("Subscription successful!");
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer-top-line"></div>

      <div className="footer-bg-shape footer-shape-1"></div>
      <div className="footer-bg-shape footer-shape-2"></div>
      <div className="footer-bg-shape footer-shape-3"></div>

      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            <img
              src={logo}
              alt="WebMarkx Logo"
              width="180"
              height="60"
              loading="lazy"
              decoding="async"
            />
            <h2>WEBMARKX</h2>
          </div>

          <p className="footer-desc">
            Where creativity meets innovation! Boost your online presence,
            engage your audience, and drive real results with our tailored
            strategies.
          </p>

          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <div className="contact-icon purple">
                <MapPin size={18} />
              </div>
              <p>Al Owais Building Sheikh Zayed Road, Dubai UA</p>
            </div>

            <div className="footer-contact-item">
              <div className="contact-icon red">
                <Phone size={18} />
              </div>
              <p>+971 50 576 1914</p>
            </div>

            <div className="footer-contact-item">
              <div className="contact-icon gray">
                <Mail size={18} />
              </div>
              <p>info@webmarkx.com</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>SERVICES</h3>
          <ul>
            <li>
              <a href="/services/social-media-marketing">
                Social Media Marketing
              </a>
            </li>
            <li>
              <a href="/services/content-marketing">Content Marketing</a>
            </li>
            <li>
              <a href="/services/web-development">Web Development</a>
            </li>
            <li>
              <a href="/services/app-development">App Development</a>
            </li>
            <li>
              <a href="/services/seo-optimization">SEO Optimization</a>
            </li>
            <li>
              <a href="/services/ppc-advertising">PPC Advertising</a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col footer-newsletter">
          <h3>NEWSLETTER</h3>
          <p className="newsletter-text">
            Subscribe to get updates on our latest offers!
          </p>

          <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          <div className="footer-social">
            <h3>FOLLOW US</h3>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/webmarkxx"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a href="https://x.com/webmarkx" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/webmarkx"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEOjoUS8MKolQAAAZ0KvGywkc0CAzCZqKOPtGsxi_hmjUTZudy9o9spBxII10mTLecF2TboTh-caSWOrVrA3O9sEe-8qAE84xsERBco9KjalRY9HgC_Q6bTM-TSJbwKVXdh9zI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fwebmarkx"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/webmarkx" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=971505761914&text&type=phone_number&app_absent=0"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <span>WebMarkx.</span> All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
