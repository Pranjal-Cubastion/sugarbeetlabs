import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GuidelinesContent from "@/components/GuidelinesContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Community Guidelines — How we grow together on Sugarbeet",
  description:
    "The Sugarbeet Community Guidelines: be authentic, be respectful, keep it safe, no scams, respect privacy, and keep content appropriate.",
  alternates: { canonical: "/guidelines" },
  openGraph: {
    title: "Sugarbeet Community Guidelines",
    description:
      "Our shared rules for a respectful, authentic, and safe Sugarbeet community.",
    url: "https://sugarbeet.app/guidelines",
  },
};

export default function GuidelinesPage() {
  return (
    <main className="main-page animated">
      <Navbar />
      <GuidelinesContent />
      <Footer />
    </main>
  );
}
