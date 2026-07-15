import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PartnersContent from "@/components/PartnersContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partners — Growing good together",
  description:
    "The people and organizations SugarBeet stands behind — from aquatics access to food security — as part of our 1% Pledge.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "SugarBeet Partners — We grow good together",
    description:
      "Meet the partners bringing our 1% Pledge to life, starting with Tankproof.",
    url: "https://sugarbeet.app/partners",
  },
};

export default function PartnersPage() {
  return (
    <main className="main-page animated">
      <Navbar />
      <PartnersContent />
      <Footer />
    </main>
  );
}
