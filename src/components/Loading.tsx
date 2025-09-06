import React, { useState, useEffect } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
      }}
    >
      {/* 5 Square Animated Lines Loader */}
      <div className="text-center">
        {/* 5 Animated Square Lines */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div
            className="w-4 h-4"
            style={{
              backgroundColor: "var(--accent-color)",
              animation: "square-pulse 1.4s ease-in-out infinite",
              animationDelay: "0s",
            }}
          ></div>
          <div
            className="w-4 h-4"
            style={{
              backgroundColor: "var(--accent-light)",
              animation: "square-pulse 1.4s ease-in-out infinite",
              animationDelay: "0.2s",
            }}
          ></div>
          <div
            className="w-4 h-4"
            style={{
              backgroundColor: "var(--accent-color)",
              animation: "square-pulse 1.4s ease-in-out infinite",
              animationDelay: "0.4s",
            }}
          ></div>
          <div
            className="w-4 h-4"
            style={{
              backgroundColor: "var(--accent-light)",
              animation: "square-pulse 1.4s ease-in-out infinite",
              animationDelay: "0.6s",
            }}
          ></div>
          <div
            className="w-4 h-4"
            style={{
              backgroundColor: "var(--accent-color)",
              animation: "square-pulse 1.4s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          ></div>
        </div>

        {/* Loading Text */}
        <h2
          className="text-2xl font-bold"
          style={{
            color: "var(--text-primary)",
            fontFamily: "Courier New, Monaco, Lucida Console, monospace",
            letterSpacing: "0.1em",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default Loading;
