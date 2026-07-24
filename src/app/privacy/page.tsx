import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrivacyContent from "@/components/PrivacyContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — How Sugarbeet handles your data",
  description:
    "The Sugarbeet Privacy Policy: what personal information we collect, how we use and share it, your rights, and how we keep your data safe.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Sugarbeet Privacy Policy",
    description:
      "How Sugarbeet Labs collects, uses, shares, and protects your personal information.",
    url: "https://sugarbeet.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main id="top" className="main-page animated">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
