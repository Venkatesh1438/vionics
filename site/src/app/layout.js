import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Vionics — Intelligence, Engineered.",
  description:
    "Vionics is a next-generation AI-powered technology brand combining precision engineering with artificial intelligence. Explore our flagship products.",
  keywords: "Vionics, AI technology, smart devices, futuristic tech, premium electronics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
