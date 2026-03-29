"use client";
import ProductPage from "@/components/ProductPage";
import products from "@/data/products";
export default function LaptopPage() {
  return <ProductPage product={products.laptop} />;
}
