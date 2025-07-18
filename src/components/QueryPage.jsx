import React, { useState } from "react";
import Navbar from "../components/Navbar";

const QueryLoginPanel = () => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("query"); // 'query' or 'login'

  const handleQueryChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLoginChange = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost/resaishala-backend/submit_query.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Your query has been received! Client ID will be sent to your email.");
        setForm({ email: "", message: "" });
        setActiveTab("login");
        setLoginForm({ email: form.email, password: "" });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      alert("Server error: Could not connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!loginForm.email || !loginForm.password) {
      alert("Please enter both email and Client ID.");
      return;
    }

    alert("🟢 Logged in successfully.");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-20 px-6">
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-3xl p-10 border border-purple-100">
          <h2 className="text-3xl font-bold text-purple-800 mb-2 text-center">
            ResAIShala Client Access
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Send your query to become a client. We'll provide login credentials.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setActiveTab("query")}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeTab === "query"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              📩 Send Query
            </button>
            <button
              onClick={() => setActiveTab("login")}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeTab === "login"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              🔐 Already a Client? Login
            </button>
          </div>

          {/* Query Form */}
          {activeTab === "query" && (
            <form onSubmit={handleQuerySubmit} className="space-y-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleQueryChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleQueryChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-purple-700 transition"
              >
                {loading ? "Sending..." : "Send Query"}
              </button>
            </form>
          )}

          {/* Login Form */}
          {activeTab === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={loginForm.email}
                onChange={handleLoginChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <input
                type="password"
                name="password"
                placeholder="Enter Client ID (Password)"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-purple-700 transition"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default QueryLoginPanel;
