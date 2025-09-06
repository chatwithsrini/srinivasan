import React, { useState, useEffect } from "react";

interface BottomNavigationProps {
  darkMode: boolean;
}

const BottomNavigation = ({ darkMode }: BottomNavigationProps) => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      id: "home",
      name: "Home",
      href: "#home",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      id: "about",
      name: "About",
      href: "#about",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      id: "skills",
      name: "Skills",
      href: "#skills",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      id: "projects",
      name: "Projects",
      href: "#projects",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
        </svg>
      ),
    },
    {
      id: "contact",
      name: "Contact",
      href: "#contact",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        backgroundColor: "var(--header-bg)",
        backdropFilter: "blur(15px)",
        borderTop: "1px solid var(--border-color)",
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        height: "80px",
      }}
    >
      <div
        className="flex items-center justify-around py-3"
        style={{ minHeight: "80px" }}
      >
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-300 ${
              activeTab === item.id ? "scale-110" : "scale-100"
            }`}
            style={{
              color:
                activeTab === item.id
                  ? "var(--accent-color)"
                  : "var(--text-secondary)",
              backgroundColor:
                activeTab === item.id ? "var(--glass-bg)" : "transparent",
            }}
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
