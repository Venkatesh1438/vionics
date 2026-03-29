"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const VionicsLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 22 L 38 26 L 48 86 L 26 40 Z" fill="url(#logo-v-dark)" />
    <path d="M82 22 L 64 26 L 53 50 L 70 38 Z" fill="url(#logo-v-dark)" />
    <path d="M68 41 L 49 55 L 50 86 Z" fill="url(#logo-v-blue)" />
    <defs>
      <linearGradient id="logo-v-blue" x1="49" y1="55" x2="68" y2="86" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0050FF" />
        <stop offset="1" stopColor="#00D6FF" />
      </linearGradient>
      <linearGradient id="logo-v-dark" x1="18" y1="22" x2="50" y2="86" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#94A3B8" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="main-nav">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <VionicsLogo />
          <span>VIONICS</span>
        </Link>

        <ul className="navbar-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/compare">Compare</Link></li>
        </ul>

        <Link href="/cart" className="navbar-cta" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          Cart
        </Link>

        <button
          className="navbar-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "var(--nav-height)",
            background: "rgba(5,5,5,0.95)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            animation: "fade-in 0.3s ease forwards",
          }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/#products", label: "Products" },
            { href: "/about", label: "About" },
            { href: "/reviews", label: "Reviews" },
            { href: "/compare", label: "Compare" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.25rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
