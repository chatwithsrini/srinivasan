import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-12 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      {/* Background Vintage Particles */}
      <div
        className="absolute top-4 left-10 w-8 h-8 rounded-full opacity-10 animate-particle-float"
        style={{ backgroundColor: "var(--accent-color)", animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-8 right-20 w-6 h-6 rounded-full opacity-15 animate-particle-float"
        style={{ backgroundColor: "var(--accent-light)", animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-4 left-1/4 w-4 h-4 rounded-full opacity-20 animate-particle-float"
        style={{ backgroundColor: "var(--accent-dark)", animationDelay: "4s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <h3
              className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-wider font-mono"
              style={{ color: "var(--text-primary)" }}
            >
              SRINIVASAN SEKAR
            </h3>
            <p
              className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-mono"
              style={{ color: "var(--text-secondary)" }}
            >
              {"> FULL-STACK DEVELOPER • AI ENTHUSIAST • DIGITAL ARCHITECT"}
              <br />
              {
                "> WITH 8+ YEARS OF EXPERTISE, I CREATE POWERFUL WEB APPLICATIONS,"
              }
              <br />
              {
                "> MOBILE APPS, AND AI-DRIVEN SOLUTIONS THAT MAKE A REAL DIFFERENCE."
              }
            </p>

            {/* Social Links */}
            <div className="flex space-x-2 sm:space-x-3">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  href: "https://github.com/chatwithsrini",
                  name: "GitHub",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  href: "https://www.linkedin.com/in/s-srinivasan90/",
                  name: "LinkedIn",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ),
                  href: "https://twitter.com/srinivasansekar",
                  name: "Twitter",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                  href: "mailto:s.srinivasan90@hotmail.com",
                  name: "Email",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--accent-color)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                  title={social.name}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3
              className="text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wider font-mono"
              style={{ color: "var(--text-primary)" }}
            >
              ▶ QUICK LINKS
            </h3>
            <nav className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-xs sm:text-sm transition-all duration-300 hover:translate-x-2 font-mono uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Key Achievements */}
          <div>
            <h3
              className="text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wider font-mono"
              style={{ color: "var(--text-primary)" }}
            >
              ▶ KEY ACHIEVEMENTS
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span
                  className="text-xl sm:text-2xl font-bold font-mono"
                  style={{ color: "var(--accent-color)" }}
                >
                  8+
                </span>
                <span
                  className="text-xs sm:text-sm font-mono uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  YEARS EXPERIENCE
                </span>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <span
                  className="text-xl sm:text-2xl font-bold font-mono"
                  style={{ color: "var(--accent-color)" }}
                >
                  15
                </span>
                <span
                  className="text-xs sm:text-sm font-mono uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  PROJECTS DELIVERED
                </span>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <span
                  className="text-xl sm:text-2xl font-bold font-mono"
                  style={{ color: "var(--accent-color)" }}
                >
                  10
                </span>
                <span
                  className="text-xs sm:text-sm font-mono uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  HAPPY CLIENTS
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3
              className="text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wider font-mono"
              style={{ color: "var(--text-primary)" }}
            >
              ▶ CONTACT
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <a
                  href="mailto:s.srinivasan90@hotmail.com"
                  className="text-xs sm:text-sm transition-all duration-300 hover:text-accent font-mono"
                  style={{ color: "var(--text-secondary)" }}
                >
                  s.srinivasan90@hotmail.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+919843567588"
                  className="text-xs sm:text-sm transition-all duration-300 hover:text-accent font-mono"
                  style={{ color: "var(--text-secondary)" }}
                >
                  +91 (984) 356-7588
                </a>
              </div>
              <div>
                <p
                  className="text-xs sm:text-sm font-mono uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  CHENNAI, TAMILNADU, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div
          className="pt-6 sm:pt-8 border-t flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p
            className="text-xs sm:text-sm mb-4 md:mb-0 font-mono uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            © 2025 SRINIVASAN SEKAR. ALL RIGHTS RESERVED.
          </p>
          <p
            className="text-xs sm:text-sm font-mono uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            BUILT WITH REACT, VITE, AND TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
