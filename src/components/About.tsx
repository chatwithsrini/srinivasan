import React, { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [aboutRef, aboutVisible] = useScrollAnimation({ threshold: 0.1 });
  const [principlesRef, principlesVisible] = useScrollAnimation({
    threshold: 0.2,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const principles = [
    {
      title: "INNOVATION FIRST",
      description:
        "Embracing cutting-edge technologies to solve complex problems.",
      icon: "💡",
    },
    {
      title: "QUALITY CODE",
      description: "Writing clean, maintainable, and scalable applications.",
      icon: "⚡",
    },
    {
      title: "USER EXPERIENCE",
      description:
        "Creating intuitive interfaces that users love to interact with.",
      icon: "🎯",
    },
    {
      title: "CONTINUOUS LEARNING",
      description: "Staying updated with the latest trends and technologies.",
      icon: "📚",
    },
  ];

  const journey = [
    {
      year: "2018",
      title: "MOBILE INNOVATION PIONEER",
      description:
        "Launched career as React Native Developer, revolutionizing business operations with School ERP, Jewellery shop, and restaurant management apps that streamlined workflows and boosted efficiency.",
    },
    {
      year: "2020",
      title: "HEALTHCARE DIGITAL TRANSFORMATION",
      description:
        "Pioneered telehealth revolution with 'Mediguru' platform and Vera Whole Health mobile app, bringing advanced primary care to millions through cutting-edge React, Electron, and Node.js solutions.",
    },
    {
      year: "2022",
      title: "ENTERPRISE SOLUTION ARCHITECT",
      description:
        "Led digital transformation at Aetna, modernizing legacy health and insurance systems with React and .NET, delivering scalable solutions that improved user experience and operational efficiency.",
    },
    {
      year: "2023",
      title: "AI REVOLUTION CATALYST",
      description:
        "Spearheaded AI integration initiatives, developing intelligent chatbots and automated file processing systems that revolutionized business operations and customer engagement strategies.",
    },
    {
      year: "2025",
      title: "FUTURE-TECH VISIONARY",
      description:
        "Pioneering next-generation AI technologies with AWS MCP Servers, Azure Cloud Services, and Agentic AI systems, building autonomous solutions that will define the future of intelligent automation.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative"
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      {/* Background Vintage Particles */}
      <div
        className="absolute top-32 right-20 w-20 h-20 rounded-full opacity-15 animate-particle-float"
        style={{ backgroundColor: "var(--accent-color)", animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-32 left-20 w-16 h-16 opacity-10 animate-particle-float"
        style={{
          backgroundColor: "var(--accent-light)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animationDelay: "1.2s",
        }}
      ></div>
      <div
        className="absolute top-1/4 left-1/4 w-8 h-8 opacity-10 animate-particle-float"
        style={{
          backgroundColor: "var(--text-secondary)",
          borderRadius: "20%",
          animationDelay: "0.8s",
        }}
      ></div>

      <div
        ref={aboutRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center"
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase font-mono ${
              aboutVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              color: "var(--text-primary)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              animationDelay: "0.2s",
            }}
          >
            ABOUT
          </h2>
          <h3
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 uppercase font-mono ${
              aboutVisible ? "animate-slide-in-up" : "opacity-0"
            }`}
            style={{
              color: "var(--accent-color)",
              animationDelay: "0.4s",
            }}
          >
            SRINIVASAN SEKAR
          </h3>
          <div
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-6 sm:mb-8 border-t border-b py-3 sm:py-4 font-mono animate-fade-in-up px-4"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--accent-color)",
              animationDelay: "0.6s",
            }}
          >
            <span className="block sm:hidden">
              ═══ FULL-STACK DEVELOPER ═══
            </span>
            <span className="block sm:hidden">═══ AI ENTHUSIAST ═══</span>
            <span className="block sm:hidden">═══ DIGITAL INNOVATOR ═══</span>
            <span className="hidden sm:block">
              ═══ FULL-STACK DEVELOPER • AI ENTHUSIAST • DIGITAL INNOVATOR ═══
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - Biography */}
          <div className="space-y-4 sm:space-y-6">
            <div
              className="p-4 sm:p-6 rounded-lg shadow-2xl"
              style={{
                backgroundColor: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <h4
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-wider font-mono"
                style={{ color: "var(--accent-color)" }}
              >
                ▶ BIOGRAPHY
              </h4>
              <div
                className="text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4 font-mono"
                style={{ color: "var(--text-primary)" }}
              >
                <p>
                  {
                    "> A VISIONARY FULL-STACK DEVELOPER WITH 8+ YEARS OF PROVEN EXPERTISE"
                  }
                  {
                    " IN TRANSFORMING BUSINESS IDEAS INTO REVOLUTIONARY DIGITAL SOLUTIONS."
                  }
                  {
                    " FROM HEALTHCARE INNOVATIONS TO AI-POWERED SYSTEMS, I DELIVER"
                  }
                  {" IMPACT-DRIVEN APPLICATIONS THAT RESHAPE INDUSTRIES."}
                </p>
                <p>
                  {
                    "> MY JOURNEY BEGAN WITH REACT NATIVE, BUILDING MOBILE APPS FOR"
                  }
                  {
                    " SCHOOLS, JEWELRY SHOPS, AND RESTAURANTS. EVOLVED INTO CREATING"
                  }
                  {" TELEHEALTH PLATFORMS LIKE MEDIGURU AND VERA WHOLE HEALTH,"}
                  {" REVOLUTIONIZING HEALTHCARE ACCESS AND PATIENT CARE."}
                </p>
                <p>
                  {
                    "> TODAY, I'M PIONEERING THE FUTURE WITH AI-DRIVEN SOLUTIONS,"
                  }
                  {
                    " AWS & AZURE CLOUD ARCHITECTURE, AND AGENTIC AI SYSTEMS. MY MISSION:"
                  }
                  {
                    " BRIDGING THE GAP BETWEEN CUTTING-EDGE TECHNOLOGY AND REAL-WORLD"
                  }
                  {" APPLICATIONS THAT EMPOWER BUSINESSES AND ENHANCE LIVES."}
                </p>
              </div>
            </div>

            {/* Core Principles */}
            <div
              className="p-4 sm:p-6 rounded-lg shadow-2xl"
              style={{
                backgroundColor: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <h4
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-wider font-mono"
                style={{ color: "var(--accent-color)" }}
              >
                ▶ CORE PRINCIPLES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="p-3 sm:p-4 rounded shadow-lg"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded border-2 flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: "var(--glass-bg)",
                          borderColor: "var(--accent-color)",
                          color: "var(--accent-color)",
                        }}
                      >
                        <span className="text-sm sm:text-lg">
                          {principle.icon}
                        </span>
                      </div>
                      <h5
                        className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                        style={{ color: "var(--accent-color)" }}
                      >
                        {principle.title}
                      </h5>
                    </div>
                    <p
                      className="text-xs font-mono leading-relaxed"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div
              className="p-4 sm:p-6 rounded-lg shadow-2xl"
              style={{
                backgroundColor: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <h4
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-wider font-mono"
                style={{ color: "var(--accent-color)" }}
              >
                ▶ KEY ACHIEVEMENTS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded shadow-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--accent-color)",
                        color: "var(--bg-primary)",
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <span className="text-xs sm:text-sm font-bold">8+</span>
                    </div>
                    <span
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                      style={{ color: "var(--text-primary)" }}
                    >
                      YEARS OF EXPERTISE
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded shadow-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--accent-color)",
                        color: "var(--bg-primary)",
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <span className="text-xs sm:text-sm font-bold">15</span>
                    </div>
                    <span
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                      style={{ color: "var(--text-primary)" }}
                    >
                      PROJECTS DELIVERED
                    </span>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded shadow-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--accent-color)",
                        color: "var(--bg-primary)",
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <span className="text-xs sm:text-sm font-bold">10+</span>
                    </div>
                    <span
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                      style={{ color: "var(--text-primary)" }}
                    >
                      HAPPY CLIENTS
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded shadow-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--accent-color)",
                        color: "var(--bg-primary)",
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <span className="text-xs sm:text-sm font-bold">5</span>
                    </div>
                    <span
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                      style={{ color: "var(--text-primary)" }}
                    >
                      INDUSTRIES SERVED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Journey Timeline */}
          <div className="space-y-4 sm:space-y-6">
            <div
              className="p-4 sm:p-6 rounded-lg shadow-2xl"
              style={{
                backgroundColor: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <h4
                className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase tracking-wider font-mono"
                style={{ color: "var(--accent-color)" }}
              >
                ▶ JOURNEY TIMELINE
              </h4>
              <div className="space-y-4 sm:space-y-6">
                {journey.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div
                      className="w-16 h-12 sm:w-20 sm:h-16 flex items-center justify-center rounded border-2 flex-shrink-0"
                      style={{
                        backgroundColor:
                          index === journey.length - 1
                            ? "var(--accent-color)"
                            : "var(--bg-secondary)",
                        borderColor: "var(--accent-color)",
                        color:
                          index === journey.length - 1
                            ? "var(--bg-primary)"
                            : "var(--accent-color)",
                      }}
                    >
                      <span className="text-xs sm:text-sm font-bold font-mono">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5
                        className="text-sm sm:text-base font-bold mb-1 sm:mb-2 uppercase tracking-wider font-mono"
                        style={{ color: "var(--accent-color)" }}
                      >
                        {milestone.title}
                      </h5>
                      <p
                        className="text-xs sm:text-sm font-mono leading-relaxed"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a
                href="#contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wider border-2 rounded-lg transition-all duration-300 hover:scale-105 font-mono text-sm sm:text-base"
                style={{
                  backgroundColor: "var(--accent-color)",
                  color: "var(--bg-primary)",
                  borderColor: "var(--accent-color)",
                }}
              >
                [LET'S_COLLABORATE]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
