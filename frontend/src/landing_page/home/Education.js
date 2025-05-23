import React from "react";

function Education() {
  return (
    <div className="container my-5" style={{ maxWidth: "900px" }}>
      <div className="row align-items-center">
        <div className="col-md-6 text-center p-4">
          <img
            src="/media/images/education.svg"
            alt="Education"
            style={{ width: "70%", maxWidth: "300px", height: "auto" }}
          />
        </div>
        <div className="col-md-6 p-4">
          <h2
            className="mb-3"
            style={{ color: "#1a3e72", fontWeight: "700", fontSize: "1.8rem" }}
          >
            Free and open market education
          </h2>
          <p style={{ color: "#444", fontSize: "1rem", lineHeight: "1.6" }}>
            Stock Vision offers easy-to-understand guides and resources for all levels, from basics to advanced trading.
          </p>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#1a3e72",
              fontWeight: "600",
              display: "inline-flex",
              alignItems: "center",
              marginTop: "0.5rem",
              transition: "color 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0d2549")}
            onMouseLeave={e => (e.currentTarget.style.color = "#1a3e72")}
          >
            Varsity{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
              style={{ marginLeft: "5px" }}
            ></i>
          </a>

          <p
            className="mt-4"
            style={{ color: "#444", fontSize: "1rem", lineHeight: "1.6" }}
          >
            Join our community forum to ask questions and learn from other traders.
          </p>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#1a3e72",
              fontWeight: "600",
              display: "inline-flex",
              alignItems: "center",
              marginTop: "0.5rem",
              transition: "color 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0d2549")}
            onMouseLeave={e => (e.currentTarget.style.color = "#1a3e72")}
          >
            TradingQ&A{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
              style={{ marginLeft: "5px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
