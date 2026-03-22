"use client";

import { useState } from "react";
import Link from "next/link";
import BottomNav from "@/components/ui/BottomNav";

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const reflectionPrompts = [
  "What triggered your last strong reaction?",
  "When did you pause before responding today?",
  "What pattern did you notice in yourself this week?",
  "Name one moment you're proud of today.",
];

const quickActions = [
  { icon: "✍️", label: "Write in diary", href: "/diary" },
  { icon: "📚", label: "Learn something", href: "/learn" },
  { icon: "🔔", label: "Set reminder", href: "/settings" },
];

export default function HomePage() {
  const [streakMarked, setStreakMarked] = useState(false);
  const [activeStreak] = useState(3); // days 0-2 completed this week
  const [promptIndex] = useState(() => Math.floor(Math.random() * reflectionPrompts.length));

  const handleMarkStreak = () => {
    setStreakMarked(true);
  };

  return (
    <div className="app-shell" style={{ minHeight: "100dvh", background: "var(--color-bg)", display: "flex", flexDirection: "column" }}>

      {/* Scrollable content area */}
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "100px" }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(160deg, #e8f4fd 0%, #d4eaf7 60%, #c8e8e0 100%)",
          padding: "56px 24px 28px",
          borderRadius: "0 0 28px 28px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h1 style={{ fontSize: "26px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                Hello, Juan 👋
              </h1>
              <p style={{ fontSize: "14px", color: "var(--color-text-muted)", margin: 0 }}>
                Ready to reflect today?
              </p>
            </div>
            {/* Avatar / notification bell */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </button>
              <Link href="/profile">
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "16px",
                }}>
                  J
                </div>
              </Link>
            </div>
          </div>

          {/* Reality Check card */}
          <div style={{
            marginTop: "20px",
            background: "var(--color-warning-bg)",
            border: "1px solid var(--color-warning-border)",
            borderRadius: "16px",
            padding: "16px 18px",
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
          }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "#fef3c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ fontSize: "18px" }}>💡</span>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#92400e", margin: "0 0 3px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Reality Check
              </p>
              <p style={{ fontSize: "14px", color: "#78350f", margin: 0, lineHeight: 1.5 }}>
                You&apos;ve responded impulsively 3 times this week. Pausing for 6 seconds before reacting can reduce this significantly.
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: "24px" }}>

          {/* Weekly Streak */}
          <div style={{
            background: "var(--color-bg-card)",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "16px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 2px" }}>
                  Weekly Streak
                </h2>
                <p style={{ fontSize: "12px", color: "var(--color-text-muted)", margin: 0 }}>
                  Keep the momentum going
                </p>
              </div>
              <div style={{
                background: "linear-gradient(135deg, #fef9ec, #fef3c7)",
                borderRadius: "12px",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}>
                <span style={{ fontSize: "16px" }}>🔥</span>
                <span style={{ fontSize: "16px", fontWeight: 700, color: "#92400e" }}>
                  {streakMarked ? activeStreak + 1 : activeStreak}
                </span>
              </div>
            </div>

            {/* Day circles */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {weekDays.map((day, i) => {
                const isDone = i < activeStreak || (streakMarked && i === activeStreak);
                const isToday = i === activeStreak;
                return (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                    <div style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: isDone
                        ? "linear-gradient(135deg, var(--color-secondary-dark), var(--color-secondary))"
                        : isToday && !streakMarked
                        ? "transparent"
                        : "var(--color-bg)",
                      border: isToday && !streakMarked ? "2px dashed var(--color-secondary)" : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isDone ? "0 3px 10px rgba(79,154,116,0.3)" : "none",
                      transition: "all 0.3s",
                    }}>
                      {isDone ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span style={{ fontSize: "11px", color: "var(--color-text-light)", fontWeight: 500 }}>{i + 1}</span>
                      )}
                    </div>
                    <span style={{
                      fontSize: "11px",
                      color: isToday ? "var(--color-secondary-dark)" : "var(--color-text-light)",
                      fontWeight: isToday ? 700 : 400,
                    }}>
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          {!streakMarked ? (
            <button
              onClick={handleMarkStreak}
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, var(--color-secondary-dark), var(--color-secondary))",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(79,154,116,0.3)",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: "18px" }}>✋</span>
              I paused today — mark my streak!
            </button>
          ) : (
            <div style={{
              width: "100%",
              padding: "18px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
              border: "1.5px solid #86efac",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxSizing: "border-box",
            }}>
              <span style={{ fontSize: "20px" }}>🎉</span>
              <div>
                <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "#166534" }}>Amazing! Streak marked!</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#4ade80" }}>Keep it going tomorrow.</p>
              </div>
            </div>
          )}

          {/* Today's Reflection Prompt */}
          <div style={{
            background: "linear-gradient(135deg, #eef6ff, #e8f4fd)",
            border: "1px solid var(--color-primary-light)",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ fontSize: "18px" }}>🪞</span>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "var(--color-primary-dark)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Today&apos;s Prompt
              </p>
            </div>
            <p style={{ fontSize: "16px", color: "var(--color-text)", margin: "0 0 14px", lineHeight: 1.6, fontWeight: 500 }}>
              &ldquo;{reflectionPrompts[promptIndex]}&rdquo;
            </p>
            <Link href="/diary" style={{ textDecoration: "none" }}>
              <button style={{
                background: "var(--color-primary)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "10px 18px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}>
                Reflect on this
              </button>
            </Link>
          </div>

          {/* Quick Actions */}
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 12px" }}>Quick Actions</h3>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            {quickActions.map((action) => (
              <Link key={action.href} href={action.href} style={{ textDecoration: "none", flex: 1 }}>
                <div style={{
                  background: "var(--color-bg-card)",
                  borderRadius: "16px",
                  padding: "16px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                  transition: "transform 0.15s",
                  border: "1px solid var(--color-border)",
                }}>
                  <span style={{ fontSize: "22px" }}>{action.icon}</span>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-muted)", textAlign: "center", lineHeight: 1.3 }}>
                    {action.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent insights */}
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 12px" }}>Recent Insights</h3>
          {[
            { icon: "😤", label: "Anger pattern", desc: "Identified on Tuesday • 3 triggers", color: "#fee2e2", border: "#fca5a5" },
            { icon: "🧘", label: "Mindful moment", desc: "Logged on Monday • 4 min pause", color: "#f0fdf4", border: "#86efac" },
          ].map((insight) => (
            <div key={insight.label} style={{
              background: insight.color,
              border: `1px solid ${insight.border}`,
              borderRadius: "14px",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "10px",
            }}>
              <span style={{ fontSize: "24px" }}>{insight.icon}</span>
              <div>
                <p style={{ margin: "0 0 2px", fontSize: "14px", fontWeight: 600, color: "var(--color-text)" }}>{insight.label}</p>
                <p style={{ margin: 0, fontSize: "12px", color: "var(--color-text-muted)" }}>{insight.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <BottomNav />
    </div>
  );
}
