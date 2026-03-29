"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="section-full"
        style={{
          flexDirection: "column",
          gap: "var(--space-4)",
          textAlign: "center",
          padding: "0 var(--space-6)",
          minHeight: "45vh",
          background: "radial-gradient(ellipse at 50% 30%, rgba(0,80,255,0.06) 0%, transparent 60%)",
        }}
      >
        <span className="product-hero-label">Connect</span>
        <h1 className="text-display" style={{ marginTop: "var(--space-3)" }}>
          Let&apos;s <span className="text-gradient">Talk</span>
        </h1>
        <p className="text-body" style={{ maxWidth: 500 }}>
          Questions, partnerships, or just want to say hello?
          We&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-8)",
          }}>
            {/* Form */}
            <div className="glass-card" style={{ padding: "var(--space-8)" }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{
                  display: "flex", flexDirection: "column", gap: "var(--space-5)",
                }}>
                  <h2 style={{ fontSize: "var(--text-2xl)", fontWeight: 700 }}>
                    Send a Message
                  </h2>
                  <InputField
                    label="Name"
                    type="text"
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                    placeholder="Your name"
                  />
                  <InputField
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                    placeholder="your@email.com"
                  />
                  <InputField
                    label="Subject"
                    type="text"
                    value={formData.subject}
                    onChange={(v) => setFormData({ ...formData, subject: v })}
                    placeholder="How can we help?"
                  />
                  <div>
                    <label style={{
                      display: "block", fontSize: "var(--text-xs)",
                      fontWeight: 600, textTransform: "uppercase",
                      letterSpacing: "0.1em", color: "var(--color-text-tertiary)",
                      marginBottom: "var(--space-2)",
                    }}>
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more..."
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "var(--space-3) var(--space-4)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        color: "var(--color-text-primary)",
                        fontSize: "var(--text-sm)",
                        fontFamily: "inherit",
                        resize: "vertical",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => e.target.style.borderColor = "var(--color-glow)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--color-border)"}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                    Send Message
                  </button>
                </form>
              ) : (
                <div style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: "var(--space-4)", padding: "var(--space-12) 0",
                  textAlign: "center",
                }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: "rgba(0,214,255,0.1)",
                    border: "1px solid rgba(0,214,255,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-glow)", fontSize: "var(--text-2xl)",
                  }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: 700 }}>
                    Message Sent
                  </h3>
                  <p className="text-body">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <div className="glass-card" style={{ padding: "var(--space-6)" }}>
                <h3 style={{
                  fontSize: "var(--text-xs)", fontWeight: 600,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "var(--color-glow)", marginBottom: "var(--space-4)",
                }}>
                  Headquarters
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-sm)", lineHeight: "1.8" }}>
                  Vionics Technologies Inc.<br />
                  One Infinite Loop, Tower V<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>

              <div className="glass-card" style={{ padding: "var(--space-6)" }}>
                <h3 style={{
                  fontSize: "var(--text-xs)", fontWeight: 600,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "var(--color-glow)", marginBottom: "var(--space-4)",
                }}>
                  Contact
                </h3>
                <div style={{
                  display: "flex", flexDirection: "column", gap: "var(--space-3)",
                  fontSize: "var(--text-sm)", color: "var(--color-text-secondary)",
                }}>
                  <div>
                    <span style={{ color: "var(--color-text-muted)" }}>Email: </span>
                    hello@vionics.com
                  </div>
                  <div>
                    <span style={{ color: "var(--color-text-muted)" }}>Press: </span>
                    press@vionics.com
                  </div>
                  <div>
                    <span style={{ color: "var(--color-text-muted)" }}>Support: </span>
                    support@vionics.com
                  </div>
                  <div>
                    <span style={{ color: "var(--color-text-muted)" }}>Phone: </span>
                    +1 (415) 555-0199
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: "var(--space-6)" }}>
                <h3 style={{
                  fontSize: "var(--text-xs)", fontWeight: 600,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "var(--color-glow)", marginBottom: "var(--space-4)",
                }}>
                  Follow Us
                </h3>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                  {["X (Twitter)", "Instagram", "YouTube", "LinkedIn"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      style={{
                        padding: "var(--space-2) var(--space-4)",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--color-border)",
                        fontSize: "var(--text-xs)",
                        color: "var(--color-text-secondary)",
                        fontWeight: 500,
                        transition: "all 0.2s",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.borderColor = "var(--color-glow)";
                        e.target.style.color = "var(--color-glow)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.borderColor = "var(--color-border)";
                        e.target.style.color = "var(--color-text-secondary)";
                      }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InputField({ label, type, value, onChange, placeholder }) {
  return (
    <div>
      <label style={{
        display: "block", fontSize: "var(--text-xs)",
        fontWeight: 600, textTransform: "uppercase",
        letterSpacing: "0.1em", color: "var(--color-text-tertiary)",
        marginBottom: "var(--space-2)",
      }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "var(--space-3) var(--space-4)",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          color: "var(--color-text-primary)",
          fontSize: "var(--text-sm)",
          fontFamily: "inherit",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => e.target.style.borderColor = "var(--color-glow)"}
        onBlur={(e) => e.target.style.borderColor = "var(--color-border)"}
      />
    </div>
  );
}
