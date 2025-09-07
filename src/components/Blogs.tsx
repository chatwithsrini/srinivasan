import React, { useState, useEffect } from "react";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedBlog]);

  const blogPosts = [
    {
      id: 1,
      title: "From Spreadsheets to Software: My Leap into Technology",
      category: "Career",
      date: "Sep 7, 2025",
      excerpt:
        "My journey from the stress of banking to finding peace and passion in software development.",
      content: `My Story

For several years, I worked in the banking sector. On the outside, it seemed like a stable, respectable career path—one that many people dream of. But behind the scenes, the reality was different for me.

Day after day, I faced enormous stress. Targets to meet, endless pressure, and little room to explore creativity left me feeling drained. I often wondered if this was what I wanted for the rest of my life. Deep inside, I knew I was meant for something different—something that challenged me intellectually but also gave me the freedom to build and create.

## The Turning Point

My curiosity for technology had always been there. I was fascinated by how apps and systems worked—the tools we used in banking to process data, manage customers, and run operations. At some point, a thought kept coming back to me: "What if I could be the one building these systems instead of just using them?"

That question became the turning point in my career. I made the bold decision to leave banking behind and step into the unknown world of IT.

## The Learning Journey

Switching industries wasn't easy. I had no roadmap, only determination. I started from scratch—learning React, React Native, and .NET. I spent late nights building small projects, breaking code, fixing bugs, and slowly piecing together my confidence.

Later, I ventured into Generative AI and Power Automate, exploring how automation and intelligence could reshape businesses. Every new concept was overwhelming at first, but with consistency and guidance, I kept moving forward.

Interestingly, my background in banking wasn't wasted. The discipline, problem-solving mindset, and business understanding I gained there became strengths that helped me as a developer.

## The Challenges

The path wasn't smooth.

- **Fear of starting over**: Leaving behind years of experience in banking felt like erasing a part of my identity.
- **Stress in learning**: At times, the sheer pace of technology made me feel like I was falling behind.
- **Imposter syndrome**: Walking into IT meetings, I often questioned, "Do I really belong here?"

But unlike banking stress, which drained me, this new kind of stress energized me. It pushed me to grow.

## Where I Am Today

Today, I stand proudly as a Full-Stack Developer. I build solutions with React, React Native, and .NET, and I'm actively working with AI-powered applications. I've gone from handling numbers in banking to writing code that powers real-world applications.

Most importantly, I've found peace. I no longer carry the constant stress I once did. Instead, I wake up excited about what I'll learn or build next.

## My Message to Anyone Thinking of a Career Change

If you're stuck in a career that doesn't make you happy, don't be afraid to pivot. Yes, it's scary. Yes, it takes time and effort. But your past doesn't go to waste—it builds the foundation for your new journey.

I left the stress of banking behind and found a career in IT that excites me every single day. If I could do it, so can you.`,
    },
  ];

  const handleReadMore = (blogId: number) => {
    setSelectedBlog(blogId);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            My Blog
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Thoughts, insights, and experiences from my journey in technology
            and beyond.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl p-6 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--glass-bg)",
                border: "1px solid var(--border-color)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "var(--accent-color)",
                    color: "white",
                  }}
                >
                  {post.category}
                </span>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {post.title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  {post.date}
                </span>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="text-sm font-medium hover:underline"
                  style={{ color: "var(--accent-color)" }}
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button - Only show if more than 6 posts */}
        {blogPosts.length > 6 && (
          <div className="text-center mt-12">
            <button
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--accent-color)",
                color: "white",
                border: "none",
              }}
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 999999,
          }}
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl mx-auto flex flex-col"
            style={{
              backgroundColor: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              backdropFilter: "blur(20px)",
              boxShadow: "var(--shadow-strong)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Header */}
            <div
              className="sticky top-0 z-10 p-6 md:p-8 pb-4 border-b"
              style={{
                backgroundColor: "var(--bg-primary)",
                borderColor: "var(--border-color)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  color: "var(--text-primary)",
                  backgroundColor: "var(--glass-bg)",
                  border: "1px solid var(--border-color)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Blog Header */}
              {(() => {
                const post = blogPosts.find((p) => p.id === selectedBlog);
                if (!post) return null;

                return (
                  <div>
                    <div className="mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: "var(--accent-color)",
                          color: "white",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h1
                      className="text-3xl md:text-4xl font-bold mb-4 pr-16"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {post.title}
                    </h1>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {post.date}
                    </p>
                  </div>
                );
              })()}
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-4 custom-scrollbar">
              {(() => {
                const post = blogPosts.find((p) => p.id === selectedBlog);
                if (!post) return null;

                return (
                  <div>
                    {/* Content */}
                    <div
                      className="prose prose-lg max-w-none"
                      style={{
                        color: "var(--text-primary)",
                        backgroundColor: "transparent",
                      }}
                    >
                      {post.content.split("\n").map((paragraph, index) => {
                        if (paragraph.startsWith("## ")) {
                          return (
                            <h2
                              key={index}
                              className="text-2xl font-bold mt-8 mb-4"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {paragraph.replace("## ", "")}
                            </h2>
                          );
                        } else if (paragraph.startsWith("### ")) {
                          return (
                            <h3
                              key={index}
                              className="text-xl font-semibold mt-6 mb-3"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {paragraph.replace("### ", "")}
                            </h3>
                          );
                        } else if (paragraph.startsWith("- ")) {
                          return (
                            <li
                              key={index}
                              className="mb-2"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {paragraph.replace("- ", "")}
                            </li>
                          );
                        } else if (paragraph.trim() === "") {
                          return <br key={index} />;
                        } else if (paragraph.trim()) {
                          return (
                            <p
                              key={index}
                              className="mb-4 leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {paragraph}
                            </p>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
