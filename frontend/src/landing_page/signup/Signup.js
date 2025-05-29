import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple form validation and submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill all fields.");
      setSuccess("");
      return;
    }

    // Basic email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Signup successful! Redirecting to dashboard...");

    // Delay redirect so user sees success message
    setTimeout(() => {
      window.location.href = "https://stock-vision-53yg-4tri9g0cl-rishits-projects-f3f9245f.vercel.app/"; // Change this to your dashboard URL
    }, 1500);

    // Reset form after submission
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "3rem auto",
        padding: "2rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "1.5rem", color: "#003366" }}
      >
        Create your Account
      </h2>

      {error && (
        <div
          style={{ color: "#d9534f", marginBottom: "1rem", textAlign: "center" }}
        >
          {error}
        </div>
      )}

      {success && (
        <div
          style={{ color: "#28a745", marginBottom: "1rem", textAlign: "center" }}
        >
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ fontWeight: "600" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ fontWeight: "600" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="form-label"
            style={{ fontWeight: "600" }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{ fontWeight: "700" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
