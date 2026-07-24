import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TermsContent from "@/components/TermsContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sugarbeet Terms of Use",
  description:
    "The Sugarbeet Terms and Conditions of Use: account rules, content, payments, dispute resolution, and your rights when using Sugarbeet.",
  alternates: { canonical: "/tcs" },
  openGraph: {
    title: "Sugarbeet Terms & Conditions",
    description:
      "Read the Terms and Conditions of Use for the Sugarbeet website and app.",
    url: "https://sugarbeet.app/tcs",
  },
};

export default function TermsPage() {
  return (
    <main id="top" className="main-page animated">
      <Navbar />
      <TermsContent />
      <Footer />
    </main>
  );
}
