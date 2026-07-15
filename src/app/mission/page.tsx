import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MissionContent from "@/components/MissionContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mission — Our 1% Pledge",
  description:
    "SugarBeet believes connection should do more than bring people together. Through our 1% Pledge we help feed communities, protect animals, and care for the planet.",
  alternates: { canonical: "/mission" },
  openGraph: {
    title: "SugarBeet Mission — Small actions, big impact",
    description:
      "One percent of every subscription goes to hunger relief, animal welfare, and the planet.",
    url: "https://sugarbeet.app/mission",
  },
};

export default function MissionPage() {
  return (
    <main className="main-page animated">
      <Navbar />
      <MissionContent />
      <Footer />
    </main>
  );
}
