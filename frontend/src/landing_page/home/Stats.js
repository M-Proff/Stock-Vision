import React from "react";
import { motion } from "framer-motion";

function Stats() {
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
      <div className="row">
        <motion.div
          className="col-12 col-md-8 p-5"
          style={{ minHeight: "420px", textAlign: "center" }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontWeight: "800", fontSize: "2.8rem", marginBottom: "1.2rem" }}>
            Trust with confidence
          </h1>

          {[
            {
              title: "Customer-first always",
              text: "Over 1 crore customers trust Stock Vision with their investments.",
            },
            {
              title: "No spam or gimmicks",
              text: "Quality apps with no annoying notifications. Use at your own pace.",
            },
            {
              title: "The Stock Vision ecosystem",
              text: "More than just an app — a full ecosystem to suit your financial needs.",
            },
            {
              title: "Do better with money",
              text: "Tools and initiatives that help you grow your money smarter.",
            },
          ].map(({ title, text }, i) => (
            <motion.div
              key={title}
              style={{ marginTop: "1.8rem" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 * i }}
            >
              <h2 style={{ fontWeight: "700", fontSize: "1.8rem" }}>{title}</h2>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "#ddd" }}>{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="col-12 col-md-4 d-flex justify-content-center align-items-center mt-4 mt-md-0"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.5))" }}
        >
          <img
            src="media/images/ecosystem.png"
            alt="Stock Vision Ecosystem"
            style={{ maxWidth: "60%", height: "auto", borderRadius: "12px" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Stats;
