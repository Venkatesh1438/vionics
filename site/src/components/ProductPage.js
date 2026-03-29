"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

/**
 * ProductPage — Reusable cinematic product page component
 * 
 * Renders:
 * 1. Loading screen with progress
 * 2. Scroll-driven canvas animation (sticky viewport) with feature overlays
 * 3. Experience section (static, below canvas)
 * 4. Specs table (glassmorphism cards)
 * 5. CTA section
 * 
 * Pass in a product object from data/products.js
 */
export default function ProductPage({ product }) {
  const canvasRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(-1);
  const [heroVisible, setHeroVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const currentRenderFrameRef = useRef(0);

  const folder = product.folder;
  const totalFrames = product.totalFrames || 40;

  // ── Build sections array ────────────────────────────────
  const sections = [];
  if (product.sections?.engineering) {
    sections.push({
      id: "engineering",
      ...product.sections.engineering,
      align: "left",
      scrollRange: [0.05, 0.28],
    });
  }
  if (product.sections?.coreFeature) {
    sections.push({
      id: "core",
      ...product.sections.coreFeature,
      align: "right",
      scrollRange: [0.36, 0.60],
    });
  }
  if (product.sections?.ai) {
    sections.push({
      id: "ai",
      ...product.sections.ai,
      align: "left",
      scrollRange: [0.68, 0.92],
    });
  }

  // ── Preload frames ──────────────────────────────────────
  useEffect(() => {
    let count = 0;
    const imgs = [];

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const num = String(i + 1).padStart(3, "0");
      img.src = `${folder}/ezgif-frame-${num}.png`;
      img.onload = img.onerror = () => {
        count++;
        setLoadProgress(Math.round((count / totalFrames) * 100));
        if (count === totalFrames) setLoaded(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [folder, totalFrames]);

  // ── Draw frame to canvas ────────────────────────────────
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!img?.complete || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const targetWidth = Math.floor(rect.width * dpr);
    const targetHeight = Math.floor(rect.height * dpr);

    // Only update canvas dimensions if they changed, otherwise just clear it
    // Setting canvas.width/height implicitly clears the buffer and causes flickering
    // if done on every single scroll frame.
    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      ctx.scale(dpr, dpr);
    } else {
      ctx.clearRect(0, 0, rect.width, rect.height);
    }

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = rect.width / rect.height;
    let dw, dh, dx, dy;

    // Use "contain" logic to ensure the entire product frame is always visible
    // without clipping the edges.
    if (imgAspect > canvasAspect) {
      dw = rect.width;
      dh = dw / imgAspect;
      dx = 0;
      dy = (rect.height - dh) / 2;
    } else {
      dh = rect.height;
      dw = dh * imgAspect;
      dx = (rect.width - dw) / 2;
      dy = 0;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // ── Smooth Frame Interpolation ──────────────────────────
  useEffect(() => {
    if (!loaded) return;
    drawFrame(0);

    let animationId;
    const renderLoop = () => {
      // Lerp (linear interpolation) formula for buttery smooth easing
      // current + (target - current) * easeFactor
      const diff = targetFrameRef.current - currentRenderFrameRef.current;
      
      if (Math.abs(diff) > 0.02) {
        currentRenderFrameRef.current += diff * 0.12; // Easing speed (lower is smoother but slower)
        const frameToDraw = Math.min(
          totalFrames - 1,
          Math.max(0, Math.round(currentRenderFrameRef.current))
        );
        
        if (frameToDraw !== currentFrameRef.current) {
          currentFrameRef.current = frameToDraw;
          drawFrame(frameToDraw);
        }
      }
      animationId = requestAnimationFrame(renderLoop);
    };
    
    animationId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationId);
  }, [loaded, drawFrame, totalFrames]);

  // ── Master scroll handler ───────────────────────────────
  useEffect(() => {
    if (!loaded) return;

    const onScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollable = container.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      setScrollProgress(progress);

      // Set target frame for the lerp loop instead of directly snapping
      targetFrameRef.current = progress * (totalFrames - 1);

      // Hero visibility
      setHeroVisible(progress < 0.06);

      // Active section
      let active = -1;
      sections.forEach((sec, i) => {
        if (progress >= sec.scrollRange[0] && progress <= sec.scrollRange[1]) {
          active = i;
        }
      });
      setActiveSection(active);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [loaded, totalFrames, sections]);

  // ── Resize handler ──────────────────────────────────────
  useEffect(() => {
    if (!loaded) return;
    const onResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [loaded, drawFrame]);

  // ── Derive display name ─────────────────────────────────
  const shortName = product.name.split(" ").slice(-2).join(" ");

  return (
    <>
      {/* ━━ LOADING SCREEN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {!loaded && (
        <div className="loading-screen">
          <div className="loading-logo">
            <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
              <path d="M18 22 L 38 26 L 48 86 L 26 40 Z" fill="url(#pg-v-dark)" />
              <path d="M82 22 L 64 26 L 53 50 L 70 38 Z" fill="url(#pg-v-dark)" />
              <path d="M68 41 L 49 55 L 50 86 Z" fill="url(#pg-v-blue)" />
              <defs>
                <linearGradient id="pg-v-blue" x1="49" y1="55" x2="68" y2="86" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0050FF" />
                  <stop offset="1" stopColor="#00D6FF" />
                </linearGradient>
                <linearGradient id="pg-v-dark" x1="18" y1="22" x2="50" y2="86" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFFFF" />
                  <stop offset="1" stopColor="#94A3B8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="loading-bar">
            <div className="loading-bar-fill" style={{ width: `${loadProgress}%` }} />
          </div>
          <span className="loading-text">Loading {shortName} — {loadProgress}%</span>
        </div>
      )}

      {/* ━━ SCROLL CONTAINER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div ref={scrollContainerRef} style={{ height: "500vh", position: "relative" }}>
        {/* Sticky viewport */}
        <div style={{
          position: "sticky", top: 0,
          width: "100%", height: "100vh", overflow: "hidden",
        }}>
          {/* Canvas */}
          <canvas ref={canvasRef} style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", display: "block",
          }} />

          {/* Gradient overlays */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to bottom, 
              rgba(5,5,5,${0.3 + scrollProgress * 0.2}) 0%, 
              transparent 25%, transparent 65%, 
              rgba(5,5,5,${0.4 + scrollProgress * 0.4}) 100%)`,
            pointerEvents: "none", zIndex: 2,
          }} />

          {/* ── HERO CONTENT ──────────────────────────────── */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 3,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "flex-start",
            paddingTop: "clamp(100px, 15vh, 160px)",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(-30px)",
            transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
            pointerEvents: heroVisible ? "auto" : "none",
          }}>
            <span className="product-hero-label">{product.category}</span>
            <h1 className="product-hero-title" style={{ marginTop: "1rem", textAlign: "center" }}>
              {shortName}
            </h1>
            <p className="product-hero-tagline" style={{ marginTop: "0.75rem", textAlign: "center" }}>
              {product.tagline}
            </p>
          </div>

          {/* ── FEATURE OVERLAYS ──────────────────────────── */}
          {sections.map((sec, i) => (
            <div key={sec.id} style={{
              position: "absolute", inset: 0, zIndex: 5,
              display: "flex", alignItems: "center", pointerEvents: "none",
            }}>
              <div style={{
                width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem",
              }}>
                <div style={{
                  maxWidth: 480, padding: "2.5rem",
                  background: activeSection === i ? "rgba(5,5,5,0.65)" : "transparent",
                  backdropFilter: activeSection === i ? "blur(24px)" : "none",
                  WebkitBackdropFilter: activeSection === i ? "blur(24px)" : "none",
                  borderRadius: 24,
                  border: activeSection === i ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
                  opacity: activeSection === i ? 1 : 0,
                  transform: activeSection === i ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
                  pointerEvents: activeSection === i ? "auto" : "none",
                  marginLeft: sec.align === "left" ? 0 : "auto",
                  marginRight: sec.align === "right" ? 0 : "auto",
                }}>
                  <div className="feature-label">{sec.label}</div>
                  <h2 className="feature-title" style={{ whiteSpace: "pre-line", marginTop: "1rem" }}>
                    {sec.title}
                  </h2>
                  <p className="feature-description" style={{ marginTop: "1rem" }}>
                    {sec.description}
                  </p>
                  {sec.specs && (
                    <div className="feature-specs" style={{ marginTop: "1.5rem" }}>
                      {sec.specs.map((sp, j) => (
                        <div key={j} className="feature-spec">
                          <span className="feature-spec-value">{sp.value}</span>
                          <span className="feature-spec-label">{sp.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Scroll indicator */}
          {heroVisible && loaded && (
            <div className="scroll-indicator">
              <span className="scroll-indicator-text">Scroll to Explore</span>
              <div className="scroll-indicator-line" />
            </div>
          )}

          {/* Progress bar */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, height: 2,
            width: `${scrollProgress * 100}%`,
            background: "linear-gradient(90deg, #0050FF, #00D6FF)",
            zIndex: 10, transition: "width 0.1s linear",
          }} />
        </div>
      </div>

      {/* ━━ EXPERIENCE SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {product.sections?.experience && (
        <section className="section" style={{
          background: "var(--color-bg-secondary)",
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}>
          <div className="container">
            <div className="feature-block">
              <RevealBlock>
                <div className="feature-label">{product.sections.experience.label}</div>
                <h2 className="feature-title" style={{ whiteSpace: "pre-line" }}>
                  {product.sections.experience.title}
                </h2>
                <p className="feature-description">{product.sections.experience.description}</p>
                {product.sections.experience.specs && (
                  <div className="feature-specs">
                    {product.sections.experience.specs.map((sp, i) => (
                      <div key={i} className="feature-spec">
                        <span className="feature-spec-value">{sp.value}</span>
                        <span className="feature-spec-label">{sp.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </RevealBlock>
              <div className="feature-block-image" style={{ background: "var(--color-bg-primary)" }}>
                <img
                  src={`${product.folder}/ezgif-frame-${String(product.ctaFrame || 35).padStart(3, "0")}.png`}
                  alt={`${product.name} detail`}
                  style={{ objectFit: "contain", padding: "2rem" }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ━━ SPECS TABLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {product.fullSpecs && (
        <section className="section" id="specs" style={{ background: "var(--color-bg-primary)" }}>
          <div className="container container-narrow">
            <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
              <span className="text-caption" style={{ color: "var(--color-glow)" }}>
                Technical Specifications
              </span>
              <h2 className="text-display" style={{ marginTop: "var(--space-3)" }}>
                Every Detail,<br />Perfected
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              {Object.entries(product.fullSpecs).map(([category, specs]) => (
                <RevealBlock key={category}>
                  <div className="glass-card" style={{ padding: "var(--space-6)" }}>
                    <h3 style={{
                      fontSize: "var(--text-xs)", fontWeight: 600,
                      letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "var(--color-glow)", marginBottom: "var(--space-4)",
                    }}>
                      {category}
                    </h3>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "var(--space-4)",
                    }}>
                      {Object.entries(specs).map(([key, value]) => (
                        <div key={key}>
                          <div style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--color-text-tertiary)",
                            marginBottom: "var(--space-1)",
                            textTransform: "uppercase", letterSpacing: "0.05em",
                          }}>{key}</div>
                          <div style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--color-text-primary)", fontWeight: 500,
                          }}>{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━ CTA SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-image">
              <img
                src={`${product.folder}/ezgif-frame-001.png`}
                alt={product.name}
                style={{ borderRadius: 24 }}
              />
            </div>
            <h2 className="cta-title">
              Ready to Experience<br />
              <span className="text-gradient">{shortName}?</span>
            </h2>
            <p className="cta-subtitle">{product.description}</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary btn-lg" 
                onClick={() => {
                  alert(`Added ${shortName} to your cart for ${product.price}.`);
                }}
              >
                Add to Cart — {product.price}
              </button>
              <Link href="#specs" className="btn btn-glow btn-lg">
                View Specifications
              </Link>
            </div>
            <p style={{
              fontSize: "var(--text-sm)",
              color: "var(--color-text-muted)",
              marginTop: "var(--space-2)",
            }}>
              {product.price} · Free Shipping · 30-Day Returns
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// ── RevealBlock: scroll-triggered fade-in ───────────────────
function RevealBlock({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="feature-block-text reveal">
      {children}
    </div>
  );
}
