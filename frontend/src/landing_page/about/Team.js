import React from "react";
import { motion } from "framer-motion";

function Team() {
  return (
    <div className="container mt-5 pt-5 border-top">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="row text-center"
      >
        <h2 className="fw-bold mb-4">Meet the Team</h2>
        <p className="text-muted fs-5">
          Built by passionate minds driven to simplify finance and empower users
          through clean, powerful technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="row d-flex align-items-center mt-4"
      >
        <div className="col-md-6 p-4">
          <blockquote className="blockquote text-dark">
            <p className="mb-3 fs-4">
              "A platform is only as good as the people behind it."
            </p>
            <footer className="blockquote-footer text-muted">
              The Stock Vision Team
            </footer>
          </blockquote>
        </div>

        <div className="col-md-6 p-4 text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <p>
            Stock Vision is the product of a collaborative team focused on crafting
            tools that make financial decision-making more accessible.
          </p>
          <p>
            Our developers, designers, and analysts worked closely to ensure
            everything from the interface to the backend delivers clarity and ease.
          </p>
          <p>
            This isn't just a project — it's our commitment to innovation and impact.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Team;
