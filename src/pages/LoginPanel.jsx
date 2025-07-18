import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const LoginPanel = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && password !== confirmPassword)) {
      alert(isLogin ? 'Enter valid credentials' : 'Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const endpoint = isLogin
        ? 'http://localhost/resaishala-backend/login.php'
        : 'http://localhost/resaishala-backend/register.php';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // You can show a toast or redirect here
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      alert('Server error: Could not connect to backend');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white font-[Poppins] px-6">
        <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            {isLogin ? 'Login to ResAIShala' : 'Register on ResAIShala'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            />

            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold shadow-md"
            >
              {loading
                ? isLogin
                  ? 'Logging in...'
                  : 'Registering...'
                : isLogin
                ? 'Login'
                : 'Register'}
            </button>
          </form>

          <p className="mt-8 text-center text-lg text-gray-700 font-medium">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={handleSwitch}
              className="text-purple-700 font-semibold underline hover:text-purple-800 transition"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPanel;
