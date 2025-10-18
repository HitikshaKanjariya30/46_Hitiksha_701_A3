import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          ViteReactApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/conditional">
                Conditional
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lists-nested">
                Lists & Nested
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/containment">
                Containment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/form-state-ref">
                Form useState/useRef
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clock">
                Digital Clock
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/live-validation">
                Live Validation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/live-filter">
                Live Filter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/crud">
                CRUD Frontend
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
