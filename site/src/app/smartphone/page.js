"use client";
import ProductPage from "@/components/ProductPage";
import products from "@/data/products";
export default function SmartphonePage() {
  return <ProductPage product={products.smartphone} />;
}
