import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="container mt-5 pt-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="row justify-content-center text-center"
      >
        <h1 className="fs-2 fw-bold mb-4">
          Pioneering affordable, technology-driven trading solutions
        </h1>
        <p className="text-muted fs-5 px-md-5">
          At Stock Vision, our mission is to break barriers in financial trading by leveraging
          cutting-edge technology to make investing accessible, affordable, and empowering for everyone.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="row mt-5 border-top pt-4"
        style={{ lineHeight: "1.8", fontSize: "1.2em", color: "#6c757d" }}
      >
        <div className="col-md-6 px-4">
          <p>
            Since our inception, we have strived to eliminate cost and technology barriers
            in the stock market, delivering powerful tools to millions of users.
          </p>
          <p>
            Our platform processes millions of trades daily, driven by a passionate team
            dedicated to innovation and transparency.
          </p>
        </div>
        <div className="col-md-6 px-4">
          <p>
            Beyond trading, we foster financial education and community through open initiatives,
            ensuring every user can confidently navigate the markets.
          </p>
          <p>
            Join us as we continue to grow, innovate, and redefine investing for the modern era.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
