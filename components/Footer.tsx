'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-950/80 dark:to-gray-900 border-t border-gray-200/70 dark:border-gray-800/70">
      {/* Optional subtle decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* Left - Brand & tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Carl Vincent G. Platil
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
              UI/UX Designer & Front-End Developer crafting intuitive, impactful digital experiences.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
              Open to collaborations, freelance, and exciting opportunities.
            </p>
          </div>

      

          {/* Right - Social / Connect */}
          <div className="text-right md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-6 mb-6">
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=carl.platil@urios.edu.ph&su=Portfolio%20Inquiry&body=Hi%20Carl,%0A%0AI’m%20reaching%20out%20about%20your%20portfolio.%20Please%20let%20me%20know%20a%20good%20time%20to%20connect.%0A%0ARegards,%0A[Your%20Name]"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
  aria-label="Email via Gmail"
>
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
</a>

<a
  href="https://github.com/carlplatil11"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
  aria-label="GitHub"
>
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.57.69.49C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
</a>


          
            

              {/* Add more if needed: Dribbble, Behance, Twitter/X, etc. */}
            </div>

          </div>
        </div>

        {/* Copyright & bottom line */}
        <div className="mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-800/50 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>© {currentYear} Carl Vincent G. Platil. All rights reserved.</p>
          <p className="mt-1">
            Crafted with passion for pixel-perfect experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}