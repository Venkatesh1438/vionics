"use client";

import { useState } from "react";
import Link from "next/link";
import products from "@/data/products";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      product: products.headphones,
      quantity: 1,
      id: "cart_item_1"
    },
    {
      product: products.smartphone,
      quantity: 1,
      id: "cart_item_2"
    }
  ]);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
  };

  const subtotal = items.reduce((sum, item) => sum + (parsePrice(item.product.price) * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% dummy tax
  const total = subtotal + tax;

  const formatPrice = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(num);
  };

  if (items.length === 0) {
    return (
      <section className="section-full" style={{ flexDirection: "column", textAlign: "center", justifyContent: "center" }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "rgba(255,255,255,0.03)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto var(--space-6)", color: "var(--color-text-tertiary)"
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </div>
        <h1 className="text-display">Your bag is empty.</h1>
        <p className="text-body" style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-6)" }}>
          Intelligence awaits. Discover the Vionics ecosystem.
        </p>
        <Link href="/" className="btn btn-primary btn-lg">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(120px, 15vh, 180px)", minHeight: "100vh" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h1 className="text-display" style={{ marginBottom: "var(--space-8)" }}>
            Review your <span className="text-gradient">Bag.</span>
          </h1>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-8)",
          }}>
            {/* Items List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              {items.map((item) => (
                <div key={item.id} className="glass-card" style={{
                  padding: "var(--space-6)",
                  display: "flex",
                  gap: "var(--space-6)",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                  {/* Product Image */}
                  <div style={{
                    width: 140, height: 140,
                    background: "var(--color-bg-primary)",
                    borderRadius: "var(--radius-md)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "1rem"
                  }}>
                    <img 
                      src={`${item.product.folder}/ezgif-frame-001.png`} 
                      alt={item.product.name}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>

                  {/* Product Details */}
                  <div style={{ flex: "1 1 min-content" }}>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                      {item.product.category}
                    </div>
                    <Link href={`/${item.product.slug}`} style={{ fontSize: "var(--text-xl)", fontWeight: 700, textDecoration: "none", color: "var(--color-text-primary)" }}>
                      {item.product.name}
                    </Link>
                    <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", marginTop: "8px" }}>
                      {item.product.price}
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1rem" }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "1rem",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-full)",
                      padding: "4px 8px"
                    }}>
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{ width: 28, height: 28, borderRadius: "50%", background: "transparent", color: "var(--color-text-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none" }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, width: "20px", textAlign: "center" }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{ width: 28, height: 28, borderRadius: "50%", background: "transparent", color: "var(--color-text-primary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none" }}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      style={{
                        background: "transparent", border: "none", color: "var(--color-text-tertiary)",
                        fontSize: "var(--text-xs)", textDecoration: "underline", cursor: "pointer", textUnderlineOffset: 4
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="glass-card" style={{ padding: "var(--space-8)" }}>
              <h2 style={{ fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Order Summary</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-6)", marginBottom: "var(--space-6)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-secondary)" }}>
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-secondary)" }}>
                  <span>Estimated Shipping</span>
                  <span style={{ color: "var(--color-glow)" }}>Complimentary</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-secondary)" }}>
                  <span>Estimated Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-2xl)", fontWeight: 700, marginBottom: "var(--space-8)" }}>
                <span>Total</span>
                <span className="text-gradient">{formatPrice(total)}</span>
              </div>

              <button className="btn btn-primary btn-lg" style={{ width: "100%" }} onClick={() => alert('Proceeding to Checkout...')}>
                Check Out
              </button>
              
              <p style={{ textAlign: "center", fontSize: "var(--text-xs)", color: "var(--color-text-tertiary)", marginTop: "var(--space-4)" }}>
                Need help? Chat with a Vionics Specialist online or call 1-800-VIONICS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
