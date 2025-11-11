import React, { useState } from 'react';
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ride with us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund & Cancellation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>

            <p className="text-sm text-gray-400 mb-3">Receive exclusive offers in your mailbox</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-black rounded font-semibold hover:bg-yellow-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            {subscribed && <p className="text-green-400 text-xs mt-2">Thanks for subscribing!</p>}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>All rights Reserved © Your Company 2024</p>
          <p>Made with ❤️ by Themesagon</p>
        </div>
      </div>
    </footer>
  );
};
