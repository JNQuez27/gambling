"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    id: 0,
    gradient: "linear-gradient(160deg, #e8f4fd 0%, #d4eaf7 50%, #c8e8e0 100%)",
    illustration: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Eye / awareness symbol */}
        <circle cx="100" cy="100" r="80" fill="#a8cce8" fillOpacity="0.25" />
        <ellipse cx="100" cy="100" rx="55" ry="32" stroke="#5b9bd5" strokeWidth="3" fill="none" />
        <circle cx="100" cy="100" r="18" fill="#5b9bd5" fillOpacity="0.8" />
        <circle cx="100" cy="100" r="10" fill="#3a7dbf" />
        <circle cx="106" cy="95" r="3" fill="white" fillOpacity="0.8" />
        {/* Radial lines */}
        <line x1="100" y1="30" x2="100" y2="50" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="100" y1="150" x2="100" y2="170" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="30" y1="100" x2="50" y2="100" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="150" y1="100" x2="170" y2="100" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="51" y1="51" x2="65" y2="65" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <line x1="135" y1="135" x2="149" y2="149" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <line x1="149" y1="51" x2="135" y2="65" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <line x1="51" y1="149" x2="65" y2="135" stroke="#5b9bd5" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      </svg>
    ),
    tag: "Awareness",
    title: "See yourself clearly.",
    body: "The first step toward change is noticing what's happening inside you — without judgment.",
  },
  {
    id: 1,
    gradient: "linear-gradient(160deg, #e8f4fd 0%, #d6eee4 50%, #c8e8d8 100%)",
    illustration: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pause / reflect symbol */}
        <circle cx="100" cy="100" r="80" fill="#b2d9c4" fillOpacity="0.3" />
        <circle cx="100" cy="100" r="55" stroke="#7ab89a" strokeWidth="3" fill="none" strokeDasharray="6 4" />
        {/* Hourglass inside */}
        <path d="M74 68 L126 68 L100 100 L126 132 L74 132 L100 100 Z" fill="#7ab89a" fillOpacity="0.5" stroke="#4f9a74" strokeWidth="2" strokeLinejoin="round" />
        <rect x="70" y="62" width="60" height="8" rx="4" fill="#4f9a74" fillOpacity="0.8" />
        <rect x="70" y="130" width="60" height="8" rx="4" fill="#4f9a74" fillOpacity="0.8" />
        {/* Dots flowing */}
        <circle cx="100" cy="106" r="3" fill="#ffffff" fillOpacity="0.9" />
        <circle cx="100" cy="115" r="2" fill="#ffffff" fillOpacity="0.6" />
        <circle cx="100" cy="122" r="1.5" fill="#ffffff" fillOpacity="0.4" />
      </svg>
    ),
    tag: "Reflection",
    title: "Pause. Think. Understand.",
    body: "Take a moment to understand your patterns. Reflection is where real growth begins.",
  },
  {
    id: 2,
    gradient: "linear-gradient(160deg, #fdf6e8 0%, #f8eed8 40%, #e8f4fd 100%)",
    illustration: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Growth / upward path */}
        <circle cx="100" cy="100" r="80" fill="#e8b86d" fillOpacity="0.2" />
        {/* Path going up */}
        <path d="M60 145 Q75 120 90 110 Q105 100 115 85 Q125 70 140 55" stroke="#e8b86d" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Arrow head */}
        <path d="M130 50 L140 55 L135 66" stroke="#e8b86d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Dots along path */}
        <circle cx="60" cy="145" r="7" fill="#e8b86d" fillOpacity="0.6" />
        <circle cx="88" cy="112" r="7" fill="#e8b86d" fillOpacity="0.75" />
        <circle cx="115" cy="85" r="7" fill="#e8b86d" fillOpacity="0.9" />
        <circle cx="140" cy="55" r="9" fill="#e8b86d" />
        <circle cx="140" cy="55" r="5" fill="white" fillOpacity="0.8" />
        {/* Small stars */}
        <circle cx="155" cy="80" r="2.5" fill="#e8b86d" fillOpacity="0.5" />
        <circle cx="165" cy="100" r="1.8" fill="#e8b86d" fillOpacity="0.4" />
        <circle cx="50" cy="90" r="2" fill="#7ab89a" fillOpacity="0.5" />
      </svg>
    ),
    tag: "Better Choices",
    title: "You can choose differently.",
    body: "Every moment is a new opportunity. Small, intentional changes lead to a life you're proud of.",
  },
];

export default function SplashPage() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const goNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      router.push("/login");
    }
  };

  const goTo = (index: number) => setCurrent(index);
  const isLast = current === slides.length - 1;
  const slide = slides[current];

  return (
    <div className="app-shell" style={{ background: slide.gradient, minHeight: "100dvh", transition: "background 0.5s ease" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        padding: "0 28px",
      }}>
        {/* Skip */}
        <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "56px" }}>
          {!isLast && (
            <button
              onClick={() => router.push("/login")}
              style={{
                background: "none",
                border: "none",
                color: "var(--color-text-muted)",
                fontSize: "14px",
                cursor: "pointer",
                padding: "6px 4px",
                letterSpacing: "0.02em",
              }}
            >
              Skip
            </button>
          )}
        </div>

        {/* Illustration */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "16px" }}>
          <div style={{
            background: "rgba(255,255,255,0.45)",
            borderRadius: "50%",
            padding: "32px",
            boxShadow: "0 8px 40px rgba(91,155,213,0.15)",
          }}>
            {slide.illustration}
          </div>
        </div>

        {/* Text content */}
        <div style={{ paddingBottom: "48px" }}>
          {/* Tag */}
          <div style={{ marginBottom: "12px" }}>
            <span style={{
              display: "inline-block",
              background: "rgba(91,155,213,0.15)",
              color: "var(--color-primary-dark)",
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>
              {slide.tag}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "var(--color-text)",
            margin: "0 0 14px",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
          }}>
            {slide.title}
          </h1>

          {/* Body */}
          <p style={{
            fontSize: "16px",
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
            margin: "0 0 36px",
          }}>
            {slide.body}
          </p>

          {/* Dots */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === current ? "var(--color-primary)" : "var(--color-primary-light)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={goNext}
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "16px",
              background: isLast
                ? "linear-gradient(135deg, var(--color-secondary-dark), var(--color-secondary))"
                : "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.01em",
              boxShadow: isLast
                ? "0 8px 24px rgba(79,154,116,0.35)"
                : "0 8px 24px rgba(58,125,191,0.35)",
              transition: "all 0.3s ease",
            }}
          >
            {isLast ? "Get Started" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
