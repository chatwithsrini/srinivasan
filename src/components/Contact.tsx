import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Initialize EmailJS
    emailjs.init("JyCXDPu437QOFYDL2");
  }, []);

  const contactMethods = [
    {
      type: "EMAIL",
      value: "s.srinivasan90@hotmail.com",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          <path
            d="M12 11l8-5H4l8 5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      ),
      description: "PRIMARY COMMUNICATION CHANNEL",
    },
    {
      type: "PHONE",
      value: "+91 (984) 356-7588",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      description: "DIRECT COMMUNICATION LINE",
    },
    {
      type: "LINKEDIN",
      value: "https://www.linkedin.com/in/s-srinivasan90/",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          <circle
            cx="4"
            cy="4"
            r="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      ),
      description: "PROFESSIONAL NETWORK",
    },
    {
      type: "GITHUB",
      value: "https://github.com/chatwithsrini",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          <path
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      ),
      description: "CODE REPOSITORY",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Email sending function using EmailJS
  const sendEmail = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const serviceID = "service_jm37s4c";
    const templateID = "template_al1zpir";
    const userID = "JyCXDPu437QOFYDL2";

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "s.srinivasan90@hotmail.com", // Your email address
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );

      console.log("Email sent successfully:", response);
      return response;
    } catch (error) {
      console.error("Email sending failed:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await sendEmail(formData);
      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! I'll get back to you within 24 hours.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly at s.srinivasan90@hotmail.com",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
        className="absolute top-24 right-24 w-24 h-24 rounded-full opacity-15 animate-particle-float"
        style={{ backgroundColor: "var(--accent-color)", animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-24 left-24 w-16 h-16 opacity-10 animate-particle-float"
        style={{
          backgroundColor: "var(--accent-light)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animationDelay: "1.5s",
        }}
      ></div>
      <div
        className="absolute top-1/3 left-1/3 w-8 h-8 opacity-10 animate-particle-float"
        style={{
          backgroundColor: "var(--text-secondary)",
          borderRadius: "20%",
          animationDelay: "0.8s",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 uppercase font-mono animate-fade-in-up"
            style={{
              color: "var(--text-primary)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              animationDelay: "0.2s",
            }}
          >
            GET IN
          </h2>
          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 uppercase font-mono animate-fade-in-up"
            style={{
              color: "var(--accent-color)",
              fontStyle: "italic",
              animationDelay: "0.4s",
            }}
          >
            TOUCH
          </h3>
          <div
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-mono border-t border-b py-3 sm:py-4 animate-fade-in-up px-4"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--accent-color)",
              animationDelay: "0.6s",
            }}
          >
            <span className="block sm:hidden">═══ LET'S COLLABORATE ═══</span>
            <span className="block sm:hidden">═══ SHARE IDEAS ═══</span>
            <span className="block sm:hidden">
              ═══ BUILD SOMETHING AMAZING ═══
            </span>
            <span className="hidden sm:block">
              ═══ LET'S COLLABORATE • SHARE IDEAS • BUILD SOMETHING AMAZING ═══
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Methods */}
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
                ▶ CONTACT CHANNELS
              </h4>
              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method) => (
                  <div
                    key={method.type}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded shadow-lg"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div
                      className="flex-shrink-0"
                      style={{ color: "var(--accent-color)" }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8">{method.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h5
                        className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                        style={{ color: "var(--accent-color)" }}
                      >
                        {method.type}
                      </h5>
                      <p
                        className="text-sm sm:text-base font-mono"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {method.value}
                      </p>
                      <p
                        className="text-xs font-mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
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
                ▶ AVAILABILITY STATUS
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{ backgroundColor: "#4ade80" }}
                  ></div>
                  <span
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                    style={{ color: "var(--text-primary)" }}
                  >
                    AVAILABLE FOR NEW PROJECTS
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></div>
                  <span
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                    style={{ color: "var(--text-primary)" }}
                  >
                    RESPONSE TIME: 24 HOURS
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{ backgroundColor: "#fbbf24" }}
                  ></div>
                  <span
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono"
                    style={{ color: "var(--text-primary)" }}
                  >
                    TIMEZONE: IST (UTC+5.30)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="p-4 sm:p-6 rounded-lg border-2"
            style={{
              backgroundColor: "var(--glass-bg)",
              borderColor: "var(--accent-color)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h4
              className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase tracking-wider font-mono"
              style={{ color: "var(--accent-color)" }}
            >
              ▶ SEND MESSAGE
            </h4>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg border-2 font-mono text-sm sm:text-base ${
                  submitStatus.type === "success"
                    ? "border-green-500 bg-green-50 text-green-800"
                    : "border-red-500 bg-red-50 text-red-800"
                }`}
                style={{
                  backgroundColor:
                    submitStatus.type === "success"
                      ? "rgba(34, 197, 94, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                  borderColor:
                    submitStatus.type === "success" ? "#22c55e" : "#ef4444",
                  color:
                    submitStatus.type === "success" ? "#166534" : "#991b1b",
                }}
              >
                <div className="flex items-center space-x-2">
                  {submitStatus.type === "success" ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className="font-bold uppercase tracking-wider">
                    {submitStatus.type === "success" ? "SUCCESS" : "ERROR"}
                  </span>
                </div>
                <p className="mt-1">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  NAME*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded shadow-md font-mono text-sm sm:text-base"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  }}
                  placeholder="ENTER YOUR NAME"
                />
              </div>

              <div>
                <label
                  className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  EMAIL*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded shadow-md font-mono text-sm sm:text-base"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  }}
                  placeholder="ENTER YOUR EMAIL"
                />
              </div>

              <div>
                <label
                  className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  SUBJECT*
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded shadow-md font-mono text-sm sm:text-base"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  }}
                  placeholder="PROJECT INQUIRY"
                />
              </div>

              <div>
                <label
                  className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wider font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  MESSAGE*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded border-2 font-mono resize-none text-sm sm:text-base"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="DESCRIBE YOUR PROJECT REQUIREMENTS..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all duration-300 font-mono text-sm sm:text-base ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
                style={{
                  backgroundColor: isLoading
                    ? "var(--text-muted)"
                    : "var(--accent-color)",
                  color: "var(--bg-primary)",
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>SENDING...</span>
                  </div>
                ) : (
                  "[SEND_MESSAGE]"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
