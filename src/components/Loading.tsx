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
        background: "var(--bg-primary)",
        fontFamily: "Courier New, Monaco, Lucida Console, monospace",
      }}
    >
      <div className="text-center">
        <div className="mb-8">
          <div
            className="inline-block border-2 p-4"
            style={{
              borderColor: "var(--accent-color)",
              backgroundColor: "var(--bg-secondary)",
              boxShadow:
                "inset 0 0 10px rgba(0,0,0,0.1), 0 0 20px rgba(218, 165, 32, 0.2)",
            }}
          >
            <div className="flex items-center space-x-1">
              <div
                className="w-2 h-4 border-l-2"
                style={{
                  borderColor: "var(--accent-color)",
                  animation: "typewriter-cursor 1s infinite",
                }}
              ></div>
              <div className="flex space-x-1">
                <div
                  className="w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: "var(--accent-color)",
                    animation: "vintage-dot 1.5s ease-in-out infinite",
                    animationDelay: "0s",
                  }}
                ></div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: "var(--accent-color)",
                    animation: "vintage-dot 1.5s ease-in-out infinite",
                    animationDelay: "0.3s",
                  }}
                ></div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: "var(--accent-color)",
                    animation: "vintage-dot 1.5s ease-in-out infinite",
                    animationDelay: "0.6s",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2
            className="text-xl font-bold uppercase tracking-wider"
            style={{
              color: "var(--text-primary)",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Transforming ideas into reality
          </h2>
          <div
            className="w-32 h-1 mx-auto border"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            <div
              className="h-full transition-all duration-1000"
              style={{
                backgroundColor: "var(--accent-color)",
                width: "100%",
                animation: "vintage-progress 3s ease-in-out infinite",
                boxShadow: "0 0 4px var(--accent-color)",
              }}
            ></div>
          </div>
          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
              fontStyle: "italic",
            }}
          >
            Importing creativity...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes typewriter-cursor {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes vintage-dot {
          0%,
          20% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          80%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }

        @keyframes vintage-progress {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
