import React from "react";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(135deg, #0a1f44 0%, #122a68 100%)",
        borderRadius: "16px",
        padding: "3rem",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
        marginTop: "3rem",
      }}
    >
      <motion.div
        className="row justify-content-center text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="col-12 col-md-6 mb-4">
          <h1
            className="fs-2 mb-3"
            style={{ fontWeight: "700", color: "#7ab8ff" }}
          >
            Unbeatable pricing
          </h1>
          <p style={{ color: "#a0c4ff", fontSize: "1.1rem" }}>
            We pioneered discount broking and price transparency. Flat fees, no
            hidden charges.
          </p>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#5597ff",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "color 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#3377ff")}
            onMouseLeave={(e) => (e.target.style.color = "#5597ff")}
          >
            See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </motion.div>

      <div className="row justify-content-center text-center mt-4">
        {[
          {
            price: "₹0",
            desc: "Free equity delivery and\n direct mutual funds",
          },
          {
            price: "₹20",
            desc: "Intraday and F&O",
          },
        ].map(({ price, desc }, i) => (
          <motion.div
            key={price}
            className="col-6 col-md-3 p-4 border mx-2 rounded"
            style={{
              backgroundColor: "#1f2f58",
              borderColor: "#334d9e",
              color: "#b0c4ff",
              cursor: "pointer",
              userSelect: "none",
              whiteSpace: "pre-line",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(86, 139, 255, 0.6)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 * i }}
          >
            <h1 className="mb-3" style={{ color: "#7ab8ff", fontWeight: "700" }}>
              {price}
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.4" }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
