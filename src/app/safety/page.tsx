import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SafetyContent from "@/components/SafetyContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Safety at Sugarbeet — Dating safety tips & resources",
  description:
    "How to stay safe on Sugarbeet: protecting your personal information, meeting safely in person, spotting romance scams, and helpful emergency resources.",
  alternates: { canonical: "/safety" },
  openGraph: {
    title: "Safety at Sugarbeet",
    description:
      "Online dating safety tips, fraud awareness, and support resources from the Sugarbeet team.",
    url: "https://sugarbeet.app/safety",
  },
};

export default function SafetyPage() {
  return (
    <main className="main-page animated">
      <Navbar />
      <SafetyContent />
      <Footer />
    </main>
  );
}
