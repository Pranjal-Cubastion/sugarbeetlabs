import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact us — Get in touch with SugarBeet",
  description:
    "Questions, ideas, partnerships, or press? Reach the SugarBeet team and we'll get back to you within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SugarBeet",
    description:
      "Get in touch with the SugarBeet team — support, partnerships, press, and more.",
    url: "https://sugarbeet.app/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="main-page animated">
      <Navbar />
      <ContactHero />
      <Footer />
    </main>
  );
}
