import React from "react";

function Navbar() {
  return (
    <>
      <style>{`
        nav.navbar {
          background-color: #0b1e3d; /* distinct dark navy */
          box-shadow: 0 3px 8px rgba(11, 30, 61, 0.9);
          transition: background-color 0.3s ease;
          z-index: 1030;
        }

        .navbar-brand img {
          filter: brightness(0) invert(1);
          transition: filter 0.3s ease;
        }

        /* Nav link styling */
        .navbar-nav .nav-link {
          color: #cfd8dc; /* light gray */
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 0.5rem 1rem;
          transition: color 0.3s ease, border-bottom 0.3s ease;
          position: relative;
          border-bottom: 2px solid transparent;
        }

        /* Hover and focus */
        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link:focus {
          color: #00aaff; /* bright cyan */
          border-bottom-color: #00aaff;
          outline: none;
          background-color: rgba(0, 170, 255, 0.1);
          border-radius: 4px;
        }

        /* Active link */
        .navbar-nav .nav-link.active {
          color: #0099ff;
          border-bottom-color: #0099ff;
          font-weight: 700;
        }

        /* Hamburger button styling */
        .navbar-toggler {
          border-color: #00aaff;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .navbar-toggler:hover,
        .navbar-toggler:focus {
          border-color: #33bbff;
          box-shadow: 0 0 8px #00aaff;
          outline: none;
        }

        /* Hamburger icon bars */
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23cfd8dc' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
          transition: background-image 0.3s ease;
        }

        /* Hamburger toggled (X) */
        .navbar-toggler.collapsed .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7' y1='7' x2='23' y2='23' stroke='%23cfd8dc' stroke-width='3' stroke-linecap='round'/%3E%3Cline x1='23' y1='7' x2='7' y2='23' stroke='%23cfd8dc' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E");
        }

        /* Mobile menu background */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background-color: #112a57;
            padding: 1rem 1.5rem;
            border-radius: 0 0 8px 8px;
          }

          .navbar-nav .nav-link {
            padding: 0.75rem 0;
            border-bottom: none;
            border-radius: 0;
            background-color: transparent !important;
          }

          .navbar-nav .nav-link:hover,
          .navbar-nav .nav-link:focus {
            background-color: rgba(0, 170, 255, 0.15) !important;
            border-bottom: none !important;
            border-radius: 4px;
          }
        }

        /* Container responsiveness */
        .container {
          max-width: 1140px;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg" aria-label="Primary Navigation">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="media/images/logo.svg"
              alt="Stock Vision Logo"
              style={{ width: "130px" }}
            />
          </a>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={(e) => {
              e.currentTarget.classList.toggle("collapsed");
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/support">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
