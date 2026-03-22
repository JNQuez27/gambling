"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/ui/BottomNav";

type ToggleSetting = {
  key: string;
  label: string;
  desc: string;
  value: boolean;
};

function Toggle({ value, onChange }: { value: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      style={{
        width: "48px",
        height: "28px",
        borderRadius: "14px",
        background: value ? "var(--color-secondary)" : "var(--color-border)",
        border: "none",
        cursor: "pointer",
        position: "relative",
        transition: "background 0.25s ease",
        flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute",
        top: "3px",
        left: value ? "23px" : "3px",
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        transition: "left 0.25s ease",
      }} />
    </button>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: "12px",
      fontWeight: 700,
      color: "var(--color-text-muted)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      margin: "0 0 10px",
      paddingLeft: "4px",
    }}>
      {children}
    </p>
  );
}

function SettingsRow({
  icon,
  label,
  desc,
  right,
  danger = false,
  onClick,
}: {
  icon: string;
  label: string;
  desc?: string;
  right?: React.ReactNode;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        width: "100%",
        padding: "14px 16px",
        background: "none",
        border: "none",
        cursor: onClick ? "pointer" : "default",
        textAlign: "left",
        borderBottom: "1px solid var(--color-border)",
        transition: "background 0.15s",
      }}
    >
      <div style={{
        width: "38px",
        height: "38px",
        borderRadius: "10px",
        background: danger ? "#fee2e2" : "var(--color-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontSize: "15px", fontWeight: 500, color: danger ? "#dc2626" : "var(--color-text)" }}>
          {label}
        </p>
        {desc && <p style={{ margin: 0, fontSize: "12px", color: "var(--color-text-muted)", marginTop: "1px" }}>{desc}</p>}
      </div>
      {right ?? (
        onClick && !danger && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        )
      )}
    </button>
  );
}

export default function SettingsPage() {
  const router = useRouter();
  const [toggles, setToggles] = useState<ToggleSetting[]>([
    { key: "daily_reminder", label: "Daily reminder", desc: "Get a gentle nudge each day at 8:00 AM", value: true },
    { key: "streak_alerts", label: "Streak alerts", desc: "Remind me if I'm about to lose my streak", value: true },
    { key: "insight_notif", label: "Weekly insights", desc: "Receive a summary every Sunday evening", value: false },
    { key: "pause_prompts", label: "Pause prompts", desc: "Random mindfulness nudges throughout the day", value: false },
  ]);

  const [privacy, setPrivacy] = useState({
    biometric: false,
    analytics: true,
  });

  const toggleItem = (key: string) => {
    setToggles((prev) => prev.map((t) => (t.key === key ? { ...t, value: !t.value } : t)));
  };

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="app-shell" style={{ minHeight: "100dvh", background: "var(--color-bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "100px" }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(160deg, #e8f4fd 0%, #d4eaf7 60%, #c8e8e0 100%)",
          padding: "56px 24px 28px",
          borderRadius: "0 0 28px 28px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}>
          <button
            onClick={() => router.back()}
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div>
            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-text)", margin: 0, letterSpacing: "-0.02em" }}>Settings</h1>
            <p style={{ fontSize: "13px", color: "var(--color-text-muted)", margin: 0 }}>Manage your preferences</p>
          </div>
        </div>

        <div style={{ padding: "24px" }}>

          {/* Account */}
          <SectionHeader>Account</SectionHeader>
          <div style={{ background: "var(--color-bg-card)", borderRadius: "16px", overflow: "hidden", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            <SettingsRow icon="👤" label="Edit Profile" desc="Name, email, avatar" onClick={() => {}} />
            <SettingsRow icon="🔑" label="Change Password" desc="Update your security" onClick={() => {}} />
            <SettingsRow icon="📧" label="Connected Accounts" desc="Google, Apple" onClick={() => {}} />
          </div>

          {/* Notifications */}
          <SectionHeader>Notifications</SectionHeader>
          <div style={{ background: "var(--color-bg-card)", borderRadius: "16px", overflow: "hidden", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            {toggles.map((t, i) => (
              <div key={t.key} style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 16px",
                borderBottom: i < toggles.length - 1 ? "1px solid var(--color-border)" : "none",
              }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: "15px", fontWeight: 500, color: "var(--color-text)" }}>{t.label}</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>{t.desc}</p>
                </div>
                <Toggle value={t.value} onChange={() => toggleItem(t.key)} />
              </div>
            ))}
          </div>

          {/* Privacy */}
          <SectionHeader>Privacy & Security</SectionHeader>
          <div style={{ background: "var(--color-bg-card)", borderRadius: "16px", overflow: "hidden", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", borderBottom: "1px solid var(--color-border)" }}>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: "15px", fontWeight: 500, color: "var(--color-text)" }}>Biometric Lock</p>
                <p style={{ margin: 0, fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>Require Face ID or fingerprint</p>
              </div>
              <Toggle value={privacy.biometric} onChange={() => setPrivacy((p) => ({ ...p, biometric: !p.biometric }))} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", borderBottom: "1px solid var(--color-border)" }}>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: "15px", fontWeight: 500, color: "var(--color-text)" }}>Anonymous Analytics</p>
                <p style={{ margin: 0, fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>Help us improve the app</p>
              </div>
              <Toggle value={privacy.analytics} onChange={() => setPrivacy((p) => ({ ...p, analytics: !p.analytics }))} />
            </div>
            <SettingsRow icon="📋" label="Privacy Policy" onClick={() => {}} />
          </div>

          {/* General */}
          <SectionHeader>General</SectionHeader>
          <div style={{ background: "var(--color-bg-card)", borderRadius: "16px", overflow: "hidden", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            <SettingsRow icon="🌐" label="Language" desc="English" onClick={() => {}} />
            <SettingsRow icon="🌙" label="Appearance" desc="Light mode" onClick={() => {}} />
            <SettingsRow icon="💾" label="Export Data" desc="Download your diary & logs" onClick={() => {}} />
            <SettingsRow icon="❓" label="Help & Support" onClick={() => {}} />
            <SettingsRow icon="⭐" label="Rate the App" onClick={() => {}} />
          </div>

          {/* Danger zone */}
          <SectionHeader>Account Actions</SectionHeader>
          <div style={{ background: "var(--color-bg-card)", borderRadius: "16px", overflow: "hidden", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            <SettingsRow icon="🚪" label="Log Out" danger onClick={handleLogout} />
            <SettingsRow icon="🗑️" label="Delete Account" desc="This action cannot be undone" danger onClick={() => {}} />
          </div>

          {/* App version */}
          <p style={{ textAlign: "center", fontSize: "12px", color: "var(--color-text-light)" }}>
            Reflect v1.0.0 • Made with care
          </p>

        </div>
      </div>

      <BottomNav />
    </div>
  );
}
