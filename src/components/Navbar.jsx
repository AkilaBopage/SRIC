import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">

        {/* BRAND */}
        <Link className="navbar-brand fw-bold" to="/">
          SRIC Investors
        </Link>

        {/* HAMBURGER BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>

          <ul className="navbar-nav ms-auto text-center text-lg-end">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}