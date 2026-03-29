"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import products from "@/data/products";

const pressReviews = [
  {
    publication: "Wired",
    quote: "The Vionics ecosystem is the most cohesive integration of hardware and AI we have ever tested. It doesn't just feel like the future; it defines it.",
    author: "Lauren Goode",
    rating: 5,
  },
  {
    publication: "The Verge",
    quote: "AuraSound Pro achieves what other audio brands promise: true immersion without the heavy tax of uncomfortable design. A masterpiece.",
    author: "Chris Welch",
    rating: 5,
  },
  {
    publication: "TechInsider",
    quote: "With the V3 Neural SoC, the ProBook X1 is casually outperforming machines twice its size. Vionics isn't playing catch-up; they're lapping the industry.",
    author: "Marcus Brown",
    rating: 5,
  },
];

const customerReviews = [
  {
    product: "Vionics Nexus Ultra",
    author: "Sarah J.",
    location: "New York, NY",
    rating: 5,
    title: "Completely changes how I work",
    content: "The neural camera processing is mind-blowing. I shoot campaigns on this phone now instead of my DSLR. The titanium frame also feels incredibly premium—worth every penny.",
    date: "2 weeks ago",
  },
  {
    product: "Vionics AuraSound Pro",
    author: "David L.",
    location: "London, UK",
    rating: 5,
    title: "I hear things I've never heard before",
    content: "I've been an audiophile for 20 years. The spatial separation on these headphones is witchcraft. The AI noise cancellation is also completely dead-silent on airplanes.",
    date: "1 month ago",
  },
  {
    product: "Vionics ProBook X1",
    author: "Elena R.",
    location: "Berlin, DE",
    rating: 5,
    title: "Absolute powerhouse",
    content: "Running local LLMs on this machine is absurdly fast. The unified memory architecture means I never bottleneck. Plus, it weighs almost nothing. The best laptop I've ever owned.",
    date: "1 month ago",
  },
  {
    product: "Vionics Chronos AI",
    author: "Michael T.",
    location: "Sydney, AU",
    rating: 5,
    title: "Saved my life, literally",
    content: "The continuous health monitoring detected an irregular rhythm that my doctor previously missed. The UI is gorgeous, the sapphire glass hasn't scratched once.",
    date: "3 months ago",
  },
  {
    product: "Vionics AirPulse",
    author: "Jessica M.",
    location: "Seattle, WA",
    rating: 4.5,
    title: "Tiny but fierce",
    content: "I forget they are in my ears. The hybrid drivers deliver shocking bass for something this small. Only knocking half a star because I wish they came in a matte white colorway.",
    date: "3 months ago",
  },
  {
    product: "Vionics Canvas Pro",
    author: "Alex K.",
    location: "Austin, TX",
    rating: 5,
    title: "The ultimate creative tool",
    content: "The tandem OLED display is the brightest screen I've ever seen. Period. Drawing with the V-Pencil feels exactly like paper. The AI upscaling feature saves me hours of work.",
    date: "4 months ago",
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div style={{ display: "flex", gap: "2px", color: "var(--color-glow)" }}>
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" stroke="currentColor" strokeWidth="1" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      )}
    </div>
  );
}

export default function ReviewsPage() {
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
        <span className="product-hero-label">Reviews</span>
        <h1 className="text-display" style={{ marginTop: "var(--space-3)" }}>
          The Consensus is <span className="text-gradient">Clear</span>
        </h1>
        <p className="text-body" style={{ maxWidth: 600 }}>
          Don&apos;t just take our word for it. See what industry experts and the Vionics community are saying about our ecosystem.
        </p>
      </section>

      {/* Press Reviews */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <span className="text-caption" style={{ color: "var(--color-glow)" }}>Industry Praise</span>
            <h2 className="text-title" style={{ marginTop: "var(--space-2)" }}>Awards & Recognition</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-6)",
          }}>
            {pressReviews.map((review, i) => (
              <RevealCard key={i} delay={i * 100}>
                <div className="glass-card" style={{ padding: "var(--space-8)", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{
                    fontSize: "var(--text-xs)", fontWeight: 700,
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "var(--color-text-tertiary)",
                    marginBottom: "var(--space-4)",
                  }}>
                    {review.publication}
                  </div>
                  <blockquote style={{
                    fontSize: "var(--text-lg)",
                    fontWeight: 500,
                    lineHeight: "var(--leading-relaxed)",
                    flex: 1,
                  }}>
                    "{review.quote}"
                  </blockquote>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "var(--space-6)" }}>
                    <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>
                      — {review.author}
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Grid */}
      <section className="section" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <span className="text-caption" style={{ color: "var(--color-glow)" }}>Community</span>
            <h2 className="text-display" style={{ marginTop: "var(--space-3)" }}>
              Real Experiences
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "var(--space-6)",
          }}>
            {customerReviews.map((review, i) => {
              // Find the slug to link to the product
              const matchedProduct = Object.values(products).find(p => p.name === review.product);
              const productSlug = matchedProduct ? matchedProduct.slug : "";

              return (
                <RevealCard key={i} delay={(i % 3) * 100}>
                  <div className="glass-card" style={{ padding: "var(--space-6)", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "var(--text-md)" }}>{review.author}</div>
                        <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-tertiary)" }}>{review.location} • {review.date}</div>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>

                    <h3 style={{ fontSize: "var(--text-md)", fontWeight: 700, marginBottom: "var(--space-2)" }}>
                      "{review.title}"
                    </h3>
                    
                    <p style={{
                      fontSize: "var(--text-sm)", color: "var(--color-text-secondary)",
                      lineHeight: "var(--leading-relaxed)", flex: 1,
                    }}>
                      {review.content}
                    </p>

                    <div style={{
                      marginTop: "var(--space-6)", paddingTop: "var(--space-4)",
                      borderTop: "1px solid var(--color-border)",
                      display: "flex", alignItems: "center", justifyContent: "space-between"
                    }}>
                      <div style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-text-muted)" }}>
                        Verified Purchase
                      </div>
                      {productSlug && (
                        <Link href={`/${productSlug}`} style={{
                          fontSize: "var(--text-xs)", fontWeight: 600,
                          color: "var(--color-glow)", textDecoration: "none"
                        }}>
                          {review.product} →
                        </Link>
                      )}
                    </div>
                  </div>
                </RevealCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Write a review CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Share Your <span className="text-gradient">Experience</span>
            </h2>
            <p className="cta-subtitle">
              Join the future. Let the community know how Vionics has transformed your daily workflow.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Write a Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Reusable scroll reveal wrapper
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
