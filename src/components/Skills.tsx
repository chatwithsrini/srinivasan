import React, { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const expertise = [
    {
      category: "Mobile Development",
      icon: "📱",
      skills: [
        "React Native",
        "JavaScript",
        "Firebase",
        "Redux",
        "Cross-platform",
      ],
    },
    {
      category: "Frontend Development",
      icon: "⚛️",
      skills: ["React", "TypeScript", "Electron", "Tailwind CSS", "Modern Web"],
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Python", "MongoDB", "REST APIs", "Microservices"],
    },
    {
      category: "Enterprise Development",
      icon: "🏢",
      skills: [
        ".NET",
        "C#",
        "SQL Server",
        "Legacy Modernization",
        "Enterprise Architecture",
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      skills: ["OpenAI", "LangChain", "Python", "Machine Learning", "GenAI"],
    },
    {
      category: "Cloud & Infrastructure",
      icon: "☁️",
      skills: ["AWS", "MCP Servers", "Docker", "Kubernetes", "Agentic AI"],
    },
  ];

  const technologies = [
    {
      name: "React Native",
      category: "Mobile",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1 0-4.472 2.236 2.236 0 0 1 2.235 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
        </svg>
      ),
    },
    {
      name: "React",
      category: "Frontend",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1 0-4.472 2.236 2.236 0 0 1 2.235 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
        </svg>
      ),
    },
    {
      name: "Electron",
      category: "Desktop",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          <path d="M12 4.5c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm0 13.5c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
          <path d="M12 7.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
        </svg>
      ),
    },
    {
      name: "Python",
      category: "Backend",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.25.18l.9.2.73.26.59.3.45.34.34.36.25.34.16.3.1.24.04.16.02.08v.27l-.04.24-.1.2-.16.18-.25.15-.34.12-.45.1-.59.08-.73.05-.9.02H8.77l-.9-.02-.73-.05-.59-.08-.45-.1-.34-.12-.25-.15-.16-.18-.1-.2-.04-.24V2.1l.02-.08.04-.16.1-.24.16-.3.25-.34.34-.36.45-.34.59-.3.73-.26.9-.2H14.25z" />
          <path d="M8.77 23.82l-.9-.2-.73-.26-.59-.3-.45-.34-.34-.36-.25-.34-.16-.3-.1-.24-.04-.16-.02-.08v-.27l.04-.24.1-.2.16-.18.25-.15.34-.12.45-.1.59-.08.73-.05.9-.02h5.48l.9.02.73.05.59.08.45.1.34.12.25.15.16.18.1.2.04.24v.27l-.02.08-.04.16-.1.24-.16.3-.25.34-.34.36-.45.34-.59.3-.73.26-.9.2H8.77z" />
          <path d="M12 6.75c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
          <path d="M12 13.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    {
      name: ".NET",
      category: "Enterprise",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
        </svg>
      ),
    },
    {
      name: "OpenAI",
      category: "AI",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.763 17.63c-1.647 0-2.94-.75-2.94-2.12 0-1.37 1.293-2.12 2.94-2.12.647 0 1.2.15 1.65.45l.9-1.35c-.75-.45-1.65-.75-2.55-.75-2.25 0-4.05 1.5-4.05 3.75s1.8 3.75 4.05 3.75c.9 0 1.8-.3 2.55-.75l-.9-1.35c-.45.3-1.003.45-1.65.45z" />
          <path d="M12.75 15.38h-1.5v-6h1.5v6z" />
          <path d="M15.75 15.38h-1.5v-6h1.5v6z" />
          <path d="M18.75 15.38h-1.5v-6h1.5v6z" />
          <path d="M21.75 15.38h-1.5v-6h1.5v6z" />
          <path
            d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      ),
    },
    {
      name: "Docker",
      category: "DevOps",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.248-1.72-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.938-.089 2.835-.266a11.192 11.192 0 003.652-1.495c1.06-.665 1.963-1.524 2.68-2.55.552-.803 1.004-1.66 1.345-2.551.048-.128.09-.259.13-.391.408.006.83.005 1.23-.062.451-.078.803-.21 1.076-.396.297-.211.543-.47.728-.772l.133-.21-.191-.303c-.03-.047-.363-.568-.676-.693z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="skills"
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
        className="absolute top-20 left-20 w-24 h-24 rounded-full opacity-15 animate-particle-float"
        style={{ backgroundColor: "var(--accent-color)", animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-16 h-16 opacity-10 animate-particle-float"
        style={{
          backgroundColor: "var(--accent-light)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animationDelay: "1s",
        }}
      ></div>
      <div
        className="absolute top-1/3 right-10 w-8 h-8 opacity-10 animate-particle-float"
        style={{
          backgroundColor: "var(--text-secondary)",
          borderRadius: "20%",
          animationDelay: "1.5s",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 uppercase font-mono animate-fade-in-up"
            style={{
              color: "var(--text-primary)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              animationDelay: "0.2s",
            }}
          >
            SKILLS & TECHNOLOGIES
          </h2>
          <div
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-mono border-t border-b py-3 sm:py-4 animate-fade-in-up px-4"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--accent-color)",
              animationDelay: "0.4s",
            }}
          >
            <span className="block sm:hidden">
              ═══ A COMPREHENSIVE ARSENAL ═══
            </span>
            <span className="block sm:hidden">
              ═══ OF MODERN TECHNOLOGIES ═══
            </span>
            <span className="hidden sm:block">
              ═══ A COMPREHENSIVE ARSENAL OF MODERN TECHNOLOGIES ═══
            </span>
          </div>
        </div>

        {/* Expertise Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {expertise.map((area, index) => (
            <div
              key={area.category}
              className="p-4 sm:p-6 rounded-lg shadow-2xl"
              style={{
                backgroundColor: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="text-center mb-3 sm:mb-4">
                <div
                  className="text-3xl sm:text-4xl mb-2 sm:mb-3"
                  style={{ filter: "grayscale(100%)" }}
                >
                  {area.icon}
                </div>
                <h3
                  className="text-base sm:text-lg font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--accent-color)" }}
                >
                  {area.category}
                </h3>
              </div>
              <div className="space-y-1 sm:space-y-2">
                {area.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center py-1.5 sm:py-2 px-2 sm:px-3 rounded border font-mono"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="text-center">
          <h3
            className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 uppercase tracking-wider font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            ═══ TECHNOLOGY STACK ═══
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center space-y-2 sm:space-y-3"
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-xl transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    color: "var(--accent-color)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    {tech.icon}
                  </div>
                </div>
                <div className="text-center">
                  <span
                    className="text-xs font-bold uppercase tracking-wider font-mono"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {tech.name}
                  </span>
                  <div
                    className="text-xs uppercase tracking-wider font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {tech.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
