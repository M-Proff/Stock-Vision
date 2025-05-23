import React from "react";

function Awards() {
  return (
    <div className="container my-5" style={{ maxWidth: "900px" }}>
      <div className="row align-items-center">
        <div className="col-md-6 p-4 text-center">
          <img
            src="/media/images/largestBroker.svg"
            alt="Award"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-6 p-4">
          <h2 style={{ color: "#1a3e72", fontWeight: "700", marginBottom: "1rem" }}>
            Trusted by thousands of investors
          </h2>
          <p
            className="mb-4"
            style={{
              color: "#555",
              fontSize: "1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            Stock Vision users trade and invest in a variety of products like:
          </p>
          <div className="row">
            <div className="col-6">
              <ul style={{ paddingLeft: "20px", color: "#555" }}>
                <li style={{ marginBottom: "0.5rem" }}>Stocks</li>
                <li style={{ marginBottom: "0.5rem" }}>Mutual Funds</li>
                <li style={{ marginBottom: "0.5rem" }}>Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul style={{ paddingLeft: "20px", color: "#555" }}>
                <li style={{ marginBottom: "0.5rem" }}>Bonds</li>
                <li style={{ marginBottom: "0.5rem" }}>Currency Trading</li>
                <li style={{ marginBottom: "0.5rem" }}>Commodities</li>
              </ul>
            </div>
          </div>
          <img
            src="/media/images/pressLogos.png"
            alt="Press Logos"
            style={{ width: "90%", marginTop: "2rem", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
