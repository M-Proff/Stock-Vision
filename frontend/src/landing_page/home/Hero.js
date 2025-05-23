import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      style={{
        minHeight: "80vh",
        width: "100%",
        background: `linear-gradient(270deg, #0a1f44, #122a68, #0a1f44)`,
        backgroundSize: "600% 600%",
        animation: "gradientShift 20s ease infinite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: "900px",
          width: "90%",
          textAlign: "center",
          padding: "20px",
          color: "white",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <img
          src="/media/images/homeHero.png"
          alt="Hero"
          className="img-fluid mb-4"
          style={{ maxHeight: "300px", objectFit: "contain", margin: "0 auto" }}
        />

        <motion.h1
          className="fw-bold mb-3"
          style={{ fontSize: "2.8rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Invest in Everything
        </motion.h1>

        <motion.p
          className="mb-4"
          style={{ fontSize: "1.2rem", color: "#ccc" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Your all-in-one platform for stocks, derivatives, mutual funds, and more.
        </motion.p>

        <motion.button
          className="btn btn-lg px-5 py-3"
          style={{
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
            backgroundColor: "#5597ff",
            color: "white",
            border: "2px solid #2e55cc",
            fontSize: "1.3rem",
            boxShadow: "0 0 15px #5597ff99",
            transition: "all 0.3s ease",
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#7ab8ff",
            borderColor: "#4a7be0",
            boxShadow: "0 0 25px #7ab8ffcc",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up Now
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Hero;
