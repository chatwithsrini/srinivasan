import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// @ts-ignore
import logoLight from "../assets/logo.png";
// @ts-ignore
import logoDark from "../assets/logo-dark.png";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      console.log(
        "Header scroll position:",
        scrollTop,
        "isScrolled:",
        scrollTop > 50
      );
    };

    const forceHeaderFixed = () => {
      const header = document.querySelector(".header-fixed") as HTMLElement;
      if (header) {
        header.style.position = "fixed";
        header.style.top = "0px";
        header.style.left = "0px";
        header.style.right = "0px";
        header.style.zIndex = "999999";
        header.style.width = "100%";
        header.style.margin = "0";
        header.style.padding = "0";
      }
    };

    forceHeaderFixed();
    window.addEventListener("scroll", () => {
      handleScroll();
      forceHeaderFixed();
    });
    window.addEventListener("resize", forceHeaderFixed);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", forceHeaderFixed);
    };
  }, []);

  return (
    <div
      className="header-fixed"
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        width: "100%",
        height: "80px",
        zIndex: 99999,
        backgroundColor: "var(--header-bg)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid var(--border-color)",
        boxShadow: isScrolled ? "var(--shadow-strong)" : "var(--shadow-medium)",
        transition: "all 0.3s ease",
        display: "block",
        margin: "0",
        padding: "0",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Mobile/Tablet Layout */}
          <div className="flex items-center justify-between w-full md:hidden">
            {/* Logo - Centered */}
            <div className="flex-1 flex justify-center">
              {location.pathname === "/blogs" ? (
                <Link to="/#home" className="flex items-center justify-center">
                  <img
                    src={darkMode ? logoDark : logoLight}
                    alt="Logo"
                    className="object-contain"
                    style={{
                      height: "60px",
                      maxWidth: "190px",
                    }}
                  />
                </Link>
              ) : (
                <a href="#home" className="flex items-center justify-center">
                  <img
                    src={darkMode ? logoDark : logoLight}
                    alt="Logo"
                    className="object-contain"
                    style={{
                      height: "60px",
                      maxWidth: "160px",
                    }}
                  />
                </a>
              )}
            </div>

            {/* Theme Toggle - Right Side */}
            <div className="flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: "var(--glass-bg)",
                  color: "var(--text-primary)",
                }}
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center w-full">
            {/* Logo - 25% */}
            <div
              className="flex items-center justify-center"
              style={{ width: "25%" }}
            >
              {location.pathname === "/blogs" ? (
                <Link
                  to="/#home"
                  className="flex items-center justify-center w-full h-full"
                >
                  <img
                    src={darkMode ? logoDark : logoLight}
                    alt="Logo"
                    className="object-contain"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "80px",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              ) : (
                <a
                  href="#home"
                  className="flex items-center justify-center w-full h-full"
                >
                  <img
                    src={darkMode ? logoDark : logoLight}
                    alt="Logo"
                    className="object-contain"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "80px",
                      maxWidth: "100%",
                    }}
                  />
                </a>
              )}
            </div>

            {/* Desktop Navigation - 65% */}
            <nav
              className="flex justify-center space-x-8"
              style={{ width: "65%" }}
            >
              {[
                {
                  name: "Home",
                  href: "#home",
                  icon: (
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                  ),
                },
                {
                  name: "About",
                  href: "#about",
                  icon: (
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  ),
                },
                {
                  name: "Skills",
                  href: "#skills",
                  icon: (
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ),
                },
                {
                  name: "Projects",
                  href: "#projects",
                  icon: (
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                    </svg>
                  ),
                },
                {
                  name: "Blogs",
                  href: "/blogs",
                  icon: (
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  ),
                },
                {
                  name: "Contact",
                  href: "#contact",
                  icon: (
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                },
              ].map((item) => {
                if (item.name === "Blogs") {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base font-bold uppercase flex items-center hover-scale transition-all duration-300"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  );
                } else {
                  // If we're on the blogs page, use Link to navigate to home with hash
                  if (location.pathname === "/blogs") {
                    return (
                      <Link
                        key={item.name}
                        to={`/${item.href}`}
                        className="text-base font-bold uppercase flex items-center hover-scale transition-all duration-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    );
                  } else {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-bold uppercase flex items-center hover-scale transition-all duration-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.icon}
                        {item.name}
                      </a>
                    );
                  }
                }
              })}
            </nav>

            {/* Theme Toggle - 10% */}
            <div
              className="flex items-center justify-end"
              style={{ width: "10%" }}
            >
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: "var(--glass-bg)",
                  color: "var(--text-primary)",
                }}
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
