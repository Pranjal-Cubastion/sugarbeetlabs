import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact us — Get in touch with Sugarbeet",
  description:
    "Questions, ideas, partnerships, or press? Reach the Sugarbeet team and we'll get back to you within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Sugarbeet",
    description:
      "Get in touch with the Sugarbeet team — support, partnerships, press, and more.",
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
