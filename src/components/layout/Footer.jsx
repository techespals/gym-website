import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Brand */}

          <div className="footer-brand">

            <h2>
              TECH<span>ESPALS</span>
            </h2>

            <p>
              Elite fitness experiences powered by
              world-class coaching, premium facilities,
              and a community committed to excellence.
            </p>

            <div className="social-links">

              <a href="#">Instagram</a>

              <a href="#">YouTube</a>

              <a href="#">LinkedIn</a>

              <a href="#">WhatsApp</a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/trainers">Trainers</Link>

            <Link to="/membership">
              Membership
            </Link>

            <Link to="/contact">Contact</Link>

          </div>

          {/* Programs */}

          <div className="footer-column">

            <h3>Programs</h3>

            <a href="#">Personal Training</a>

            <a href="#">Weight Loss</a>

            <a href="#">Strength Training</a>

            <a href="#">Nutrition Coaching</a>

            <a href="#">Group Classes</a>

          </div>

          {/* Contact */}

          <div className="footer-column">

            <h3>Contact</h3>

            <p>📍 New Delhi, India</p>

            <p>📞 +91 98765 43210</p>

            <p>✉️ contact@techespals.com</p>

            <p>🕒 Mon - Sun: 5 AM - 11 PM</p>

          </div>

        </div>

        {/* Newsletter */}

        <div className="newsletter">

          <div>

            <h3>Join Our Newsletter</h3>

            <p>
              Fitness tips, exclusive offers and
              transformation stories every week.
            </p>

          </div>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © 2026 TECHESPALS. All rights reserved.
          </p>

          <div>

            <a href="#">Privacy Policy</a>

            <a href="#">Terms</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;