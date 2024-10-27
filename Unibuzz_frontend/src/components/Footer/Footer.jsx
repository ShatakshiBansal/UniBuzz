import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        {/* Logo and Contact */}
        <div>
          <div className="mb-4">
            <img src="/path-to-logo.png" alt="UniBuzz Logo" className="w-16 mb-2" />
            <h4 className="text-lg font-semibold">UniBuzz</h4>
            <p className="text-sm text-gray-600">Connect. Engage. Empower.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-gray-600">unibuzz.co.in@gmail.com</p>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h4 className="font-semibold mb-4">Terms & Conditions</h4>
          <a href="/privacy-policy" className="text-gray-600 underline">
            Privacy Policy
          </a>
        </div>

        {/* Follow */}
        <div>
          <h4 className="font-semibold mb-4">Follow</h4>
          <p className="text-gray-600 mb-4">
            Stay updated with the latest news, events, and resources for student success.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email *"
              className="border border-gray-300 p-2 rounded-l w-full"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 rounded-r"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-4">Follow us</h4>
          <ul>
            <li className="mb-2">
              <a href="https://www.linkedin.com" className="text-gray-600 hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.instagram.com" className="text-gray-600 hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="text-gray-600 hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
