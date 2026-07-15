import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import HowStarted from "@/components/HowStarted";
import SwimSafe from "@/components/SwimSafe";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Real people, real connections",
  description:
    "SugarBeet is the dating app for plant-based hearts who lead with kindness. Learn how we started and how we keep the community real and safe.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SugarBeet — Real people, real connections",
    description:
      "How SugarBeet started, why authenticity comes first, and how we keep our community safe.",
    url: "https://sugarbeet.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="main-page animated">
      <Navbar />
      <AboutHero />
      <HowStarted />
      <SwimSafe />
      <Footer />
    </main>
  );
}
