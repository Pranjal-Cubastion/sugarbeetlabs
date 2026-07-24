import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LabsContent from "@/components/LabsContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Labs — News, press & experiments | Sugarbeet",
  description:
    "Sugarbeet Labs: product experiments, press coverage, and fresh thinking from the team growing conscious, plant-based dating.",
  alternates: { canonical: "/labs" },
  openGraph: {
    title: "Sugarbeet Labs — News, press & experiments",
    description:
      "Experiments, press and fresh ideas from the team behind Sugarbeet.",
    url: "https://sugarbeet.app/labs",
  },
};

export default function LabsPage() {
  return (
    <main className="main-page animated">
      <Navbar />
      <LabsContent />
      <Footer />
    </main>
  );
}
