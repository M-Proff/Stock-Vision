import React from "react";

function Footer() {
  return (
    <>
      <style>{`
        footer.footer {
          background-color: #1e293b; /* dark slate navy */
          color: #cbd5e1; /* soft light slate */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 50px 20px 30px;
          border-top: 3px solid #0ea5e9; /* bright sky blue line */
          user-select: none;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-section {
          flex: 1 1 220px;
          min-width: 220px;
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          width: 130px;
          margin-bottom: 25px;
          filter: brightness(0) invert(1); /* invert logo colors for dark bg */
          user-select: none;
        }

        .footer-section h5 {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 20px;
          color: #7dd3fc; /* light sky blue for headings */
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
          line-height: 2.2;
        }

        .footer-section ul li a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.3s ease, transform 0.2s ease;
          user-select: text;
        }

        .footer-section ul li a:hover,
        .footer-section ul li a:focus {
          color: #0ea5e9;
          transform: translateX(5px);
          outline: none;
        }

        .footer-copy {
          margin-top: 40px;
          font-size: 13px;
          color: #94a3b8; /* muted gray-blue */
          text-align: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
          user-select: text;
        }

        /* Responsive: stack vertically on small */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 35px;
          }
          .footer-section {
            min-width: auto;
          }
          .footer-logo {
            margin: 0 auto 20px auto;
          }
        }
      `}</style>

      <footer className="footer" role="contentinfo" aria-label="Footer">
        <div className="footer-container">
          <div className="footer-section" aria-label="Company Info">
            <img
              src="media/images/logo.svg"
              alt="Company Logo"
              className="footer-logo"
              draggable="false"
            />
            <p>
              &copy; 2010 - 2024. All rights reserved.
            </p>
          </div>

          <nav className="footer-section" aria-label="Company Links">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral Programme</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </nav>

          <nav className="footer-section" aria-label="Support Links">
            <h5>Support</h5>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support Portal</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </nav>

          <nav className="footer-section" aria-label="Account Links">
            <h5>Account</h5>
            <ul>
              <li><a href="#">Open an Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
              <li><a href="#">Challenges</a></li>
            </ul>
          </nav>
        </div>

        <p className="footer-copy" tabIndex="0">
          Investments in securities market are subject to market risks. Please read all related documents carefully before investing.
        </p>
      </footer>
    </>
  );
}

export default Footer;
