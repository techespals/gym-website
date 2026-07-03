import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Container>
        <div className="navbar-content">
          <Link to="/" className="logo">
            TECH<span>ESPALS</span>
          </Link>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About
            </Link>

            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>

            <Link to="/trainers" onClick={closeMenu}>
              Trainers
            </Link>

            <Link to="/membership" onClick={closeMenu}>
              Membership
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;