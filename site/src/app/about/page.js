"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const milestones = [
  { year: "2019", title: "Genesis", description: "Founded with a vision to merge AI and consumer electronics." },
  { year: "2020", title: "V1 Chip", description: "First proprietary neural processing chip developed in-house." },
  { year: "2021", title: "AuraSound", description: "Launched first product — the AuraSound headphones that redefined personal audio." },
  { year: "2022", title: "Ecosystem", description: "Expanded to 5 products, establishing the Vionics connected ecosystem." },
  { year: "2023", title: "AI Engine", description: "V2 Neural Engine powers on-device AI across all products." },
  { year: "2024", title: "Global", description: "Expanded to 40+ countries. Named 'Most Innovative Tech Company' by Wired." },
  { year: "2025", title: "V3 Era", description: "V3 Neural SoC launches. 7 flagship products. Intelligence, engineered." },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Precision Engineering",
    description: "Every product is designed, tested, and refined through thousands of iterations. We accept nothing less than perfection.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "AI-First Philosophy",
    description: "Intelligence isn't an add-on — it's the foundation. Every Vionics product thinks, adapts, and evolves with you.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy by Design",
    description: "Your data stays yours. On-device AI processing means your personal information never leaves your device.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Sustainable Future",
    description: "Carbon-neutral operations, recycled materials, and products built to last. Technology that respects the planet.",
  },
];

export default function AboutPage() {
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
          background: "radial-gradient(ellipse at 50% 30%, rgba(0,80,255,0.06) 0%, transparent 60%)",
        }}
      >
        <span className="product-hero-label">Our Story</span>
        <h1 className="text-hero" style={{ marginTop: "var(--space-4)" }}>
          The Future is<br />
          <span className="text-gradient">Intelligent</span>
        </h1>
        <p className="text-body" style={{ maxWidth: 600, margin: "0 auto" }}>
          Vionics was born from a simple belief: technology should anticipate
          your needs, adapt to your life, and amplify your potential.
        </p>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container container-narrow" style={{ textAlign: "center" }}>
          <span className="text-caption" style={{ color: "var(--color-glow)" }}>Our Mission</span>
          <h2 className="text-display" style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-6)" }}>
            Engineering Intelligence<br />Into Every Interaction
          </h2>
          <p className="text-body" style={{ maxWidth: 700, margin: "0 auto", fontSize: "var(--text-lg)" }}>
            We don&apos;t just build devices — we create intelligent companions.
            Every Vionics product is infused with AI that learns, adapts, and
            evolves. From the neural processors we design to the algorithms we
            train, intelligence isn&apos;t an afterthought — it&apos;s the foundation.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <span className="text-caption" style={{ color: "var(--color-glow)" }}>Our Values</span>
            <h2 className="text-display" style={{ marginTop: "var(--space-3)" }}>
              What Drives Us
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-6)",
          }}>
            {values.map((v, i) => (
              <RevealCard key={i} delay={i * 100}>
                <div className="glass-card" style={{ padding: "var(--space-8)", height: "100%" }}>
                  <div style={{
                    width: 48, height: 48,
                    borderRadius: "var(--radius-md)",
                    background: "rgba(0,214,255,0.08)",
                    border: "1px solid rgba(0,214,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-glow)",
                    marginBottom: "var(--space-4)",
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{
                    fontSize: "var(--text-xl)", fontWeight: 700,
                    marginBottom: "var(--space-2)",
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontSize: "var(--text-sm)", color: "var(--color-text-secondary)",
                    lineHeight: "var(--leading-relaxed)",
                  }}>
                    {v.description}
                  </p>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container container-narrow">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <span className="text-caption" style={{ color: "var(--color-glow)" }}>Our Journey</span>
            <h2 className="text-display" style={{ marginTop: "var(--space-3)" }}>
              Milestones
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div style={{
              position: "absolute", left: "50%", top: 0, bottom: 0,
              width: 1, background: "var(--color-border)",
              transform: "translateX(-50%)",
            }} />

            {milestones.map((m, i) => (
              <RevealCard key={i} delay={i * 80}>
                <div style={{
                  display: "flex",
                  justifyContent: i % 2 === 0 ? "flex-end" : "flex-start",
                  paddingLeft: i % 2 === 0 ? 0 : "calc(50% + 2rem)",
                  paddingRight: i % 2 === 0 ? "calc(50% + 2rem)" : 0,
                  marginBottom: "var(--space-6)",
                  position: "relative",
                }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: "50%", top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 12, height: 12, borderRadius: "50%",
                    background: "var(--color-glow)",
                    boxShadow: "0 0 20px rgba(0,214,255,0.4)",
                    zIndex: 2,
                  }} />
                  <div className="glass-card" style={{ padding: "var(--space-5)", width: "100%" }}>
                    <div style={{
                      fontSize: "var(--text-xs)", color: "var(--color-glow)",
                      fontWeight: 700, letterSpacing: "0.1em", marginBottom: "var(--space-1)",
                    }}>
                      {m.year}
                    </div>
                    <div style={{ fontWeight: 700, marginBottom: "var(--space-1)" }}>{m.title}</div>
                    <div style={{
                      fontSize: "var(--text-sm)", color: "var(--color-text-secondary)",
                    }}>
                      {m.description}
                    </div>
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Join the <span className="text-gradient">Future</span>
            </h2>
            <p className="cta-subtitle">
              Experience the Vionics ecosystem. Intelligence, engineered for you.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn btn-primary btn-lg">
                Explore Products
              </Link>
              <Link href="/contact" className="btn btn-glow btn-lg">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function RevealCard({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
