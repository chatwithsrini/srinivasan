import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Srinivasan_Sekar_Resume",
    removeAfterPrint: true,
  });

  const onPrintClick = async () => {
    if (!resumeRef.current) return;
    try {
      const result = handlePrint && (await handlePrint());
      // Fallback: if print didn't trigger (some Safari/blocked popups), try window.print
      if (typeof result === "undefined") {
        setTimeout(() => {
          try {
            window.print();
          } catch (_) {}
        }, 300);
      }
    } catch (_) {
      try {
        window.print();
      } catch (_) {}
    }
  };

  const personalInfo = {
    name: "SRINIVASAN SEKAR",
    title: "FULL-STACK DEVELOPER",
    email: "s.srinivasan90@hotmail.com",
    phone: "+91 (984) 356-7588",
    location: "Chennai, India",
    linkedin: "https://www.linkedin.com/in/s-srinivasan90/",
    github: "https://github.com/chatwithsrini",
  };

  const professionalSummary = `Visionary Full-Stack Developer with 8+ years of proven expertise in transforming business ideas into revolutionary digital solutions. From healthcare innovations to AI-powered systems, I deliver impact-driven applications that reshape industries. Specialized in React, Node.js, Python, and cutting-edge AI technologies including AWS MCP Servers and Azure Cloud Services.`;

  const workExperience = [
    {
      company: "AETNA HEALTH & INSURANCE",
      position: "SENIOR FULL-STACK DEVELOPER",
      duration: "2022 - Present",
      location: "Chennai, India",
      achievements: [
        "Led digital transformation of legacy insurance systems using React and .NET",
        "Modernized member experience with advanced claims processing and provider network management",
        "Implemented comprehensive health benefit administration system",
        "Improved operational efficiency by 40% through streamlined user interfaces",
        "Pioneered AI integration initiatives, developing intelligent chatbots and automated file processing systems",
        "Spearheaded multi-cloud infrastructure projects leveraging AWS MCP Servers and Azure Cloud Services",
        "Built autonomous AI ecosystems with self-directed agents capable of complex task orchestration",
        "Delivered scalable solutions for enterprise clients across healthcare, e-commerce, and fintech sectors",
      ],
    },
    {
      company: "VERA WHOLE HEALTH",
      position: "MOBILE APPLICATION DEVELOPER",
      duration: "2020 - 2022",
      location: "Chennai, India",
      achievements: [
        "Developed transformative mobile health platform using React Native and Node.js",
        "Empowered millions of users with advanced health tracking and provider communication",
        "Implemented comprehensive wellness management through intuitive mobile experience",
        "Integrated secure health data management with real-time analytics",
      ],
    },
    {
      company: "MEDIGURU TELEHEALTH",
      position: "FULL-STACK DEVELOPER",
      duration: "2020 - 2021",
      location: "Chennai, India",
      achievements: [
        "Built groundbreaking telehealth platform using React, Electron, and Node.js",
        "Enabled seamless video consultations and digital prescription management",
        "Implemented comprehensive patient care through cutting-edge architecture",
        "Revolutionized remote healthcare delivery for thousands of patients",
      ],
    },
    {
      company: "SCHOOL ERP SYSTEM",
      position: "MOBILE APP DEVELOPER",
      duration: "2018 - 2020",
      location: "Chennai, India",
      achievements: [
        "Developed School ERP System that digitized entire school operations",
        "Created premium e-commerce solution for jewelry retail with 3D visualization",
        "Built complete restaurant management app with table reservations and order processing",
        "Delivered 15+ mobile applications across various industries",
      ],
    },
  ];

  const education = [
    {
      degree: "M.Sc.",
      field: "Computer Science",
      institution: "Sri Vijay Vidyalaya College of Arts and Science",
      university: "Periyar University",
      year: "2013",
      location: "Dharmapuri, Salem",
    },
    {
      degree: "B.Sc.",
      field: "Computer Science",
      institution: "Government Arts College",
      university: "Periyar University",
      year: "2011",
      location: "Salem-7, Salem",
    },
  ];

  const certifications = ["Microsoft Azure Fundamentals"];

  const technicalSkills = {
    "Frontend Development": [
      "React",
      "TypeScript",
      "React Native",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    "Backend Development": [
      "Node.js",
      "Python",
      "MongoDB",
      "REST APIs",
      "Express.js",
      "C#",
      ".NET",
    ],
    "AI & Cloud": [
      "OpenAI",
      "AWS",
      "Azure",
      "Docker",
      "Machine Learning",
      "LangChain",
      "Vector Databases",
    ],
    "Tools & Technologies": [
      "Git",
      "Docker",
      "Kubernetes",
      "Postman",
      "VS Code",
      "Jira",
    ],
  };

  const keyProjects = [
    {
      name: "AETNA HEALTH & INSURANCE PLATFORM",
      description:
        "Enterprise-scale digital transformation project that modernized Aetna's legacy insurance systems, delivering a seamless member experience with advanced claims processing, provider network management, and comprehensive health benefit administration.",
      technologies: ["React", ".NET", "C#", "SQL Server", "Azure"],
      year: "2022 - Present",
    },
    {
      name: "MEDIGURU TELEHEALTH PLATFORM",
      description:
        "Groundbreaking telehealth platform that revolutionized remote healthcare delivery, enabling seamless video consultations, digital prescription management, and comprehensive patient care through cutting-edge React and Electron architecture.",
      technologies: ["React", "Electron", "Node.js", "MongoDB", "WebRTC"],
      year: "2020 - 2021",
    },
    {
      name: "VERA WHOLE HEALTH MOBILE APPLICATION",
      description:
        "Transformative mobile health platform that redefined primary care accessibility, empowering millions of users with advanced health tracking, provider communication, and comprehensive wellness management through intuitive mobile experience.",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Firebase",
      ],
      year: "2020 - 2022",
    },
  ];

  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col justify-center relative"
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 uppercase font-mono animate-fade-in-up"
            style={{
              color: "var(--text-primary)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              animationDelay: "0.2s",
            }}
          >
            PROFESSIONAL RESUME
          </h2>
          <div
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-mono border-t border-b py-3 sm:py-4 animate-fade-in-up px-4"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--accent-color)",
              animationDelay: "0.4s",
            }}
          >
            <span className="block sm:hidden">═══ DOWNLOAD PDF ═══</span>
            <span className="block sm:hidden">═══ PRINT VERSION ═══</span>
            <span className="hidden sm:block">
              ═══ DOWNLOAD PDF • PRINT VERSION • PROFESSIONAL FORMAT ═══
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-8 no-print">
          <button
            type="button"
            onClick={onPrintClick}
            className="px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wider border-2 rounded-lg transition-all duration-300 hover:scale-105 font-mono text-sm sm:text-base"
            style={{
              backgroundColor: "var(--accent-color)",
              color: "var(--bg-primary)",
              borderColor: "var(--accent-color)",
            }}
          >
            [DOWNLOAD_PDF]
          </button>
        </div>

        <div
          ref={resumeRef}
          className="resume-container text-gray-800 p-0 max-w-5xl mx-auto shadow-2xl overflow-hidden"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            backgroundColor: "var(--bg-primary)",
            color: "var(--text-primary)",
          }}
        >
          {/* Header with Sidebar Design */}
          <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div
              className="w-1/3 p-8"
              style={{
                background:
                  "linear-gradient(180deg, var(--accent-color), var(--accent-dark))",
                color: "var(--bg-primary)",
              }}
            >
              {/* Profile Section */}
              <div className="text-center mb-8">
                {/* <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  >
                    <span
                      className="text-3xl font-bold"
                      style={{ color: "var(--bg-primary)" }}
                    >
                      S
                    </span>
                  </div>
                </div> */}
                <h1 className="text-2xl font-bold mb-2">{personalInfo.name}</h1>
                <h2
                  className="text-lg mb-4"
                  style={{ color: "var(--accent-light)" }}
                >
                  {personalInfo.title}
                </h2>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3
                  className="text-lg font-bold mb-4 border-b pb-2"
                  style={{
                    color: "var(--accent-light)",
                    borderColor: "var(--accent-light)",
                  }}
                >
                  CONTACT
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm leading-none flex-shrink-0">
                      📧
                    </span>
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm leading-none flex-shrink-0">
                      📱
                    </span>
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm leading-none flex-shrink-0">
                      📍
                    </span>
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm leading-none flex-shrink-0">
                      🔗
                    </span>
                    <span className="text-sm">LinkedIn: s-srinivasan90</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h3
                  className="text-lg font-bold mb-4 border-b pb-2"
                  style={{
                    color: "var(--accent-light)",
                    borderColor: "var(--accent-light)",
                  }}
                >
                  TECHNICAL SKILLS
                </h3>
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="mb-4">
                    <h4
                      className="text-sm font-bold mb-2"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.2)",
                            color: "var(--bg-primary)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3
                  className="text-lg font-bold mb-4 border-b pb-2"
                  style={{
                    color: "var(--accent-light)",
                    borderColor: "var(--accent-light)",
                  }}
                >
                  EDUCATION
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4
                      className="text-sm font-bold"
                      style={{ color: "var(--bg-primary)" }}
                    >
                      {edu.degree}, {edu.field}
                    </h4>
                    <p
                      className="text-xs"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {edu.university}, {edu.location}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h3
                  className="text-lg font-bold mb-4 border-b pb-2"
                  style={{
                    color: "var(--accent-light)",
                    borderColor: "var(--accent-light)",
                  }}
                >
                  CERTIFICATIONS
                </h3>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="text-sm"
                      style={{ color: "var(--bg-primary)" }}
                    >
                      • {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-8">
              {/* Professional Summary */}
              <div className="mb-8">
                <h3
                  className="text-2xl font-bold mb-4 flex items-center"
                  style={{ color: "var(--accent-color)" }}
                >
                  <div
                    className="w-1 h-8 mr-3"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></div>
                  PROFESSIONAL SUMMARY
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {professionalSummary}
                </p>
              </div>

              {/* Work Experience */}
              <div className="mb-8">
                <h3
                  className="text-2xl font-bold mb-6 flex items-center"
                  style={{ color: "var(--accent-color)" }}
                >
                  <div
                    className="w-1 h-8 mr-3"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></div>
                  WORK EXPERIENCE
                </h3>
                <div className="space-y-6">
                  {workExperience.map((job, index) => (
                    <div
                      key={index}
                      className="border-l-4 pl-6 relative"
                      style={{ borderColor: "var(--accent-light)" }}
                    >
                      <div
                        className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                        style={{ backgroundColor: "var(--accent-color)" }}
                      ></div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4
                            className="text-lg font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {job.position}
                          </h4>
                          <h5
                            className="text-base font-semibold"
                            style={{ color: "var(--accent-color)" }}
                          >
                            {job.company}
                          </h5>
                        </div>
                        <div
                          className="text-right text-sm"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <div className="font-semibold">{job.duration}</div>
                          <div>{job.location}</div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm flex items-start"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <span
                              className="mr-2 mt-1"
                              style={{ color: "var(--accent-color)" }}
                            >
                              ▶
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div className="mb-8">
                <h3
                  className="text-2xl font-bold mb-6 flex items-center"
                  style={{ color: "var(--accent-color)" }}
                >
                  <div
                    className="w-1 h-8 mr-3"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></div>
                  KEY PROJECTS
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {keyProjects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4
                          className="text-lg font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {project.name}
                        </h4>
                        <span
                          className="text-sm font-semibold px-3 py-1 rounded-full"
                          style={{
                            color: "var(--accent-color)",
                            backgroundColor: "var(--accent-light)",
                          }}
                        >
                          {project.year}
                        </span>
                      </div>
                      <p
                        className="text-sm mb-4 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: "var(--accent-color)",
                              color: "var(--bg-primary)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="print-page-break"></div>
            </div>
          </div>

          {/* Footer */}
          <div
            className="p-4 text-center text-sm"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <p>
              This resume was generated from my interactive portfolio website •
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
