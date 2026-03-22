"use client";

import { useState } from "react";
import BottomNav from "@/components/ui/BottomNav";

const moodEmojis = ["😔", "😕", "😐", "🙂", "😊"];
const moodLabels = ["Struggling", "Low", "Neutral", "Good", "Great"];

const entries = [
  {
    id: 1,
    date: "Today, 9:41 AM",
    mood: 4,
    title: "Noticed myself getting frustrated",
    preview: "Someone cut me off in traffic and I felt the familiar heat rising. Instead of honoring my reaction...",
    tags: ["anger", "awareness"],
  },
  {
    id: 2,
    date: "Yesterday, 7:15 PM",
    mood: 3,
    title: "A moment of unexpected calm",
    preview: "My coworker disagreed with me in the meeting. I took a breath. I listened. It felt different...",
    tags: ["progress", "work"],
  },
  {
    id: 3,
    date: "Mon, Mar 20",
    mood: 2,
    title: "Tough morning",
    preview: "Woke up with a lot of tension. Couldn't identify exactly what was bothering me, but I sat with it...",
    tags: ["anxiety", "reflection"],
  },
];

export default function DiaryPage() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [entryText, setEntryText] = useState("");
  const [showCompose, setShowCompose] = useState(false);

  const handleSave = () => {
    setShowCompose(false);
    setEntryText("");
    setSelectedMood(null);
  };

  return (
    <div className="app-shell" style={{ minHeight: "100dvh", background: "var(--color-bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "100px" }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(160deg, #e8f4fd 0%, #d4eaf7 50%, #c8e8e0 100%)",
          padding: "56px 24px 24px",
          borderRadius: "0 0 28px 28px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h1 style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 4px" }}>My Diary</h1>
              <p style={{ fontSize: "13px", color: "var(--color-text-muted)", margin: 0 }}>Your private reflection space</p>
            </div>
            <button
              onClick={() => setShowCompose(true)}
              style={{
                background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))",
                border: "none",
                borderRadius: "14px",
                padding: "10px 16px",
                color: "white",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 4px 12px rgba(58,125,191,0.3)",
              }}
            >
              <span style={{ fontSize: "16px" }}>+</span> New Entry
            </button>
          </div>
        </div>

        <div style={{ padding: "24px" }}>

          {/* Compose panel */}
          {showCompose && (
            <div style={{
              background: "var(--color-bg-card)",
              borderRadius: "20px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid var(--color-primary-light)",
            }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 14px" }}>How are you feeling?</h3>

              {/* Mood selector */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                {moodEmojis.map((emoji, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedMood(i)}
                    style={{
                      flex: 1,
                      padding: "10px 0",
                      borderRadius: "12px",
                      border: selectedMood === i ? "2px solid var(--color-primary)" : "2px solid transparent",
                      background: selectedMood === i ? "var(--color-primary-light)" : "var(--color-bg)",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      transition: "all 0.2s",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{emoji}</span>
                    <span style={{ fontSize: "9px", color: "var(--color-text-muted)", fontWeight: 500 }}>{moodLabels[i]}</span>
                  </button>
                ))}
              </div>

              <textarea
                value={entryText}
                onChange={(e) => setEntryText(e.target.value)}
                placeholder="What's on your mind? Write freely, without judgment..."
                rows={5}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1.5px solid var(--color-border)",
                  background: "var(--color-bg)",
                  fontSize: "15px",
                  color: "var(--color-text)",
                  resize: "none",
                  outline: "none",
                  lineHeight: 1.6,
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
              />

              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  onClick={() => setShowCompose(false)}
                  style={{
                    flex: 1,
                    padding: "13px",
                    borderRadius: "12px",
                    border: "1.5px solid var(--color-border)",
                    background: "transparent",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-text-muted)",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!entryText.trim()}
                  style={{
                    flex: 2,
                    padding: "13px",
                    borderRadius: "12px",
                    border: "none",
                    background: entryText.trim() ? "linear-gradient(135deg, var(--color-secondary-dark), var(--color-secondary))" : "var(--color-border)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: entryText.trim() ? "white" : "var(--color-text-light)",
                    cursor: entryText.trim() ? "pointer" : "not-allowed",
                    boxShadow: entryText.trim() ? "0 4px 12px rgba(79,154,116,0.3)" : "none",
                  }}
                >
                  Save Entry
                </button>
              </div>
            </div>
          )}

          {/* Entries */}
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 12px" }}>Past Entries</h3>
          {entries.map((entry) => (
            <div key={entry.id} style={{
              background: "var(--color-bg-card)",
              borderRadius: "16px",
              padding: "16px",
              marginBottom: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              cursor: "pointer",
              border: "1px solid var(--color-border)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <div>
                  <p style={{ margin: 0, fontSize: "10px", color: "var(--color-text-light)", letterSpacing: "0.04em" }}>{entry.date}</p>
                  <p style={{ margin: "4px 0 0", fontSize: "15px", fontWeight: 600, color: "var(--color-text)" }}>{entry.title}</p>
                </div>
                <span style={{ fontSize: "24px", flexShrink: 0 }}>{moodEmojis[entry.mood]}</span>
              </div>
              <p style={{ margin: "0 0 10px", fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                {entry.preview}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {entry.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: "11px",
                    background: "var(--color-bg)",
                    color: "var(--color-primary-dark)",
                    borderRadius: "8px",
                    padding: "3px 8px",
                    fontWeight: 500,
                    border: "1px solid var(--color-primary-light)",
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
