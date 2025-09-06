import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "15", label: "Projects Delivered" },
    { number: "10", label: "Happy Clients" },
  ];

  return (
    <section
      id="home"
      className="flex items-center justify-center relative overflow-hidden min-h-screen"
      style={{
        background: "var(--bg-primary)",
      }}
    >
      {/* Background Vintage Particles - Hidden on mobile and tablet */}
      <div className="hidden lg:block">
        <div
          className="absolute top-32 left-10 w-20 h-20 rounded-full opacity-20 animate-particle-float"
          style={{
            backgroundColor: "var(--accent-color)",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="absolute top-1/4 right-20 w-16 h-16 opacity-15 animate-particle-float"
          style={{
            backgroundColor: "var(--accent-light)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "0.8s",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 opacity-10 animate-particle-float"
          style={{
            backgroundColor: "var(--text-secondary)",
            borderRadius: "20%",
            animationDelay: "1.2s",
          }}
        ></div>
        <div
          className="absolute top-32 left-1/3 w-4 h-4 opacity-10"
          style={{
            backgroundColor: "var(--accent-color)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-32 right-1/4 w-6 h-6 opacity-10 animate-particle-float"
          style={{
            backgroundColor: "var(--accent-light)",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            animationDelay: "1.5s",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full">
        <div className="space-y-8">
          {/* Main Heading */}
          <div
            className="mb-6 sm:mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 uppercase tracking-wider leading-tight"
              style={{
                color: "var(--text-primary)",
                fontFamily: "monospace",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              <span className="block">TRANSFORMING IDEAS INTO</span>
              <span className="block" style={{ color: "var(--accent-color)" }}>
                DIGITAL REALITY
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-6 sm:mb-8 uppercase tracking-widest border-t border-b py-3 sm:py-4 animate-fade-in-up"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--accent-color)",
              fontFamily: "monospace",
              animationDelay: "0.4s",
            }}
          >
            <span className="block sm:hidden">
              ═══ FULL-STACK DEVELOPER ═══
            </span>
            <span className="block sm:hidden">═══ AI ENTHUSIAST ═══</span>
            <span className="block sm:hidden">═══ DIGITAL ARCHITECT ═══</span>
            <span className="hidden sm:block">
              ═══ FULL-STACK DEVELOPER • AI ENTHUSIAST • DIGITAL ARCHITECT ═══
            </span>
          </div>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-mono animate-fade-in-up px-4"
            style={{
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              animationDelay: "0.6s",
            }}
          >
            <span className="block sm:hidden">
              {"> WITH 8+ YEARS OF EXPERTISE, I CREATE"}
            </span>
            <span className="block sm:hidden">
              {"> POWERFUL WEB APPLICATIONS, MOBILE APPS,"}
            </span>
            <span className="block sm:hidden">
              {"> AND AI-DRIVEN SOLUTIONS. FROM CONCEPT"}
            </span>
            <span className="block sm:hidden">
              {"> TO DEPLOYMENT, I BRING YOUR VISION"}
            </span>
            <span className="block sm:hidden">
              {"> TO LIFE WITH MODERN TECHNOLOGIES."}
            </span>
            <span className="hidden sm:block">
              {
                "> WITH 8+ YEARS OF EXPERTISE, I CREATE POWERFUL WEB APPLICATIONS,"
              }
            </span>
            <span className="hidden sm:block">
              {
                "> MOBILE APPS, AND AI-DRIVEN SOLUTIONS. FROM CONCEPT TO DEPLOYMENT,"
              }
            </span>
            <span className="hidden sm:block">
              {"> I BRING YOUR VISION TO LIFE WITH MODERN TECHNOLOGIES."}
            </span>
          </p>

          {/* Statistics */}
          <div
            className="mb-8 sm:mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 sm:p-6 rounded-lg shadow-2xl"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-mono"
                    style={{ color: "var(--accent-color)" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs sm:text-sm uppercase tracking-wider font-bold font-mono"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8 sm:mb-12">
            <p
              className="text-sm sm:text-base md:text-lg font-bold mb-6 sm:mb-8 uppercase tracking-wider font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              ═══ TECH ARSENAL ═══
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="group flex flex-col items-center space-y-2 sm:space-y-3">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg shadow-xl"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--accent-color)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1 0-4.472 2.236 2.236 0 0 1 2.235 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
                  </svg>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  REACT
                </span>
              </div>

              <div className="group flex flex-col items-center space-y-2 sm:space-y-3">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg shadow-xl"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--accent-color)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.25.18l.9.2.73.26.59.3.45.34.34.36.25.34.16.3.1.24.04.16.02.08v.27l-.04.24-.1.2-.16.18-.25.15-.34.12-.45.1-.59.08-.73.05-.9.02H8.77l-.9-.02-.73-.05-.59-.08-.45-.1-.34-.12-.25-.15-.16-.18-.1-.2-.04-.24V2.1l.02-.08.04-.16.1-.24.16-.3.25-.34.34-.36.45-.34.59-.3.73-.26.9-.2H14.25z" />
                    <path d="M8.77 23.82l-.9-.2-.73-.26-.59-.3-.45-.34-.34-.36-.25-.34-.16-.3-.1-.24-.04-.16-.02-.08v-.27l.04-.24.1-.2-.16.18-.25.15-.34.12-.45.1-.59.08-.73.05-.9.02h5.48l.9.02.73.05.59.08.45.1.34.12.25.15.16.18.1.2.04.24v.27l-.02.08-.04.16-.1.24-.16.3-.25.34-.34.36-.45.34-.59.3-.73.26-.9.2H8.77z" />
                    <path d="M12 6.75c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
                    <path d="M12 13.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  PYTHON
                </span>
              </div>

              <div className="group flex flex-col items-center space-y-2 sm:space-y-3">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg shadow-xl"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--accent-color)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  JS
                </span>
              </div>

              <div className="group flex flex-col items-center space-y-2 sm:space-y-3">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg shadow-xl"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--accent-color)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
                  </svg>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  NODE
                </span>
              </div>

              <div className="group flex flex-col items-center space-y-2 sm:space-y-3">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg shadow-xl"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--accent-color)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                  </svg>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  TS
                </span>
              </div>

              <div className="group flex flex-col items-center space-y-2 sm:space-y-3">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg shadow-xl"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--accent-color)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                  </svg>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  MONGO
                </span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wider border-2 rounded-lg transition-all duration-300 hover:scale-105 font-mono text-center"
              style={{
                backgroundColor: "var(--accent-color)",
                color: "var(--bg-primary)",
                borderColor: "var(--accent-color)",
              }}
            >
              [VIEW_PROJECTS]
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wider border-2 rounded-lg transition-all duration-300 hover:scale-105 font-mono text-center"
              style={{
                backgroundColor: "transparent",
                color: "var(--accent-color)",
                borderColor: "var(--accent-color)",
              }}
            >
              [GET_IN_TOUCH]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
