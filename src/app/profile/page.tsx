"use client";

import Link from "next/link";
import BottomNav from "@/components/ui/BottomNav";

const achievements = [
  { icon: "🔥", label: "3-Day Streak", desc: "3 days in a row", unlocked: true },
  { icon: "🌱", label: "First Reflection", desc: "Wrote your first diary entry", unlocked: true },
  { icon: "🧘", label: "Mindful Week", desc: "7 consecutive pauses", unlocked: false },
  { icon: "🌟", label: "30-Day Champion", desc: "Complete 30-day streak", unlocked: false },
  { icon: "💎", label: "Deep Thinker", desc: "Write 10 diary entries", unlocked: false },
  { icon: "🏔️", label: "Peak Awareness", desc: "Log 50 pauses", unlocked: false },
];

const statCards = [
  { label: "Current Streak", value: "3", unit: "days", icon: "🔥", color: "#fef3c7", border: "#fde68a", text: "#92400e" },
  { label: "Total Pauses", value: "24", unit: "logged", icon: "✋", color: "#eff6ff", border: "#bfdbfe", text: "#1e40af" },
  { label: "Diary Entries", value: "7", unit: "written", icon: "📓", color: "#f0fdf4", border: "#bbf7d0", text: "#166534" },
  { label: "Best Streak", value: "5", unit: "days", icon: "🏆", color: "#fdf4ff", border: "#e9d5ff", text: "#6b21a8" },
];

export default function ProfilePage() {
  return (
    <div className="app-shell" style={{ minHeight: "100dvh", background: "var(--color-bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "100px" }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(160deg, #e8f4fd 0%, #d4eaf7 50%, #c8e8e0 100%)",
          padding: "56px 24px 32px",
          textAlign: "center",
          borderRadius: "0 0 28px 28px",
        }}>
          {/* Settings icon */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
            <Link href="/settings">
              <button style={{
                background: "rgba(255,255,255,0.6)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Avatar */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 6px 20px rgba(91,155,213,0.35)",
                border: "3px solid white",
              }}>
                J
              </div>
              <div style={{
                position: "absolute",
                bottom: "2px",
                right: "2px",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "var(--color-secondary)",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ fontSize: "10px" }}>✓</span>
              </div>
            </div>
          </div>

          <h1 style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 4px" }}>Juan Rivera</h1>
          <p style={{ fontSize: "14px", color: "var(--color-text-muted)", margin: "0 0 4px" }}>juan@example.com</p>
          <span style={{
            display: "inline-block",
            background: "rgba(91,155,213,0.15)",
            color: "var(--color-primary-dark)",
            borderRadius: "20px",
            padding: "3px 12px",
            fontSize: "12px",
            fontWeight: 600,
          }}>
            Member since Jan 2026
          </span>
        </div>

        <div style={{ padding: "24px" }}>

          {/* Stats grid */}
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 12px" }}>Your Progress</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
            {statCards.map((stat) => (
              <div key={stat.label} style={{
                background: stat.color,
                border: `1px solid ${stat.border}`,
                borderRadius: "16px",
                padding: "16px",
              }}>
                <div style={{ fontSize: "22px", marginBottom: "6px" }}>{stat.icon}</div>
                <div style={{ fontSize: "26px", fontWeight: 700, color: stat.text, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "11px", color: stat.text, opacity: 0.7, marginTop: "2px" }}>{stat.unit}</div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Weekly activity chart */}
          <div style={{
            background: "var(--color-bg-card)",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "24px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}>
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 16px" }}>This Week&apos;s Activity</h3>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-end", height: "80px" }}>
              {[60, 30, 80, 50, 100, 40, 20].map((height, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <div style={{
                    width: "100%",
                    height: `${height * 0.7}px`,
                    borderRadius: "6px",
                    background: i < 3
                      ? "linear-gradient(180deg, var(--color-secondary), var(--color-secondary-dark))"
                      : "var(--color-border)",
                    transition: "height 0.4s ease",
                  }} />
                  <span style={{ fontSize: "10px", color: "var(--color-text-light)" }}>
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 12px" }}>Achievements</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            {achievements.map((badge) => (
              <div key={badge.label} style={{
                background: badge.unlocked ? "var(--color-bg-card)" : "#f8f9fa",
                borderRadius: "14px",
                padding: "14px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                border: badge.unlocked ? "1px solid var(--color-secondary-light)" : "1px solid var(--color-border)",
                opacity: badge.unlocked ? 1 : 0.5,
                boxShadow: badge.unlocked ? "0 2px 10px rgba(122,184,154,0.2)" : "none",
              }}>
                <span style={{ fontSize: "26px", filter: badge.unlocked ? "none" : "grayscale(1)" }}>{badge.icon}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text)", textAlign: "center", lineHeight: 1.2 }}>
                  {badge.label}
                </span>
                <span style={{ fontSize: "10px", color: "var(--color-text-muted)", textAlign: "center", lineHeight: 1.3 }}>
                  {badge.desc}
                </span>
                {!badge.unlocked && (
                  <span style={{
                    fontSize: "10px",
                    background: "var(--color-bg)",
                    color: "var(--color-text-light)",
                    borderRadius: "6px",
                    padding: "2px 6px",
                  }}>Locked</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      <BottomNav />
    </div>
  );
}
