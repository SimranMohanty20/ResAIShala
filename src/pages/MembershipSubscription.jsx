import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter a valid email address.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('subscribers') || '[]');

    if (existing.includes(email.trim())) {
      alert('You have already subscribed!');
      return;
    }

    localStorage.setItem('subscribers', JSON.stringify([...existing, email.trim()]));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-green-700 font-semibold mt-4 text-center">
        🎉 Thanks for subscribing! We will keep you updated.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-6">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-900 transition"
        aria-label="Subscribe"
      >
        Subscribe
      </button>
    </form>
  );
};

const MembershipSubscription = () => {
  return (
    <>
      <Navbar />

      {/* Smaller Hero Banner with image + overlay + text */}
      <div
        className="relative h-32 sm:h-40 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold tracking-wide"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d3?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 opacity-80"></div>
        <h1 className="relative z-10 drop-shadow-lg">Membership & Subscription</h1>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 bg-white rounded-lg shadow-xl">
        {/* Intro */}
        <p className="mb-12 text-lg sm:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Join our community to enjoy exclusive benefits, early event access, discounts, and much more.
          Choose the subscription plan that fits your needs and start unlocking premium content today!
        </p>

        {/* Membership Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-800 border-b-4 border-purple-400 inline-block pb-2">
            Membership Benefits
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-gray-800 text-lg list-disc list-inside">
            <li>Access to exclusive content and resources</li>
            <li>Early invitations to events & webinars</li>
            <li>Discounts on workshops and courses</li>
            <li>Networking opportunities with industry professionals</li>
            <li>Monthly newsletter with the latest updates</li>
            <li>Priority customer support</li>
          </ul>
        </section>

        {/* Subscription Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-purple-800 border-b-4 border-purple-400 inline-block pb-2">
            Subscription Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Card */}
            {[
              {
                name: 'Basic Plan',
                price: 'Free',
                description: 'Access to limited content and newsletters.',
                highlight: false,
              },
              {
                name: 'Premium Plan',
                price: '$9.99/month',
                description: 'Full access to all content, events, and exclusive offers.',
                highlight: true,
              },
              {
                name: 'Annual Plan',
                price: '$99.99/year',
                description: 'Save 15% by paying annually, with all Premium benefits included.',
                highlight: false,
              },
            ].map(({ name, price, description, highlight }) => (
              <div
                key={name}
                className={`relative rounded-xl p-8 shadow-lg flex flex-col justify-between border ${
                  highlight ? 'border-purple-600 bg-purple-50' : 'border-gray-200 bg-white'
                } hover:shadow-2xl transition-shadow duration-300`}
                aria-label={`${name} subscription plan`}
              >
                {highlight && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                    Popular
                  </div>
                )}
                <div>
                  <h3 className={`text-2xl font-extrabold mb-3 ${highlight ? 'text-purple-700' : 'text-gray-900'}`}>
                    {name}
                  </h3>
                  <p className={`text-xl font-semibold mb-4 ${highlight ? 'text-purple-800' : 'text-gray-700'}`}>
                    {price}
                  </p>
                  <p className={`text-gray-700 leading-relaxed`}>{description}</p>
                </div>
                <button
                  className={`mt-8 py-3 rounded-md w-full font-semibold transition ${
                    highlight
                      ? 'bg-purple-700 text-white hover:bg-purple-900'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  } focus:outline-none focus:ring-4 focus:ring-purple-300`}
                  onClick={() => alert(`Subscribe to the ${name} coming soon!`)}
                  aria-label={`Subscribe to the ${name}`}
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-purple-800 border-b-4 border-purple-400 inline-block pb-2">
            Get in Touch
          </h2>
          <p className="mb-6 text-gray-700 text-lg">
            For questions or custom plans, please visit our{' '}
            <a href="/contact" className="text-purple-700 underline hover:text-purple-900">
              Contact Us
            </a>{' '}
            page, follow us on{' '}
            <a
              href="https://www.linkedin.com/company/resaishala/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 underline hover:text-purple-900"
            >
              LinkedIn
            </a>
            , or email us at{' '}
            <a href="mailto:director@resaishala.com" className="text-purple-700 underline hover:text-purple-900">
              director@resaishala.com
            </a>
            .
          </p>

          {/* New Subscribe Form */}
          <SubscribeForm />
        </section>
      </div>

      <div className="h-20"></div> {/* bottom spacing */}
    </>
  );
};

export default MembershipSubscription;
