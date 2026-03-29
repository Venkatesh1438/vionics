"use client";
import ProductPage from "@/components/ProductPage";
import products from "@/data/products";
export default function TabletPage() {
  return <ProductPage product={products.tablet} />;
}
