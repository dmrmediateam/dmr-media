'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <footer className="bg-off-black text-off-white border-t border-gray-dark">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
                <Link href="/" className="inline-block mb-6">
                  <span className="text-2xl font-serif text-off-white tracking-wide">
                    DMR <span className="italic">Media</span>
                  </span>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Luxury Real Estate Marketing Agency specializing in Google marketing, SEO, and Google Ads for premium properties.
                </p>
                <div className="text-sm text-gray-400">
                  <div>team@dmrmedia.org</div>
                  <div>+1 (920) 940-4049</div>
                </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-off-white uppercase tracking-wider mb-6">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-off-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-off-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-off-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-gray-400 hover:text-off-white transition-colors text-sm">
                  Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-off-white uppercase tracking-wider mb-6">Services</h4>
            <div className="space-y-4 text-sm text-gray-400">
                  <div>SEO Optimization</div>
                  <div>Google Ads Management</div>
                  <div>Real Estate Marketing</div>
                  <div>Content Strategy</div>
            </div>
            <div className="mt-6">
              <h5 className="text-xs font-semibold text-off-white uppercase tracking-wider mb-4">Connect</h5>
              <div className="flex space-x-3">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/90571937/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Connect with DMR Media on LinkedIn"
                  className="w-8 h-8 border border-gray-600 hover:border-off-white hover:bg-off-white text-white hover:text-off-black transition-all text-sm font-semibold flex items-center justify-center"
                >
                  in
                </a>
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/andrewrohmtcm/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow DMR Media on Instagram"
                  className="w-8 h-8 border border-gray-600 hover:border-off-white hover:bg-off-white text-white hover:text-off-black transition-all text-sm font-semibold flex items-center justify-center"
                >
                  @
                </a>
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@AndrewRohmcm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Subscribe to DMR Media on YouTube"
                  className="w-8 h-8 border border-gray-600 hover:border-off-white hover:bg-off-white text-white hover:text-off-black transition-all text-sm font-semibold flex items-center justify-center"
                >
                  ▶
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-xs text-gray-400 leading-relaxed text-center">
            <p>
              © {currentYear} DMR <span className="italic">Media</span>. All services and strategies are customized for luxury real estate marketing.
              Results may vary based on market conditions and campaign execution.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="text-gray-400 text-xs">
                  © {currentYear} DMR <span className="italic">Media</span>. All rights reserved.
                </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
