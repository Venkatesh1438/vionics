"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import products from "@/data/products";

const productList = Object.values(products);

export default function ComparePage() {
  const [productA, setProductA] = useState("headphones");
  const [productB, setProductB] = useState("earbuds");

  const pA = products[productA];
  const pB = products[productB];

  // Merge all spec categories from both products
  const allCategories = new Set([
    ...Object.keys(pA.fullSpecs || {}),
    ...Object.keys(pB.fullSpecs || {}),
  ]);

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
          minHeight: "50vh",
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,80,255,0.08) 0%, transparent 60%)",
        }}
      >
        <span className="product-hero-label">AI-Powered</span>
        <h1 className="text-display" style={{ marginTop: "var(--space-3)" }}>
          Compare <span className="text-gradient">Products</span>
        </h1>
        <p className="text-body" style={{ maxWidth: 500 }}>
          Side-by-side intelligent comparison powered by Vionics AI.
          Select two products to see how they stack up.
        </p>
      </section>

      {/* Selectors */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto 1fr",
            gap: "var(--space-6)", alignItems: "center",
            marginBottom: "var(--space-12)",
          }}>
            {/* Product A selector */}
            <CompareSelector
              value={productA}
              onChange={setProductA}
              product={pA}
              exclude={productB}
            />

            {/* VS badge */}
            <div style={{
              width: 64, height: 64,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0050FF, #00D6FF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: "var(--text-lg)",
              boxShadow: "0 0 40px rgba(0,80,255,0.3)",
              flexShrink: 0,
            }}>
              VS
            </div>

            {/* Product B selector */}
            <CompareSelector
              value={productB}
              onChange={setProductB}
              product={pB}
              exclude={productA}
            />
          </div>

          {/* Comparison Table */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {/* Product header row */}
            <div className="glass-card" style={{
              padding: "var(--space-6)",
              display: "grid", gridTemplateColumns: "200px 1fr 1fr", gap: "var(--space-6)",
              alignItems: "center",
            }}>
              <div style={{
                fontSize: "var(--text-xs)", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.15em",
                color: "var(--color-text-tertiary)",
              }}>
                Specification
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={`${pA.folder}/ezgif-frame-001.png`}
                  alt={pA.name}
                  style={{ maxHeight: 120, margin: "0 auto", objectFit: "contain" }}
                />
                <div style={{ fontWeight: 700, marginTop: "var(--space-2)" }}>{pA.name}</div>
                <div style={{
                  fontSize: "var(--text-sm)", color: "var(--color-glow)", fontWeight: 600,
                }}>{pA.price}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={`${pB.folder}/ezgif-frame-001.png`}
                  alt={pB.name}
                  style={{ maxHeight: 120, margin: "0 auto", objectFit: "contain" }}
                />
                <div style={{ fontWeight: 700, marginTop: "var(--space-2)" }}>{pB.name}</div>
                <div style={{
                  fontSize: "var(--text-sm)", color: "var(--color-glow)", fontWeight: 600,
                }}>{pB.price}</div>
              </div>
            </div>

            {/* Spec categories */}
            {[...allCategories].map((category) => {
              const specsA = pA.fullSpecs?.[category] || {};
              const specsB = pB.fullSpecs?.[category] || {};
              const allKeys = new Set([...Object.keys(specsA), ...Object.keys(specsB)]);

              return (
                <div key={category} className="glass-card" style={{ padding: "var(--space-6)" }}>
                  <h3 style={{
                    fontSize: "var(--text-xs)", fontWeight: 600,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "var(--color-glow)", marginBottom: "var(--space-4)",
                  }}>
                    {category}
                  </h3>
                  {[...allKeys].map((key) => (
                    <div
                      key={key}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "200px 1fr 1fr",
                        gap: "var(--space-6)",
                        padding: "var(--space-3) 0",
                        borderBottom: "1px solid var(--color-border)",
                        alignItems: "center",
                      }}
                    >
                      <div style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--color-text-tertiary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}>
                        {key}
                      </div>
                      <div style={{
                        fontSize: "var(--text-sm)", fontWeight: 500,
                        textAlign: "center",
                        color: specsA[key] ? "var(--color-text-primary)" : "var(--color-text-muted)",
                      }}>
                        {specsA[key] || "—"}
                      </div>
                      <div style={{
                        fontSize: "var(--text-sm)", fontWeight: 500,
                        textAlign: "center",
                        color: specsB[key] ? "var(--color-text-primary)" : "var(--color-text-muted)",
                      }}>
                        {specsB[key] || "—"}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* AI Recommendation */}
          <div
            className="glass-strong"
            style={{
              marginTop: "var(--space-12)",
              padding: "var(--space-8)",
              textAlign: "center",
              borderRadius: "var(--radius-xl)",
              background: "linear-gradient(135deg, rgba(0,80,255,0.08), rgba(0,214,255,0.04))",
              border: "1px solid rgba(0,214,255,0.15)",
            }}
          >
            <div style={{
              fontSize: "var(--text-xs)", fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--color-glow)", marginBottom: "var(--space-3)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
              </svg>
              AI Recommendation
            </div>
            <h3 className="text-title" style={{ marginBottom: "var(--space-2)" }}>
              Based on your comparison
            </h3>
            <p className="text-body" style={{ maxWidth: 600, margin: "0 auto" }}>
              Both products excel in their category. The <strong>{pA.name}</strong> offers superior {pA.category === "Audio" ? "audio fidelity" : "performance"},
              while the <strong>{pB.name}</strong> delivers exceptional {pB.category === "Audio" ? "portability" : "versatility"}.
              Choose based on your primary use case.
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", marginTop: "var(--space-6)" }}>
              <Link href={`/${pA.slug}`} className="btn btn-primary">
                Explore {pA.name.split(" ").pop()}
              </Link>
              <Link href={`/${pB.slug}`} className="btn btn-glow">
                Explore {pB.name.split(" ").pop()}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CompareSelector({ value, onChange, product, exclude }) {
  return (
    <div className="glass-card" style={{ padding: "var(--space-5)" }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "var(--space-3) var(--space-4)",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          color: "var(--color-text-primary)",
          fontSize: "var(--text-sm)",
          fontFamily: "inherit",
          fontWeight: 600,
          outline: "none",
          cursor: "pointer",
          appearance: "none",
        }}
      >
        {productList.map((p) => (
          <option
            key={p.slug}
            value={p.slug}
            disabled={p.slug === exclude}
            style={{ background: "#0A0A0C", color: "#fff" }}
          >
            {p.name}
          </option>
        ))}
      </select>
      <div style={{
        fontSize: "var(--text-xs)", color: "var(--color-text-tertiary)",
        marginTop: "var(--space-2)", textTransform: "uppercase",
        letterSpacing: "0.1em",
      }}>
        {product.category} · {product.tagline}
      </div>
    </div>
  );
}
