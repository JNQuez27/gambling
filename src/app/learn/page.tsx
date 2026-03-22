"use client";

import BottomNav from "@/components/ui/BottomNav";

const categories = ["All", "Anger", "Anxiety", "Habits", "Mindfulness"];

const articles = [
  {
    id: 1,
    category: "Mindfulness",
    title: "The 6-Second Rule: Why Pausing Changes Everything",
    desc: "Science shows that waiting just 6 seconds before reacting reduces the emotional charge significantly.",
    readTime: "4 min read",
    icon: "⏸️",
    color: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    id: 2,
    category: "Anger",
    title: "Understanding Your Anger Triggers",
    desc: "Recognize the patterns that set you off — and learn to interrupt them before they escalate.",
    readTime: "6 min read",
    icon: "🌋",
    color: "#fef2f2",
    border: "#fecaca",
  },
  {
    id: 3,
    category: "Habits",
    title: "How Small Pauses Build Big Change",
    desc: "Micro-moments of awareness compound into lasting behavioral shifts over time.",
    readTime: "5 min read",
    icon: "🌱",
    color: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    id: 4,
    category: "Anxiety",
    title: "Breaking the Rumination Loop",
    desc: "When your mind replays the same scenario endlessly — here's how to gently step out.",
    readTime: "7 min read",
    icon: "🔄",
    color: "#fdf4ff",
    border: "#e9d5ff",
  },
  {
    id: 5,
    category: "Mindfulness",
    title: "Body Scan: Checking In With Yourself",
    desc: "A simple 3-minute practice to notice physical tension and release it before it becomes emotion.",
    readTime: "3 min read",
    icon: "🧘",
    color: "#fefce8",
    border: "#fde68a",
  },
];

const practices = [
  { icon: "🌬️", label: "Box Breathing", duration: "3 min", desc: "Calm your nervous system" },
  { icon: "🧠", label: "Thought Journal", duration: "5 min", desc: "Examine one belief" },
  { icon: "🚶", label: "Mindful Walk", duration: "10 min", desc: "Grounded movement" },
];

export default function LearnPage() {
  return (
    <div className="app-shell" style={{ minHeight: "100dvh", background: "var(--color-bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "100px" }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(160deg, #e8f4fd 0%, #d4eaf7 50%, #c8e8e0 100%)",
          padding: "56px 24px 24px",
          borderRadius: "0 0 28px 28px",
        }}>
          <h1 style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 4px" }}>Learn & Grow</h1>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)", margin: 0 }}>Gentle guidance at your own pace</p>

          {/* Search bar */}
          <div style={{
            marginTop: "16px",
            background: "rgba(255,255,255,0.75)",
            borderRadius: "14px",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid var(--color-border)",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-light)" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span style={{ fontSize: "14px", color: "var(--color-text-light)" }}>Search articles...</span>
          </div>
        </div>

        <div style={{ padding: "24px" }}>

          {/* Category filter */}
          <div style={{ display: "flex", gap: "8px", overflowX: "auto", marginBottom: "20px", paddingBottom: "4px" }}>
            {categories.map((cat, i) => (
              <button key={cat} style={{
                padding: "7px 16px",
                borderRadius: "20px",
                border: i === 0 ? "none" : "1.5px solid var(--color-border)",
                background: i === 0 ? "var(--color-primary)" : "var(--color-bg-card)",
                color: i === 0 ? "white" : "var(--color-text-muted)",
                fontSize: "13px",
                fontWeight: i === 0 ? 600 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: i === 0 ? "0 2px 8px rgba(91,155,213,0.3)" : "none",
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Practices */}
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 12px" }}>Quick Practices</h3>
          <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
            {practices.map((p) => (
              <button key={p.label} style={{
                flex: 1,
                background: "var(--color-bg-card)",
                borderRadius: "16px",
                padding: "14px 10px",
                border: "1px solid var(--color-border)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}>
                <span style={{ fontSize: "22px" }}>{p.icon}</span>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text)" }}>{p.label}</span>
                <span style={{
                  fontSize: "10px",
                  background: "var(--color-bg)",
                  color: "var(--color-secondary-dark)",
                  borderRadius: "6px",
                  padding: "2px 7px",
                  fontWeight: 600,
                }}>
                  {p.duration}
                </span>
                <span style={{ fontSize: "10px", color: "var(--color-text-muted)", lineHeight: 1.3 }}>{p.desc}</span>
              </button>
            ))}
          </div>

          {/* Articles */}
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 12px" }}>Featured Articles</h3>
          {articles.map((article) => (
            <div key={article.id} style={{
              background: article.color,
              border: `1px solid ${article.border}`,
              borderRadius: "18px",
              padding: "18px",
              marginBottom: "12px",
              cursor: "pointer",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                flexShrink: 0,
              }}>
                {article.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-text-light)" }}>{article.readTime}</span>
                </div>
                <p style={{ margin: "0 0 5px", fontSize: "15px", fontWeight: 600, color: "var(--color-text)", lineHeight: 1.3 }}>
                  {article.title}
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  {article.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <BottomNav />
    </div>
  );
}
