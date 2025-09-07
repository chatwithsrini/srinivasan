import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SCHOOL ERP SYSTEM",
      category: "Mobile Dev",
      description:
        "Revolutionary educational management platform that digitized entire school operations, streamlining student enrollment, academic tracking, and parent communication through an intuitive mobile interface.",
      tech: ["React Native", "JavaScript", "Firebase", "Redux"],
      features: [
        "Real-time Student Management",
        "Automated Grade Calculation",
        "Smart Attendance Tracking",
        "Interactive Parent Portal",
      ],
      status: "DEPLOYED",
      year: "2018",
    },
    {
      id: 2,
      title: "JEWELLERY SHOP APP",
      category: "Mobile Dev",
      description:
        "Premium e-commerce solution that transformed traditional jewelry retail, featuring high-resolution product showcases, secure payment processing, and intelligent inventory management for luxury goods.",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      features: [
        "3D Product Visualization",
        "Secure Payment Gateway",
        "Real-time Inventory Sync",
        "Customer Wishlist System",
      ],
      status: "LIVE",
      year: "2018",
    },
    {
      id: 3,
      title: "RESTAURANT MANAGEMENT APP",
      category: "Mobile Dev",
      description:
        "Complete digital transformation solution for restaurants, integrating table reservations, dynamic menu management, and seamless order processing to enhance customer experience and operational efficiency.",
      tech: ["React Native", "Firebase", "JavaScript", "Redux"],
      features: [
        "Smart Table Reservation",
        "Dynamic Menu Updates",
        "Real-time Order Tracking",
        "Customer Feedback System",
      ],
      status: "DEPLOYED",
      year: "2018",
    },
    {
      id: 4,
      title: "MEDIGURU TELEHEALTH PLATFORM",
      category: "Web App",
      description:
        "Groundbreaking telehealth platform that revolutionized remote healthcare delivery, enabling seamless video consultations, digital prescription management, and comprehensive patient care through cutting-edge React and Electron architecture.",
      tech: ["React", "Electron", "Node.js", "MongoDB"],
      features: [
        "HD Video Consultations",
        "Digital Health Records",
        "Smart Appointment Scheduling",
        "E-Prescription System",
      ],
      status: "LIVE",
      year: "2020",
      link: "https://mediguru.com",
    },
    {
      id: 5,
      title: "VERA WHOLE HEALTH MOBILE APP",
      category: "Mobile Dev",
      description:
        "Transformative mobile health platform that redefined primary care accessibility, empowering millions of users with advanced health tracking, provider communication, and comprehensive wellness management through intuitive mobile experience.",
      tech: ["React Native", "Node.js", "MongoDB", "REST APIs"],
      features: [
        "Advanced Health Analytics",
        "Instant Provider Access",
        "Personalized Health Insights",
        "Secure Health Data Management",
      ],
      status: "LIVE",
      year: "2020",
      link: "https://www.verawholehealth.com",
    },
    {
      id: 6,
      title: "AETNA HEALTH & INSURANCE APP",
      category: "Web App",
      description:
        "Enterprise-scale digital transformation project that modernized Aetna's legacy insurance systems, delivering a seamless member experience with advanced claims processing, provider network management, and comprehensive health benefit administration.",
      tech: ["React", ".NET", "C#", "SQL Server"],
      features: [
        "Intelligent Claims Processing",
        "Comprehensive Provider Network",
        "Personalized Health Benefits",
        "Advanced Member Dashboard",
      ],
      status: "DEPLOYED",
      year: "2022",
    },
    {
      id: 7,
      title: "AI CHATBOT SYSTEM",
      category: "AI & ML",
      description:
        "Revolutionary conversational AI platform that redefined customer engagement through advanced natural language processing, delivering human-like interactions and intelligent automation that transformed business operations.",
      tech: ["Python", "OpenAI", "React", "Node.js"],
      features: [
        "Advanced NLP Processing",
        "Contextual Understanding",
        "Multi-language Intelligence",
        "Seamless API Integration",
      ],
      status: "DEPLOYED",
      year: "2023",
    },
    {
      id: 8,
      title: "AI FILE OPERATIONS SYSTEM",
      category: "AI & ML",
      description:
        "Intelligent document management ecosystem that automated complex file processing workflows, featuring AI-powered categorization, content extraction, and smart organization that revolutionized data management efficiency.",
      tech: ["Python", "Machine Learning", "React", "AWS", "Azure"],
      features: [
        "Intelligent Document Processing",
        "Smart Auto-Categorization",
        "Advanced Content Extraction",
        "Scalable Cloud Architecture",
      ],
      status: "DEPLOYED",
      year: "2023",
    },
    {
      id: 9,
      title: "MULTI-CLOUD MCP SERVERS PROJECT",
      category: "Cloud & AI",
      description:
        "Next-generation multi-cloud infrastructure platform leveraging AWS MCP Servers and Azure Cloud Services to deliver unprecedented scalability and performance for AI workloads, enabling enterprise-grade machine learning at massive scale.",
      tech: ["AWS", "Azure", "Python", "Docker", "Kubernetes"],
      features: [
        "Dynamic Auto-Scaling",
        "Intelligent Load Balancing",
        "High-Performance AI Serving",
        "Real-time Monitoring",
      ],
      status: "IN DEVELOPMENT",
      year: "2025",
    },
    {
      id: 10,
      title: "AGENTIC AI SYSTEM",
      category: "AI & ML",
      description:
        "Pioneering autonomous AI ecosystem that represents the future of intelligent automation, featuring self-directed agents capable of complex task orchestration, decision-making, and continuous learning without human intervention.",
      tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
      features: [
        "Autonomous Agent Networks",
        "Intelligent Task Orchestration",
        "Advanced Decision Engine",
        "Continuous Learning System",
      ],
      status: "IN DEVELOPMENT",
      year: "2025",
    },
  ];

  const categories = ["ALL", "AI & ML", "Mobile Dev", "Web App", "Cloud & AI"];
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "var(--accent-color)";
      case "DEPLOYED":
        return "#4ade80";
      case "BETA":
        return "#fbbf24";
      default:
        return "var(--text-muted)";
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center relative"
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <div
        className="absolute top-20 left-10 w-16 h-16 rounded-full opacity-15 animate-particle-float"
        style={{ backgroundColor: "var(--accent-color)", animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-20 h-20 opacity-10 animate-particle-float"
        style={{
          backgroundColor: "var(--accent-light)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animationDelay: "1s",
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-8 h-8 opacity-10 animate-particle-float"
        style={{
          backgroundColor: "var(--text-secondary)",
          borderRadius: "20%",
          animationDelay: "1.8s",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="text-center mb-6 sm:mb-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 uppercase font-mono animate-fade-in-up"
            style={{
              color: "var(--text-primary)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              animationDelay: "0.2s",
            }}
          >
            FEATURED PROJECTS
          </h2>
          <div
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed font-mono border-t border-b py-3 sm:py-4 animate-fade-in-up px-4"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--accent-color)",
              animationDelay: "0.4s",
            }}
          >
            <span className="block sm:hidden">
              ═══ SHOWCASING INNOVATION ═══
            </span>
            <span className="block sm:hidden">═══ THROUGH CODE ═══</span>
            <span className="hidden sm:block">
              ═══ SHOWCASING INNOVATION THROUGH CODE ═══
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-mono text-xs sm:text-sm"
              style={{
                backgroundColor:
                  selectedCategory === category
                    ? "var(--accent-color)"
                    : "transparent",
                color:
                  selectedCategory === category
                    ? "var(--bg-primary)"
                    : "var(--accent-color)",
                borderColor: "var(--accent-color)",
              }}
            >
              [{category}]
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-6 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div
                  className="px-2 sm:px-3 py-1 rounded text-xs font-bold uppercase tracking-wider font-mono"
                  style={{
                    backgroundColor: "var(--accent-color)",
                    color: "var(--bg-primary)",
                  }}
                >
                  {project.category}
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  ></div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider font-mono"
                    style={{ color: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <h3
                className="text-base sm:text-lg font-bold mb-2 sm:mb-3 uppercase tracking-wider font-mono"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h3>

              <p
                className="text-xs sm:text-sm mb-3 sm:mb-4 font-mono leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>

              <div className="mb-3 sm:mb-4">
                <h4
                  className="text-xs font-bold mb-1 sm:mb-2 uppercase tracking-wider font-mono"
                  style={{ color: "var(--accent-color)" }}
                >
                  ▶ KEY FEATURES
                </h4>
                <div className="grid grid-cols-1 gap-1">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="text-xs font-mono"
                      style={{ color: "var(--text-primary)" }}
                    >
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <h4
                  className="text-xs font-bold mb-1 sm:mb-2 uppercase tracking-wider font-mono"
                  style={{ color: "var(--accent-color)" }}
                >
                  ▶ TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold uppercase tracking-wider font-mono shadow-md"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--text-primary)",
                        boxShadow:
                          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className="text-xs font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  YEAR: {project.year}
                </span>
                <button
                  className="px-3 sm:px-4 py-1.5 sm:py-2 font-bold uppercase tracking-wider border rounded transition-all duration-300 hover:scale-105 font-mono text-xs"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--accent-color)",
                    borderColor: "var(--accent-color)",
                  }}
                >
                  [VIEW_DETAILS]
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
