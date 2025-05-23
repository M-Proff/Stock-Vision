import React from "react";

function OpenAccount() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #001f3f 0%, #003366 100%)",
        padding: "4rem 0",
        width: "100%",
        animation: "backgroundShift 15s ease infinite",
        backgroundSize: "200% 200%",
      }}
      className="w-100"
    >
      <style>
        {`
          @keyframes backgroundShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="container text-center">
        <h1
          className="mb-3"
          style={{
            fontWeight: "700",
            color: "#aad8ff",
            letterSpacing: "1.2px",
            textShadow: "0 1px 3px rgba(0,0,0,0.7)"
          }}
        >
          Open a Stock Vision account
        </h1>
        <p
          style={{
            color: "#c2dfff",
            fontSize: "1.1rem",
            marginBottom: "2rem",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
            textShadow: "0 1px 2px rgba(0,0,0,0.6)"
          }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          type="button"
          className="btn btn-primary fs-5"
          style={{
            width: "200px",
            fontWeight: "700",
            backgroundColor: "#00509e",
            border: "none",
            boxShadow: "0 6px 12px rgba(0, 80, 158, 0.6)",
            borderRadius: "8px",
            transition: "background-color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#003f75";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 63, 117, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#00509e";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 80, 158, 0.6)";
          }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
