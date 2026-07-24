import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FaqContent from "@/components/FaqContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ — Your Sugarbeet questions, answered",
  description:
    "Answers to common questions about Sugarbeet — how it works, launch plans, membership, safety, privacy, and how to join the waitlist.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Sugarbeet FAQ",
    description:
      "Everything you need to know about Sugarbeet — launch, membership, safety, and more.",
    url: "https://sugarbeet.app/faq",
  },
};

export default function FaqPage() {
  return (
    <main className="main-page animated">
      <Navbar />
      <FaqContent />
      <Footer />
    </main>
  );
}
