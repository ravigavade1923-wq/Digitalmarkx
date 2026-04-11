import { useState } from "react";
import "./Pricing.css";
import BackButton from "../backbutton/BackButton";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const API_URL =
  import.meta.env.VITE_API_URL || "https://blogadmin-0fj9.onrender.com/api";
const plans = [
  {
    id: "starter",
    badge: "",
    name: "Starter",
    subtitle: "Perfect for small businesses",
    oldPrice: "1500 AED",
    price: "999 AED",
    period: "/mo",
    features: [
      "Social Media Management",
      "Social Media Advertising",
      "2 Ads Management",
      "Daily Campaign Monitoring",
      "Organic Reach & Followers",
      "Weekly Profile Tracking",
      "24/7 Support",
      "Monthly Report",
    ],
  },
  {
    id: "elite",
    badge: "RECOMMENDED",
    name: "Elite",
    subtitle: "Complete solution for businesses",
    oldPrice: "3500 AED",
    price: "2499 AED",
    period: "/mo",
    features: [
      "All Starter & Advance Features",
      "Social Media Advertising",
      "10 Ads Management",
      "Expert Consultancy",
      "Web Development & Management",
      "Email Marketing",
      "24/7 VIP Support",
      "Daily Profile Tracking",
    ],
  },
  {
    id: "advance",
    badge: "",
    name: "Advance",
    subtitle: "For growing businesses",
    oldPrice: "2899 AED",
    price: "1899 AED",
    period: "/mo",
    features: [
      "All Starter Features",
      "Social Media Advertising",
      "5 Ads Management",
      "Expert Consultancy",
      "Organic Reach & Followers",
      "Web Development",
      "24/7 Support",
      "Dedicated Account Manager",
    ],
  },
];

const servicesList = [
  "Social Media Management",
  "Search Engine Optimization (SEO)",
  "Email Marketing",
  "Influencer Marketing",
  "E-commerce Solutions",
  "Social Media Advertising",
  "Pay-Per-Click Advertising (PPC)",
  "Content Marketing",
  "Web Development",
  "Analytics & Reporting",
];

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    email: "",
    phone: "",
    currentPresence: [],
    servicesNeeded: [],
    primaryGoal: "",
    budgetRange: "",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChoosePlan = (planName) => {
    setSelectedPlan(planName);
    const section = document.getElementById("custom-plan-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL.replace(/\/$/, "")}/pricing-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedPlan,
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          companyName: "",
          industry: "",
          website: "",
          email: "",
          phone: "",
          currentPresence: [],
          servicesNeeded: [],
          primaryGoal: "",
          budgetRange: "",
          additionalInfo: "",
        });
        setSelectedPlan("");
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackButton />
      <Navbar />

      <div className="pricing-page">
        <section className="pricing-hero">
          <div className="pricing-hero-glow"></div>
          <p className="section-tag">WEBMARKX PRICING</p>
          <h1>Social Media Marketing Plans</h1>
          <p className="pricing-subtitle">
            Choose the perfect plan to boost your online presence with premium,
            performance-driven digital marketing solutions.
          </p>
        </section>

        <section className="plans-section">
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div
                className={`plan-card ${plan.name === "Elite" ? "featured" : ""}`}
                key={plan.id}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.badge && <span className="plan-badge">{plan.badge}</span>}

                <h3>{plan.name}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>

                <div className="price-wrap">
                  <span className="old-price">{plan.oldPrice}</span>
                  <div className="new-price-line">
                    <span className="new-price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>

                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <button
                  className="choose-btn"
                  onClick={() => handleChoosePlan(plan.name)}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="custom-plan-section" id="custom-plan-form">
          <div className="custom-plan-heading">
            <h2>Need a Custom Digital Marketing Plan?</h2>
            <p>
              Tell us about your organization and digital marketing goals. We’ll
              create a tailored solution that drives real results.
            </p>
          </div>

          <div className="custom-plan-grid">
            <div className="form-box">
              <h3>Build Your Custom Digital Marketing Plan</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select industry</option>
                      <option>Real Estate</option>
                      <option>E-commerce</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                      <option>Technology</option>
                      <option>Restaurant</option>
                      <option>Fashion</option>
                      <option>Construction</option>
                      <option>Finance</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>Company Website</label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                      required
                    />
                  </div>

                  <div className="form-group full-width ">
                    <label>Selected Plan / Button Click</label>
                    <input
                      type="text"
                      value={selectedPlan}
                      placeholder="No plan selected yet"
                      readOnly
                    />
                  </div>
                </div>

                <div className="checkbox-section">
                  <label>Current Digital Marketing Presence</label>
                  <div className="checkbox-grid">
                    {[
                      "Website",
                      "Instagram",
                      "Twitter/X",
                      "YouTube",
                      "Facebook",
                      "LinkedIn",
                      "TikTok",
                      "Google Business",
                    ].map((item) => (
                      <label key={item} className="checkbox-item">
                        <input
                          type="checkbox"
                          value={item}
                          checked={formData.currentPresence.includes(item)}
                          onChange={(e) =>
                            handleCheckboxChange(e, "currentPresence")
                          }
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="checkbox-section">
                  <label>Digital Marketing Services Needed *</label>
                  <div className="checkbox-grid">
                    {servicesList.map((item) => (
                      <label key={item} className="checkbox-item">
                        <input
                          type="checkbox"
                          value={item}
                          checked={formData.servicesNeeded.includes(item)}
                          onChange={(e) =>
                            handleCheckboxChange(e, "servicesNeeded")
                          }
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Primary Marketing Goals *</label>
                    <select
                      name="primaryGoal"
                      value={formData.primaryGoal}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select primary goal</option>
                      <option>Brand Awareness</option>
                      <option>Lead Generation</option>
                      <option>Sales Conversion</option>
                      <option>Website Traffic</option>
                      <option>Customer Engagement</option>
                      <option>Product Launch</option>
                      <option>Market Expansion</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>Monthly Budget Range (AED) *</label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      <option>1,000 - 2,500 AED</option>
                      <option>2,500 - 5,000 AED</option>
                      <option>5,000 - 10,000 AED</option>
                      <option>10,000 - 20,000 AED</option>
                      <option>20,000+ AED</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your target audience, current challenges, competitors, or specific requirements..."
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading
                    ? "Submitting..."
                    : "Request Custom Digital Marketing Plan"}
                </button>

                {message && <p className="form-message">{message}</p>}
              </form>
            </div>

            <div className="contact-box">
              <div className="contact-image">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                  alt="Digital Marketing Support"
                />
              </div>

              <div className="contact-content">
                <h3>Get Expert Digital Marketing Assistance</h3>
                <p>
                  Our digital marketing specialists will analyze your needs and
                  create a customized strategy to help your business grow
                  online.
                </p>

                <div className="contact-points">
                  <div>
                    <strong>Digital Marketing Hotline</strong>
                    <span>+971 800 DIGITAL (3444825)</span>
                  </div>
                  <div>
                    <strong>Email Our Experts</strong>
                    <span>solutions@digitalmarketing.ae</span>
                  </div>
                  <div>
                    <strong>Digital Marketing Center</strong>
                    <span>Dubai Internet City, Dubai, UAE</span>
                  </div>
                  <div>
                    <strong>Consultation Hours</strong>
                    <span>Sun - Thu: 8:30AM - 6:30PM</span>
                    <span>Sat: 10AM - 4PM (By Appointment)</span>
                  </div>
                </div>

                <div className="why-box">
                  <h4>Why choose our custom digital marketing plans?</h4>
                  <ul>
                    <li>Tailored strategies for your industry</li>
                    <li>Data-driven approach with measurable results</li>
                    <li>Dedicated account management</li>
                    <li>Regular performance reporting</li>
                    <li>Flexible scaling options</li>
                  </ul>
                </div>

                <div className="contact-actions">
                  <Link to="/contact">
                    {" "}
                    <button type="button" className="ghost-btn">
                      Schedule Call
                    </button>
                  </Link>
                  <Link to="/contact">
                    {" "}
                    <button type="button" className="red-btn">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
