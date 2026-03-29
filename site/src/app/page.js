"use client";

import Link from "next/link";
import products from "@/data/products";
import { useRef } from "react";

const productList = [
  products.headphones,
  products.smartphone,
  products.earbuds,
  products.smartwatch,
  products.laptop,
  products.powerbank,
  products.tablet,
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-full"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(0,80,255,0.08) 0%, transparent 60%)",
          flexDirection: "column",
          gap: "var(--space-6)",
          textAlign: "center",
          padding: "0 var(--space-6)",
        }}
      >
        <span
          className="text-caption"
          style={{
            color: "var(--color-glow)",
            padding: "var(--space-2) var(--space-5)",
            border: "1px solid rgba(0,214,255,0.2)",
            borderRadius: "var(--radius-full)",
            background: "rgba(0,214,255,0.05)",
          }}
        >
          Introducing the Vionics Ecosystem
        </span>
        <h1 className="text-hero" style={{ marginTop: "var(--space-4)" }}>
          Intelligence,<br />
          <span className="text-gradient">Engineered.</span>
        </h1>
        <p
          className="text-body"
          style={{ maxWidth: 560, margin: "0 auto", fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
        >
          Seven flagship products. One seamless ecosystem. Powered by AI,
          designed for the future.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
          <Link href="/headphones" className="btn btn-primary btn-lg">
            Explore Products
          </Link>
          <Link href="/compare" className="btn btn-glow btn-lg">
            AI Compare
          </Link>
        </div>

        <div className="scroll-indicator" style={{ position: "absolute", bottom: "2rem" }}>
          <span className="scroll-indicator-text">Discover</span>
          <div className="scroll-indicator-line" />
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="section" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <span className="text-caption" style={{ color: "var(--color-glow)" }}>
              The Lineup
            </span>
            <h2 className="text-display" style={{ marginTop: "var(--space-3)" }}>
              Our Flagship Products
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {productList.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              The Future is<br />
              <span className="text-gradient">Intelligent</span>
            </h2>
            <p className="cta-subtitle">
              Every Vionics product is engineered with AI at its core.
              Experience the next generation of technology.
            </p>
            <div className="cta-buttons">
              <Link href="/headphones" className="btn btn-primary btn-lg">
                Start with AuraSound Pro
              </Link>
              <Link href="/about" className="btn btn-ghost btn-lg">
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }) {
  const imgRef = useRef(null);

  return (
    <Link
      href={`/${product.slug}`}
      className="glass-card"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={() => {
        if (imgRef.current) imgRef.current.style.transform = "scale(1.08)";
      }}
      onMouseLeave={() => {
        if (imgRef.current) imgRef.current.style.transform = "scale(1)";
      }}
    >
      <div
        style={{
          aspectRatio: "16/10",
          background: "var(--color-bg-primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "1rem",
        }}
      >
        <img
          ref={imgRef}
          src={`${product.folder}/ezgif-frame-001.png`}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
      <div style={{ padding: "var(--space-5)" }}>
        <span
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--color-glow)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 600,
          }}
        >
          {product.category}
        </span>
        <h3
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: 700,
            marginTop: "var(--space-1)",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--color-text-secondary)",
            marginTop: "var(--space-1)",
          }}
        >
          {product.tagline}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "var(--space-4)",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--color-text-primary)",
            }}
          >
            {product.price}
          </span>
          <span
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-accent)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
